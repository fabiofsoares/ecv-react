import React, { Component } from 'react';
import styles from './style.css'

class Header extends Component {
  render() {
    return (
      <div className={ styles.component }>
        <h1>Minuteur | Fabio</h1>
      </div>
    );
  }
}

export default Header;