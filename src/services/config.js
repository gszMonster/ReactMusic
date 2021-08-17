const devBaseUrl = "http://192.168.124.6:8080/";
const proBaseUrl = "";

export const BASE_URL = process.env.NODE_ENV === "development" ? devBaseUrl : proBaseUrl;

export const TIMEOUT = 5000;
