import React, { Component } from 'react';
import styles from './style.css'

class Header extends Component {
  render() {
    return (
      <div className={ styles.component }>
        Minuteur | Fabio
      </div>
    );
  }
}

export default Header;