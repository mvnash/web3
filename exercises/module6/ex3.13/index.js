const express = require("express")
const morgan = require('morgan')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

mongoose.set('strictQuery', false)
mongoose.connect(process.env.DATABASE_URL)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const phoneBookSchema = new mongoose.Schema({
  name: String,
  number: Number,
})

const PhoneBook = mongoose.model('PhoneBook', phoneBookSchema)


// Initializers. These blocks should be placed in different files, for example middlewares.js, server.js...
// but let's keep this simple.
const app = express()

app.use(express.json())

morgan.token('body', (request) => {
  return JSON.stringify(request.body)
})
morgan.token('currentUserEmail', (request) => {
  return request.currentUser && request.currentUser.email || "anonymous"
})
const logger = morgan(':method :url :status :res[content-length] - :response-time ms :body (:currentUserEmail)')
app.use(logger)

const attachCurrentuser = (request, response, next) => {
  const email = request.header("X-USER-EMAIL")
  if (email) request.currentUser = { email }
  next()
}
app.use(attachCurrentuser)


const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})



// Routes. These blocks should be placed in different files under "routes/" directory
// but let's keep this simple.
app.get("/info", (request, response) => {
  const now = new Date()
  const bodyContentText = `
  Phonebook has info for ${allPersons.length} people.
  ${now.toString()}
  `
  response
    .type("text")
    .send(bodyContentText)
})

app.get("/api/persons", (request, response) => {
  PhoneBook.find({}).then(result => {
    response.json(result)
  })
})

app.get("/api/persons/:id", (request, response) => {
  const idParam = request.params.id
  const id = Number(idParam)
  const person = allPersons.find(person => person.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete("/api/persons/:id", (request, response) => {
  const idParam = request.params.id
  const id = Number(idParam)
  const personIndex = allPersons.findIndex(person => person.id === id)
  if (personIndex > -1) {
    allPersons.splice(personIndex, 1) // We do NOT use delete because it creates a sparse array with a wrong length
  }
  response.status(204).end()
})

app.post("/api/persons", (request, response) => {
  const personPayload = request.body
  const newId = Math.floor(Math.random() * 1e9)
  const newPerson = {
    ...personPayload,
    id: newId,
  }

  const errorMessages = []
  if (!personPayload.name) errorMessages.push("name must be present")
  if (!personPayload.number) errorMessages.push("number must be present")
  const nameExists = allPersons.some(person => person.name === newPerson.name)
  if (nameExists) errorMessages.push("name must be unique")

  if (errorMessages.length > 0) {
    response
      .status(422)
      .json({
        errorMessages,
      })
    return
  }

  // push not concat here. We want to mutate the array.

  const phonebook = new PhoneBook({
    name: newPerson.name,
    number: newPerson.number,
  })

  phoneBook.save().then(result => {
    console.log(`added ${name} number ${number} to phonebook`)
  })
})
