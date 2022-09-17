import axios from "axios";

export const APIKEY = "RGAPI-82da79ac-948a-490f-936f-9da6bda20462";

export const riotgames = axios.create({
  baseURL: "https://na1.api.riotgames.com/lol",
});

export const matches = axios.create({
  baseURL: "https://americas.api.riotgames.com/lol",
});
