import axios from "axios";

export const APIKEY = "RGAPI-616d3f09-b659-4290-93e9-da3f12320899";

export const riotgames = axios.create({
  baseURL: "https://na1.api.riotgames.com/lol",
});

export const matches = axios.create({
  baseURL: "https://americas.api.riotgames.com/lol",
});
