import React, { Component, Fragment } from 'react';
import styles from './LandingPage.module.css';
import { Typography, Paper, TextField, Button } from '@material-ui/core';
import styled from 'styled-components';

class LandingPage extends Component {
  state = {
    username: '',
    password: '',
    err: false,
    loading: false
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  signIn = e => {
    const { username, password } = this.state;
    if (!username && !password) {
      this.setState({ err: true });
    } else {
      this.setState({ err: false, loading : true });
    }
  };

  render() {
    const { username, password, err } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.intro}>
          <Typography style={{ fontWeight: 600 }} variant="h2" gutterBottom>
            Portal
          </Typography>
          <Typography style={{ marginBottom: '42px' }} variant="h3">
            <span style={{ color: '#02A8E8' }}>Syncsoft</span> Solutions
          </Typography>
          <Typography
            style={{ fontSize: '1.23rem', color: 'grey' }}
            variant="subtitle2"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A modi
            officiis corrupti veniam sequi praesentium dolore fugiat temporibus
            pariatur exercitationem!
          </Typography>
        </div>
        <div className={styles.signInForm}>
          <Paper style={inStyles.signInPaper}>
            <Typography style={{ marginBottom: '24px' }} variant="h4">
              Online Office Portal
            </Typography>
            <StyledTextField
              name="username"
              variant="outlined"
              label="Username/Email"
              value={username}
              error={err}
              onChange={this.onInputChange}
            />
            <StyledTextField
              name="password"
              variant="outlined"
              label="Password"
              type="password"
              value={password}
              error={err}
              onChange={this.onInputChange}
            />
            <Button
              style={inStyles.signInButton}
              variant="contained"
              onClick={this.signIn}
            >
              Sign In
            </Button>
          </Paper>
        </div>
      </div>
    );
  }
}
export default LandingPage;

const inStyles = {
  signInPaper: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    padding: '24px',
    boxShadow: '0px 3px 6px #0000006e'
  },
  signInButton: {
    background: '#02A8E8',
    color: 'white',
    borderRadius: 3,
    border: 0,
    height: 48,
    width: 48 * 3,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.3)',
    pointer: 'click'
  }
};

const StyledTextField = styled(TextField)`
  .MuiInputBase-root {
    margin-bottom: 18px;
    width: 300px;
  }
  .MuiOutlinedInput-root {
    fieldset {
      border-color: skyblue;
    }
    &:hover fieldset {
      border-color: skyblue;
    }
    &.Mui-focused fieldset {
      border-color: skyblue;
    }
  }
`;
