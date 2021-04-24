import React from 'react';
import TextBox from './TextBox';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: ''
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    changeHandler(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    submitForm(e) {
        e.preventDefault();
        alert("You are submitting " + this.state.name + ' and ' + this.state.email);
    }

    render() {
        return (
            <form className="register_form" onSubmit={this.submitForm}>
                <h1>Register</h1>
                <TextBox label="Name" name="name" handler={this.changeHandler} />
                <TextBox label="Email" name="email" handler={this.changeHandler} />
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            );
    }
}

export default RegisterForm;