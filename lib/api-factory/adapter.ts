import { ApiFactoryAxiosOptions, ApiResponse } from "@/types/interfaces";
import { AxiosRequestConfig } from "axios";
import axiosInstance from "./axiosInstance";

let headers: any = {};

const queryToUrl = (url: string, params: any) => {
  return (
    url +
    Object.keys(params || {}).reduce(
      (q, p) => (q ? "&" : "?") + p + "=" + params[p],
      ""
    )
  );
};

export const setHeaders = (name: string, value: string) => {
  headers[name] = value;
};

export const setBearerToken = (token: string) => {
  setHeaders("Authorization", `Bearer ${token}`);
};

export const ApiFactoryAxios = (
  options: ApiFactoryAxiosOptions
): Promise<ApiResponse<any>> => {
  const url = queryToUrl(options.url, options.query);
  const opt: ApiFactoryAxiosOptions = {
    url,
    method: options.method || "GET",
    headers: options.headers || {},
    data: options.body,
  };
  return new Promise((resolve, reject) => {
    axiosInstance(opt as AxiosRequestConfig)
      .then((res) => resolve(res))
      .catch((err) => {
        switch (err?.response?.status) {
          case 403:
            console.log("Access denied");
            break;
          case 404:
            console.log("Not found");
            break;
          default:
            console.log(err.response);
            break;
        }
        reject(err);
      });
  });
};
