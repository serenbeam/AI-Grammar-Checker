import axios, { AxiosInstance } from 'axios';
class ApiService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create();
  }

  private setupRequestInterceptor() {}

  private setupResponseInterceptor() {}

  get<T>() {}

  post<T>() {}

  put<T>() {}

  delete<T>() {}

  createAbortController() {}

  abortCurrentRequest() {}

}

export const apiService = new ApiService();