export interface OpenRouterMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface OpenRouterRequest {
  model: string;
  messages: OpenRouterMessage[];
}

export interface OpenRouterChoice {
  message: OpenRouterMessage;
}

export interface OpenRequestResponse {
  choices: OpenRouterChoice[];
}