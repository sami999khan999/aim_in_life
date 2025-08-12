import {
  ApiClientOptionsType,
  ApiErrorType,
  ApiResponseType,
  HttpMethodsType,
} from "@/types/apiTypes";
import { baseUrl } from "./baseUrl";
import parseApiError from "./normalizePythonError";

const apiClient = async <T>(
  url: string,
  options: ApiClientOptionsType = {}
): Promise<ApiResponseType<T>> => {
  const { method = "GET", body, headers, ...restOpts } = options;
  const defaultHeaders = {
    "Content-Type": "application/json",
    // "X-CSRFToken": getCookie1("csrftoken") || "",
    Accept: "application/json",
    ...headers,
  };

  const config: RequestInit = {
    method,
    headers: defaultHeaders,
    ...(body && method !== "GET" ? { body: JSON.stringify(body) } : {}),
    credentials: "include",
    ...restOpts,
  };

  const attemptRequest = async (
    urlString: string,
    method?: HttpMethodsType
  ) => {
    const newConfig = {
      ...config,
      method: method || config.method,
    };

    const res = await fetch(`${baseUrl()}/${urlString}/`, newConfig);
    const status = res.status;
    let data: T | null = null;
    let error: ApiErrorType = null;

    const contentType = res.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      const json = await res.json();
      if (res.ok) {
        data = json as T;
      } else {
        error = parseApiError(json?.message ?? json?.detail ?? json);
      }
    } else if (!res.ok) {
      error = "Non-JSON error response";
    }

    return { data, error, status };
  };

  try {
    const { data, error, status } = await attemptRequest(url);

    if (status === 401) {
      const { error: refreshErr } = await attemptRequest("refresh", "POST");

      if (!refreshErr) {
        const { data, error, status } = await attemptRequest(url);
        return { data, error, status };
      }

      const { data, error, status } = await attemptRequest(url);

      return { data, error, status };
    }

    return { data, error, status };
  } catch (err: unknown) {
    let error = "An unexpected error occurred";

    if (err instanceof Error) {
      error = err.message;
    } else if (typeof err === "string") {
      error = err;
    }

    return {
      data: null,
      error: error,
      status: 500,
    };
  }
};

export default apiClient;
