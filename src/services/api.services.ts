import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import Config from 'react-native-config';
class ApiService {
  private client: AxiosInstance;
  private abortController: AbortController | null = null;
  constructor() {
    console.log('config', Config.BASE_URL)
    console.log('API KEY exists?', !!Config.OPENROUTER_API_KEY);
    this.client = axios.create(
      {
        baseURL: Config.BASE_URL,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    this.setupRequestInterceptor();
    this.setupResponseInterceptor();
  }

  private setupRequestInterceptor() {
    this.client.interceptors.request.use(config => {
      config.headers.Authorization =
      `Bearer ${Config.OPENROUTER_API_KEY}`;

    config.headers['Content-Type'] =
      'application/json';

      return config
    });
  }

  private setupResponseInterceptor() {
    this.client.interceptors.response.use(
      response => response,
      error => Promise.reject(error)
    );
  }

  async get<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response: AxiosResponse<T> =
    await this.client.get(url, config);

    return response.data;
  }

  async post<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<T> { 
    const response =
    await this.client.post<T>(
      url,
      data,
      {
        signal: this.abortController?.signal,
        ...config,
      },
    );

    return response.data;
  }

  async put<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<T> { 
    const response: AxiosResponse<T> =
    await this.client.put(url, data, config);

    return response.data;
  }

  async delete<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<T> { 
    const response: AxiosResponse<T> =
    await this.client.delete(url, config);

    return response.data;
  }

  createAbortController() { 
    this.abortController = new AbortController();

    return this.abortController;
  }

  abortCurrentRequest() { 
    this.abortController?.abort();
  }

}

export const apiService = new ApiService();