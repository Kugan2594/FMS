const BASE_URL: string = "192.168.1.81";
const FM_WEB_PORT: number = 1014;
const FM_LOGIN_BASE_URL= `http://${BASE_URL}:${FM_WEB_PORT}/fleet-management-oauth`;
const FM_WEB_BASE_URL = `http://${BASE_URL}:${FM_WEB_PORT}/fleet-management-oauth/fleet-management-corporate/api/v1`;
const oauthClient = {
    username: "client1",
    password: "123",
};

export const CLIENT_PORT: number = 3000;
export const CLIENT_BASE: string = "localhost";

export const SYSTEM_CONFIG = {
    baseUrl: FM_WEB_BASE_URL,
    oauthClient: oauthClient,
    loginBaseUrl:FM_LOGIN_BASE_URL,
};
