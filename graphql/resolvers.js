import { getMovies } from "./db";

// js, DB, REST등 어디와도 연결 될 수 있음
const resolvers = {
  Query: {
    movies: () => getMovies()
  }
};

export default resolvers;
