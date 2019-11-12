import React, { Component, Fragment } from 'react';
import styles from './Header.module.css';
import syncsoftsol from '../../../assets/SyncSoftSol-Logo.png';
import { Typography } from '@material-ui/core';

// dialog test imports

class Header extends Component {
  handleClickOpen = () => {
    alert('something');
  };

  render() {
    return (
      <div className={styles.header}>
        <div className={styles.container}>
          <img
            className={styles.headerLogo}
            src={syncsoftsol}
            alt="Syncsoft Solution Logo"
          />
          <div style={{ height: '100%' }}>
            <div
              className={styles.navBtn}
              onClick={() => this.handleClickOpen()}
            >
              <Typography style={{ padding: '14px' }} variant="button">
                Log Out
              </Typography>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
