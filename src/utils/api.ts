import axios, { AxiosRequestConfig, Method } from "axios";

/**
 * =========================
 * axios 기본 인스턴스
 * =========================
 */
const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 10000,
    withCredentials: true,
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

/**
 * =========================
 * 타입 정의
 * =========================
 */
interface ApiRequestOptions<T = any> {
  url: string;
  method?: Method;
  params?: Record<string, any>;
  data?: T;
  redirectUrl?: string;
  config?: AxiosRequestConfig;
}

/**
 * =========================
 * 핵심 API 함수
 * =========================
 */
export async function api<R = any, T = any>({
  url,
  method = "GET",
  params,
  data,
  redirectUrl,
  config,
}: ApiRequestOptions<T>): Promise<R> {
  try {
    const response = await apiClient({
      url,
      method,
      params,
      data,
      ...config,
    });

    return response.data;
  } catch (error: any) {
    const status = error.response?.status;

    if (status === 401 && redirectUrl) {
      window.location.href = redirectUrl;
    }

    throw error;
  }
}
