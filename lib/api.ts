// lib/api.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export type RequestOptions = {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  headers?: HeadersInit;
  body?: any;
  token?: string;
  // chỉ áp dụng ở server component
  nextOptions?: {
    revalidate?: number | false;
    tags?: string[];
  };
};

/**
 * Universal fetch: chạy được cả server component và client component
 */
export async function apiFetch<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const { method = "GET", headers = {}, body, token, nextOptions } = options;

  const url = `${API_BASE_URL}/api${endpoint}`;

  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
    cache: "no-store", // default tránh cache khi gọi ở client
    ...(nextOptions ? { next: nextOptions } : {}), // chỉ hoạt động ở server component
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || "API request failed");
  }

  return res.json();
}
