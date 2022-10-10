const BASE_URL: string = "localhost";
const FM_WEB_PORT: number = 2014;
const WEB_SOCKET_PORT: number = 1016;

const FM_LOGIN_BASE_URL = `http://${BASE_URL}:${FM_WEB_PORT}/fleet-management-oauth`;
const FM_WEB_BASE_URL = `http://${BASE_URL}:${FM_WEB_PORT}/fleet-management-oauth/api/v1`;
const FM_CORP_BASE_URL = `http://${BASE_URL}:${FM_WEB_PORT}/fleet-management-oauth/fleet-management-corporate/api/v1`;
const FM_ADMIN_BASE_URL = `http://${BASE_URL}:${FM_WEB_PORT}/fleet-management-oauth/fleet-management-resource/api/v1`;
const WEB_SOCKET_URL = `http://${BASE_URL}:${WEB_SOCKET_PORT}/ws`;
const oauthClient = {
    username: "client1",
    password: "123",
};

export const CLIENT_PORT: number = 3000;
export const CLIENT_BASE: string = "localhost";

export const SYSTEM_CONFIG = {
    baseUrl: FM_WEB_BASE_URL,
    oauthClient: oauthClient,
    loginBaseUrl: FM_LOGIN_BASE_URL,
    corporateUrl: FM_CORP_BASE_URL,
    adminUrl: FM_ADMIN_BASE_URL,
    webSocketUrl: WEB_SOCKET_URL,
};
