import { getMovies, getById, addMovie } from "./db";

// js, DB, REST등 어디와도 연결 될 수 있음
const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id)
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score)
  }
};

export default resolvers;
