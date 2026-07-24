import axios from "axios";

export const tmdbApi = axios.create({
  baseURL: "https://api.themoviedb.org",
  params: {
    language: "es-SP",
  },
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_IMDB_BEARER_TOKEN}`,
  },
});
