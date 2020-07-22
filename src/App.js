import React, {useState, useEffect} from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import UserCard from './UserCard'
import Form from './Form'

function App() {
///////////////////// INITIAL STATES //////////////////////
const initialUsers = [];
const initialForms = {
  firstName: "",
  email: "",
  password: "",
  ToS: false
};

///////////////////// STATE //////////////////////
const [users, setUsers] = useState(initialUsers)
const [forms, setForms] = useState(initialForms)

///////////////////// NETWORK HELPERS //////////////////////
const getUsers = () => {
  axios.get('https:reqres.in/api/users')
    .then(success => setUsers(success.data.data))
    .catch(error => {
      debugger})
}

const postUser = newUser => {
  axios.post('https:reqres.in/api/users', newUser)
    .then(success => {
      setUsers([success.data, ...users]);
      setForms(initialForms)
    })
    .catch(error => {
      debugger
    })
}

///////////////////// FORM ACTIONS //////////////////////
const inputChange = (name, value) => {
  setForms({
    ...forms,
    [name]: value
  })
}

const submit = () => {
const newUser = {
  first_name: forms.firstName.trim()
};
postUser(newUser)
}

///////////////////// SIDE EFFECTS //////////////////////
useEffect(() => {
  getUsers()
}, [])

  return (
    <div className="App">
      <div className="Users">
      <h1>Users</h1>
        {users.map(x => {
          return <UserCard info={x} />
        })}
      </div>

        <div className="Form">
          <h1>Form</h1>
          <Form inputChange={inputChange} submit={submit} forms={forms} />
        </div>

    </div>
  );
}

export default App;
