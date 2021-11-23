const { buildSchema } = require('graphql')

module.exports = buildSchema(`
 type Student {
   id: ID
   nome: String
   curso: String
   semestre: Int
   ra: String
   cpf: String
   cidade: String
 }
 type Query {
   students: [Student]
   student(id: ID!): Student
 }
 type Mutation {
   createStudent(
    nome: String!
    curso: String!
    semestre: Int!
    ra: String!
    cpf: String!
    cidade: String!
   ): Student
   updateStudent(
    id: ID!
    nome: String
    curso: String
    semestre: Int
    ra: String
    cpf: String
    cidade: String
   ): Student
   deleteStudent(id: ID!): String
 }
`)