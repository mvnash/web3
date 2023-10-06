import { useEffect, useState } from "react";
import Person from "./components/Person";
import PersonsAPI from "./services/person";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    PersonsAPI.getAll()
      .then((persons) => setPersons(persons))
      .catch((error) => console.warn(error));
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value);
  };

  const handleQueryChange = (event) => {
    setSearchQuery(event.target.value);
    const results = persons.filter((person) =>
      person.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      phone: newPhone,
    };

    persons.some((person) => person.name === newName)
      ? alert(newName + " is already contains in the list")
      : PersonsAPI.create(personObject).then((createdPerson) =>
          setPersons([...persons, createdPerson])
        );

    setNewPhone("");
    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        filter shown with <input onChange={handleQueryChange} />
      </form>

      <ul>
        {searchResults.map((result) => (
          <Person key={result.name} name={result.name} number={result.phone} />
        ))}
      </ul>

      <h2>Add New</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleNameChange} />
        </div>
        <div>
          number: <input onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <Person key={person.name} name={person.name} number={person.phone} />
        ))}
      </ul>
    </div>
  );
};

export default App;
