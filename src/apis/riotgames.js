import axios from "axios";

export const APIKEY = "RGAPI-09262d7f-3664-413f-9473-99c6cc2c5cdd";

export const riotgames = axios.create({
  baseURL: "https://na1.api.riotgames.com/lol",
});

export const matches = axios.create({
  baseURL: "https://americas.api.riotgames.com/lol",
});
