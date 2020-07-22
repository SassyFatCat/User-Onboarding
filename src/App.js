import React, {useState, useEffect} from 'react';
import axios from 'axios'
import * as yup from 'yup'
import './App.css';
import UserCard from './UserCard'
import Form from './Form'
import FormSchema from './validation/FormSchema'

function App() {
///////////////////// INITIAL STATES //////////////////////
const initialUsers = [];
const initialForms = {
  firstName: "",
  email: "",
  password: "",
  ToS: false
};
const initialFormErrors = {
  firstName: '',
  email: '',
  password: '',
  ToS: ''
}

///////////////////// STATE //////////////////////
const [users, setUsers] = useState(initialUsers)
const [forms, setForms] = useState(initialForms)
const [formErrors, setFormErrors] = useState(initialFormErrors)

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
yup
  .reach(FormSchema, name)
  .validate(value)
  .then(valid => {
    setFormErrors({
      ...formErrors,
      [name]: ""
    })
  })
  .catch(invalid => {
    setFormErrors({
      ...formErrors,
      [name]: invalid.errors[0]
    })
  })

  setForms({
    ...forms,
    [name]: value
  })
}

const submit = () => {
const newUser = {
  first_name: forms.firstName.trim(),
  email: forms.email.trim(),
  password: forms.password,
  ToS: forms.ToS
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
          <Form formErrors={formErrors} inputChange={inputChange} submit={submit} forms={forms} />
        </div>

    </div>
  );
}

export default App;
