import axios from "axios";

export const APIKEY = "RGAPI-13ba884e-66aa-4e25-9b5b-e0ed2370d998";

export const riotgames = axios.create({
  baseURL: "https://na1.api.riotgames.com/lol",
});

export const matches = axios.create({
  baseURL: "https://americas.api.riotgames.com/lol",
});
