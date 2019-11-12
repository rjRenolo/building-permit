import React, { Component } from 'react';
import styles from './Header.module.css';
import syncsoftsol from '../../../assets/SyncSoftSol-Logo.png';
import { Typography } from '@material-ui/core';

// dialog test imports

class Header extends Component {
  state = {
    isOpen: false
  };

  handleClickOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <Fragment>
        <div className={styles.header}>
          <div className={styles.container}>
            <img
              className={styles.headerLogo}
              src={syncsoftsol}
              alt="Syncsoft Solution Logo"
            />
            <div style={{ height: '100%' }}>
              <div className={styles.navBtn}>
                <Typography style={{ padding: '14px' }} variant="button">
                  Log Out
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <Dialog
          open={this.state.isOpen}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

export default Header;
