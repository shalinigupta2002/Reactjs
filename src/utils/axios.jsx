import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODExMTdmYTU4YThlMzFjMjQyZGNkOTdjMmU2ZTY1MiIsInN1YiI6IjY2MjNkM2EyNjJmMzM1MDE3ZGQ4NDQ1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MEj4F5lm7304nh5VB8IBHbFCmqja2eKcxl0oPzd0wAo',
  },
});
export default instance;