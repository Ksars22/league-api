import axios from "axios";

export const APIKEY = "RGAPI-27e8a814-8991-4c17-af9e-2373490f11cf";

export const riotgames = axios.create({
  baseURL: "https://na1.api.riotgames.com/lol",
});

export const matches = axios.create({
  baseURL: "https://americas.api.riotgames.com/lol",
});
