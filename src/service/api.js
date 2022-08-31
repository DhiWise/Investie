import { apis } from "service";

const COMMON_URL = `https://`;

const TWILIO_TOKEN = "Basic Enter the Twilio api Token here";
const TWILIO_ACCOUNT_SID = "Enter Twilio account SID here";
const MARKET_DATA_TOKEN = "Bearer Enter lemon.markets market data API token here";
const PAPER_TRADING_TOKEN =
  "Bearer Enter lemon.markets paper trading API token here";

const API_URLS = {
  POST_MESSAGES: `${COMMON_URL}api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages`,
  GET: `${COMMON_URL}data.lemon.markets/v1/instruments/`,
  POST: `${COMMON_URL}paper-trading.lemon.markets/v1/orders/`,
  GET_ORDERS: `${COMMON_URL}paper-trading.lemon.markets/v1/orders`,
  GET1: `${COMMON_URL}paper-trading.lemon.markets/v1/account/`,
  GET2: `${COMMON_URL}data.lemon.markets/v1/trades/`,
};

export const postMessages = (payload) =>
  apis.post(API_URLS.POST_MESSAGES, {
    ...payload,
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
      Authorization: TWILIO_TOKEN,
      ...payload?.headers,
    },
  });

export const get = (payload) =>
  apis.get(API_URLS.GET, {
    ...payload,
    headers: {
      Authorization: MARKET_DATA_TOKEN,
      ...payload?.headers,
    },
  });

export const post = (payload) =>
  apis.post(API_URLS.POST, {
    ...payload,
    headers: {
      Authorization: PAPER_TRADING_TOKEN,
      ...payload?.headers,
    },
  });

export const getOrders = (payload) =>
  apis.get(API_URLS.GET_ORDERS, {
    ...payload,
    headers: {
      Authorization: PAPER_TRADING_TOKEN,
      ...payload?.headers,
    },
  });

export const get1 = (payload) =>
  apis.get(API_URLS.GET1, {
    ...payload,
    headers: {
      Authorization: PAPER_TRADING_TOKEN,
      ...payload?.headers,
    },
  });

export const getTrade = (payload) =>
  apis.get(API_URLS.GET2, {
    ...payload,
    headers: {
      Authorization: MARKET_DATA_TOKEN,
      ...payload?.headers,
    },
  });
