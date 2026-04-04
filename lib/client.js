import { handleResponse, handleError } from "./errorHandler";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

const request = async (endpoint, options = {}) => {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
      ...options,
    });

    // delegate all logic
    return await handleResponse(res);
  } catch (err) {
    return handleError(err);
  }
};

// Public API methods
export const apiClient = {
  get: (url) => request(url),

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
