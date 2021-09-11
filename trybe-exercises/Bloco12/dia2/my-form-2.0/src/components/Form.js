import React from "react";
import InputAdress from "./InputAdress";
import InputCPF from "./InputCPF";
import InputEmail from "./InputEmail";
import InputName from "./InputName";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
      state: '',
      type: '',
      resume: '',
      role: '',
      describe: '',
    }
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange({ target }) {
    const { value, name } = target;
    if ( name === 'name') {
      this.setState({ [name]: value.toUpperCase() });
    } else {
      this.setState({ [name]: value });
    }
  };

  render() {
    const { name, email, cpf, adress } = this.state;
    return (
      <form>
        <fieldset>
          <InputName name={name} handleChange={this.handleChange}/>
          <InputEmail name={email} handleChange={this.handleChange}/>
          <InputCPF name={cpf} handleChange={this.handleChange}/>
          <InputAdress name={adress} handleChange={this.handleChange}/>
        </fieldset>
      </form>
    );
  };
};

export default Form;
