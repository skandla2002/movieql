import { getMovies, getById, addMovie, deleteMovie } from "./db";

// js, DB, REST등 어디와도 연결 될 수 있음
const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id)
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id)
  }
};

export default resolvers;
