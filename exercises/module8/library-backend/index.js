const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')
const { v1: uuid } = require('uuid')
const { GraphQLError } = require('graphql')

let books = [
    {
        name: "Arto Hellas",
        phone: "040-123543",
        street: "Tapiolankatu 5 A",
        city: "Espoo",
        id: "3d594650-3436-11e9-bc57-8b80ba54c431"
    },
    {
        name: "Matti Luukkainen",
        phone: "040-432342",
        street: "Malminkaari 10 A",
        city: "Helsinki",
        id: '3d599470-3436-11e9-bc57-8b80ba54c431'
    },
    {
        name: "Venla Ruuska",
        street: "Nallemäentie 22 C",
        city: "Helsinki",
        id: '3d599471-3436-11e9-bc57-8b80ba54c431'
    },
]

const typeDefs = `
  type Author {
    name: String!
    bookCount: Int!
    id: ID!
  }

  type Book {
    title: String!
    author: Author!
    published: Int
    genres: [String]
    id: ID!
  }

  type Query {
    bookCount: Int!
    authorCount: Int!
  }

  type Mutation {
    addPerson(
      name: String!
      phone: String
      street: String!
      city: String!
    ): Person
    editNumber(
        name: String!
        phone: String!
      ): Person
  }
`

const resolvers = {
    Query: {
        bookCount: () => books.length,
        authorCount: () => {
            const authors = [];
            books.forEach(element => {
                if (!authors.includes(element)) {
                    authors.concat(element)
                }
            });

            return authors.length;
        }
    },
    Book: {
        author: (root) => {
            return {
                name: root.name,
                bookCount: root.bookCount
            }
        }
    },
    Mutation: {
        addPerson: (root, args) => {

            if (persons.find(p => p.name === args.name)) {
                throw new GraphQLError('Name must be unique', {
                    extensions: {
                        code: 'BAD_USER_INPUT',
                        invalidArgs: args.name
                    }
                })
            }
            const person = { ...args, id: uuid() }
            persons = persons.concat(person)
            return person
        },
        editNumber: (root, args) => {
            const person = persons.find(p => p.name === args.name)
            if (!person) {
                return null
            }

            const updatedPerson = { ...person, phone: args.phone }
            persons = persons.map(p => p.name === args.name ? updatedPerson : p)
            return updatedPerson
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

startStandaloneServer(server, {
    listen: { port: 4000 },
}).then(({ url }) => {
    console.log(`Server ready at ${url}`)
})