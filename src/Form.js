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

const onSubmit = event => {
event.preventDefault();

submit()
}

return (
<form onSubmit={onSubmit}>
    <label>First Name:
        <input 
        type="text"
        name="firstName"
        value={forms.firstName}
        onChange={onChange}
        ></input>
    </label>
    <button>submit</button>
    
</form>
)    
}