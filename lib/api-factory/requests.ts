import { ApiFactoryAxios, setHeaders } from "./adapter";

const URL = "http://localhost:8000/api/v1";

setHeaders("content-type", "application/json");

//?------------------------ sample api call ------------------------------
export const userLogout = async () => {
  return ApiFactoryAxios({
    url: URL + "/logout",
    method: "POST",
  });
};
