import React from 'react'

export default function Form(props) {
///////////////////// PROPS //////////////////////
const {
    inputChange,
    submit,
    forms
} = props;

///////////////////// HELPER FUNCTIONS //////////////////////
const onChange = event => {
const name = event.target.name;
const value = event.target.value;

inputChange(name, value)
};

const onCheckboxChange = event => {
const name = event.target.name
const checked = event.target.checked

inputChange(name, checked)
}

const onSubmit = event => {
event.preventDefault();

submit()
}

return (
<form className="Form" onSubmit={onSubmit}>
    <label>First Name:
        <input 
        type="text"
        name="firstName"
        value={forms.firstName}
        onChange={onChange}
        ></input>
    </label>

    <label>Email:
        <input
        type="email"
        name="email"
        value={forms.email}
        onChange={onChange}
        ></input>
    </label>

    <label>Password:
        <input
            type="password"
            name="password"
            value={forms.password}
            onChange={onChange}
        ></input>
    </label>

    <label>Do you accept our Terms of Service?
        <input
            type="checkbox"
            name="ToS"
            checked={forms.ToS === true}
            onChange={onCheckboxChange}
        ></input>

    </label>

    <button>submit</button>

</form>
)    
}