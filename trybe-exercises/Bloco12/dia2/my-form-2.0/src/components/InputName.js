import React from "react";

class InputName extends React.Component {
  render() {
    const { name, handleChange } = this.props;
    return (
      <label htmlFor='name'>
        Nome:
        <input
        value={name}
        type='text'
        name='name'
        id='name'
        onChange={ handleChange }
        />
      </label>
    );
  };
};

export default InputName;
