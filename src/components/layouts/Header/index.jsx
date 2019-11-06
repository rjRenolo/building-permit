import React, { Component } from 'react';
import styles from './Header.module.css';
import syncsoftsol from '../../../assets/SyncSoftSol-Logo.png';

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.container}>
          <img
            className={styles.headerLogo}
            src={syncsoftsol}
            alt="Syncsoft Solution Logo"
          />
        </div>
      </div>
    );
  }
}

export default Header;
