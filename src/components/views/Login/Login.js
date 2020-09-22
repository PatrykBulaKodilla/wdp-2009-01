import React from 'react';
import styles from './Login.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <form className={styles.root} noValidate autoComplete='off'>
      <div className={styles.component}>
        <div className={styles.formHeader}>
          <p>Login</p>
          <p>Adres e-mail lub identyfikator istniejącej usługi</p>
        </div>
        <div className={styles.textField}>
          <TextField
            id='login'
            label='Login'
            variant='outlined'
            type='email'
            fullWidth
          />
          <TextField
            id='password'
            label='Password'
            type='password'
            variant='outlined'
            fullWidth
            style={{ marginTop: 10 }}
          />
        </div>
        <div className={styles.loginButton}>
          <Button variant='contained' className={styles.button}>
            <Link className={styles.link} to='/'>
              Zaloguj się
            </Link>
          </Button>
        </div>
        <div className={styles.forgetPassword}>
          <Link className={styles.link} to='/'>
            Przypomnij hasło
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Login;
