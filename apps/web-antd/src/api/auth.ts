import { baseRequestClient, requestClient } from '#/api/request';

export interface CaptchaResult {
  image: string;
  image_type: string;
}

export interface LoginParams {
  username: string;
  password: string;
  captcha: string;
}

export interface LoginResult {
  access_token: string;
}

export interface RefreshTokenResult {
  data: string;
  status: number;
}

/**
 * 登录验证码
 */
export function getCaptchaApi() {
  return requestClient.get<CaptchaResult>('/v1/auth/captcha');
}

/**
 * 登录
 */
export async function loginApi(data: LoginParams) {
  return requestClient.post<LoginResult>('/v1/auth/login', data);
}

/**
 * 刷新accessToken
 */
export async function refreshTokenApi() {
  return baseRequestClient.post<RefreshTokenResult>('/auth/refresh');
}

/**
 * 退出登录
 */
export async function logoutApi() {
  return requestClient.post('/v1/auth/logout');
}

/**
 * 获取用户权限码
 */
export async function getAccessCodesApi() {
  return requestClient.get<string[]>('/auth/codes');
}
