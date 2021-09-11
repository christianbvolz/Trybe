import React from "react";

class InputEmail extends React.Component {
  render() {
    const { name, handleChange } = this.props;
    return (
      <label htmlFor='email'>
        Email:
        <input
        value={name}
        type='email'
        name='email'
        id='email'
        onChange={ handleChange }
        />
      </label>
    );
  };
};

export default InputEmail;
