const app = require('express')()
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema')
const resolvers = require('./student.resolvers')

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(4000, () => {
  console.log('API funcionando na porta 4000')
})
