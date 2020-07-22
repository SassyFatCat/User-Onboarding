import React from 'react'

export default function Form(props) {
///////////////////// PROPS //////////////////////
const {
    inputChange,
    submit,
    forms,
    formErrors,
    disabled
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
<div className="formContainer">
<form className="Form" onSubmit={onSubmit}>
    <label>First Name:&nbsp;&nbsp;
        <input
        type="text"
        name="firstName"
        value={forms.firstName}
        onChange={onChange}
        ></input>
    </label>
    
    <label>Email:&nbsp;&nbsp;
        <input
        type="email"
        name="email"
        value={forms.email}
        onChange={onChange}
        ></input>
    </label>

    <label>Password:&nbsp;&nbsp;
        <input
            type="password"
            name="password"
            value={forms.password}
            onChange={onChange}
        ></input>
    </label>

    <label>Do you accept our Terms of Service?&nbsp;&nbsp;
        <input
            type="checkbox"
            name="ToS"
            checked={forms.ToS === true}
            onChange={onCheckboxChange}
        ></input>

    </label>
    <button disabled={disabled}>submit</button>
</form>
<div className="errorContainer">
    <p className="error">{formErrors.firstName}</p>
    <p className="error">{formErrors.email}</p>
    <p className="error">{formErrors.password}</p>
    <p className="error">{formErrors.ToS}</p>
</div>
</div>
)    
}