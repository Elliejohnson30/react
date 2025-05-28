import React, { useState } from 'react'
import "./App.css"

function RenderPerson(props) {
  return (<div>
    <p>{props.name} - {props.email}</p>
    <button onClick={props.deleteHandler}>Remove</button>
  </div>
  )
}

const initialContacts = [
  {
    id: 0,
    name: "Ellie",
    email: "ellie.johnson3000@outlook.com"
  },

  {
    id: 1,
    name: "Aija",
    email: "aija.johnson3000@outlook.com"
  },

  {
    id: 2,
    name: "Sam",
    email: "sam.johnson3000@outlook.com"
  },
];

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [searchTxt, setSearchTxt] = useState("");
  const [contacts, setContacts] = useState(initialContacts);

  const sortHandler = () => {
    const copyContacts = [...contacts]
    copyContacts.sort((x, y) => x.name.localeCompare(y.name));
    setContacts(copyContacts);
  }

  const addHandler = () => {
    if (name === "" || email === "") {
      return
    }
    // Validate email address
    const validateEmailRegex = /^\S+@\S+\.\S+$/;
    const isValidEmail = validateEmailRegex.test(email); // Returns true
    if (!isValidEmail) {
      return alert("invalid email");
    }
    initialContacts.push(
      {
        id: Math.random(),
        name: "Ellie",
        email: "ellie.johnson3000@outlook.com"
      },

    );

    console.log({

      name,
      email
    })
    setContacts([...contacts, {
      id: Math.random(),
      name: name,
      email: email
    }
    ]);
    setName("");
    setEmail("");

  }
  const deleteHandler = (id) => {
    let up = contacts.filter(a => a.id !== id);
    setContacts(up);
  }

const filtered = contacts.filter(item => {
// "Jess"; sse
  return item.name.toLowerCase().includes(searchTxt.toLowerCase()) || item.email.toLowerCase().includes(searchTxt.toLowerCase())
});

  return (
    <div className='container'>
      <h2> Contact Search</h2>
      <label>
        <input
          placeholder='search'
          type="text"
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
        />
      </label>
      <button className="btn" onClick={sortHandler}> Sort A-Z</button>

      <label>Enter a name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

      </label>
      <label>Enter a email:
        <input
          type="text"
          value={email}
          // onChange={emailHandler}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <button className="btn" onClick={addHandler}> ADD</button>
      {filtered.map((person, index) => <RenderPerson name={person.name}
        name={person.name}
        key={person.id}
        email={person.email}
        deleteHandler={() => deleteHandler(person.id)}
      />)}
    </div>



  )
}
