import { getMovies, getMovie, getSuggestions } from "./db";

// js, DB, REST등 어디와도 연결 될 수 있음
const resolvers = {
  Query: {
    movies: (_, {rating, limit}) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id)
  }
};

export default resolvers;
