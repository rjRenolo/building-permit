import React, { Component, Fragment } from 'react';
import styles from './Header.module.css';
import syncsoftsol from '../../../assets/SyncSoftSol-Logo.png';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// dialog test imports

class Header extends Component {
  handleClickOpen = () => {
    alert('Log Out Func');
  };

  render() {
    const logOutBtn = (
      <div style={{ height: '100%' }}>
        <div className={styles.navBtn} onClick={() => this.handleClickOpen()}>
          <Typography style={{ padding: '14px' }} variant="button">
            Log Out
          </Typography>
        </div>
      </div>
    );

    return (
      <div className={styles.header}>
        <div className={styles.container}>
          <Link
            to="/engineering/buildingpermit"
            style={{ padding: '4px', height: '62%', margin: '4px' }}
          >
            <img
              className={styles.headerLogo}
              src={syncsoftsol}
              alt="Syncsoft Solution Logo"
            />
          </Link>

          {!localStorage.getItem('TOKEN') ? null : logOutBtn}
        </div>
      </div>
    );
  }
}

const maptStateToProps = state => ({
  authRed: state.AuthRed
});

export default connect(maptStateToProps)(Header);
