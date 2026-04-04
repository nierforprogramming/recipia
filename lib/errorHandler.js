export const handleResponse = async (res) => {
  let data;

  try {
    data = await res.json();
  } catch {
    return {
      success: false,
      error: {
        message: "Invalid JSON response",
        type: "PARSE",
      },
    };
  }

  if (!res.ok) {
    return {
      success: false,
      error: {
        message:
          data?.message || `Server Error: ${res.status} ${res.statusText}`,
        type: "SERVER",
        status: res.status,
      },
    };
  }

  if (data === null || (Array.isArray(data) && data.length === 0)) {
    return {
      success: true,
      data: [],
    };
  }

  if (
    typeof data === "object" &&
    !Array.isArray(data) &&
    Object.keys(data).length === 0
  ) {
    return {
      success: true,
      data: null,
    };
  }

  return {
    success: true,
    data,
    empty: false,
  };
};

export const handleError = (err) => {
  if (err instanceof TypeError) {
    return {
      success: false,
      error: {
        message: "Network error — check connection",
        type: "NETWORK",
      },
    };
  }

  if (err.name === "AbortError") {
    return {
      success: false,
      error: {
        message: "Request timeout",
        type: "TIMEOUT",
      },
    };
  }

  return {
    success: false,
    error: {
      message: err.message || "Unexpected error",
      type: "UNKNOWN",
    },
  };
};
