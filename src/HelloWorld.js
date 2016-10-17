import React, {Component} from 'react';
import Favico from 'favico.js';

class HelloWorld extends Component {
  componentDidMount() {
    const favico = Favico();

    favico.badge(1);

    setInterval(() => {
      favico.badge(random());
    }, 2500);
  }

  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}

export default HelloWorld;

function random() {
  return ~~(Math.random() * 20);
}