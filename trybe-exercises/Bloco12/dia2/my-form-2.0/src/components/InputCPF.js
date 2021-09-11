import React from "react";

class InputCPF extends React.Component {
  render() {
    const { name, handleChange } = this.props;
    return (
      <label htmlFor='cpf'>
        CPF:
        <input
        value={name}
        type='number'
        name='cpf'
        id='cpf'
        onChange={ handleChange }
        />
      </label>
    );
  };
};

export default InputCPF;
