const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://mvnash:${password}@nashcluster.il73egy.mongodb.net/phoneBook?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const phoneBookSchema = new mongoose.Schema({
    name: String,
    number: Number,
})

const PhoneBook = mongoose.model('PhoneBook', phoneBookSchema)

if (process.argv.length == 3) {
    console.log("Phonebook:\n");
    PhoneBook.find({}).then(result => {
        result.forEach(user => {
            console.log(`${user.name} - ${user.number}`)
        })
        mongoose.connection.close()
    })
} else if (process.argv.length == 5) {
    const name = process.argv[3];
    const phoneNumber = process.argv[4];

    const phonebook = new PhoneBook({
        name: name,
        number: phoneNumber,
    })

    phonebook.save().then(result => {
        console.log(`added ${name} number ${phoneNumber} to phonebook`)
        mongoose.connection.close()
    })
}