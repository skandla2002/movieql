import { people, getById } from "./db";
// const people = [
//   1 = {
//     name: "jong",
//     age: 18,
//     gender: "male"
//   },
//   {
//     name: "jong",
//     age: 66,
//     gender: "male"
//   },
//   {
//     name: "jong",
//     age: 55,
//     gender: "male"
//   },
//   {
//     name: "jong",
//     age: 44,
//     gender: "male"
//   },
//   {
//     name: "jong",
//     age: 33,
//     gender: "male"
//   },
//   {
//     name: "jong",
//     age: 22,
//     gender: "male"
//   }
// ];
const resolvers = {
  Query: {
    person: () => people,
    people: () => id => getById()
  }
};

export default resolvers;
