import { handleResponse, handleError } from "./errorHandler";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

const request = async (endpoint, options = {}) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
      signal: controller.signal,
      ...options,
    });

    clearTimeout(timeout);
    return await handleResponse(res);
  } catch (err) {
    clearTimeout(timeout);
    return handleError(err);
  }
};

// Public API methods
export const apiClient = {
  get: (url, options = {}) => request(url, options),

  post: (url, body) =>
    request(url, {
      method: "POST",
      body: JSON.stringify(body),
    }),

  put: (url, body) =>
    request(url, {
      method: "PUT",
      body: JSON.stringify(body),
    }),

  patch: (url, body) =>
    request(url, {
      method: "PATCH",
      body: JSON.stringify(body),
    }),

  delete: (url) =>
    request(url, {
      method: "DELETE",
    }),
};
