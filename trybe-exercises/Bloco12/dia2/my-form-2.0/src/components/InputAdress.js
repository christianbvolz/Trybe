import React from "react";

class InputAdress extends React.Component {
  render() {
    const { name, handleChange } = this.props;
    return (
      <label htmlFor='adress'>
        Endereço:
        <input
        value={name}
        type='text'
        name='adress'
        id='adress'
        onChange={ handleChange }
        />
      </label>
    );
  };
};

export default InputAdress;
