import React from 'react';

class Pokemon extends React.Component {
  render() {
const { info } = this.props;
    return  (
      <section>
        <h1>Name: {info.name}</h1>
        <p>Type: {info.type}</p>
        <p>Weight: {info.averageWeight.value} {info.averageWeight.measurementUnit}</p>
        <img src= {info.image} alt= {info.name}/>
      </section>
    )
  }
}

export default Pokemon;