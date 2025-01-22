import { AxiosResponse } from "axios";

export type Theme = "dark" | "light";
export interface OccurredStates {
  type: "success" | "info" | "error" | "warning" | "not-specified" | null;
  code?: number;
  title?: string;
  message: string;
}
export interface ApiResponse<T> extends AxiosResponse {
  data: {
    message: string;
    result: T | any;
  };
}
export interface ApiFactoryAxiosOptions {
  url: string;
  query?: string;
  headers?: string | unknown;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: any;
  data?: any;
}
