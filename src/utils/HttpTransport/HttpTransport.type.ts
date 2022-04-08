export enum Methods {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Patch = 'PATCH',
  Delete = 'DELETE',
}

export interface RequestOptions {
  method?: Methods;
  headers?: Record<string, string>;
  timeout?: number;
  data?: any;
}
