import React from 'react';
import styles from './Register.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <form className={styles.root} noValidate autoComplete='off'>
      <div className={styles.component}>
        <div className={styles.formHeader}>
          <p>Register</p>
          <p>Dont have an account? Create your account, it takes less than a minute.</p>
        </div>
        <div className={styles.textField}>
          <TextField
            id='name'
            label='Name'
            variant='outlined'
            type='text'
            required
            fullWidth
          />
          <TextField
            id='email'
            label='Email'
            variant='outlined'
            type='email'
            required
            fullWidth
            style={{ marginTop: 10 }}
          />
          <TextField
            id='phone'
            label='Phone'
            variant='outlined'
            type='phone'
            fullWidth
            style={{ marginTop: 10 }}
          />
          <TextField
            id='password'
            label='Password'
            type='password'
            variant='outlined'
            required
            fullWidth
            style={{ marginTop: 10 }}
          />
          <TextField
            id='password'
            label='Repeat Password'
            type='password'
            variant='outlined'
            required
            fullWidth
            style={{ marginTop: 10 }}
          />
        </div>
        <FormControlLabel
          className={styles.checkbox}
          control={<Checkbox required value='allowExtraEmails' color='primary' />}
          label='I agree to the Privacy Policy'
        />
        <div className={styles.loginButton}>
          <Button variant='contained' className={styles.button}>
            <Link className={styles.link} to='/'>
              Sign up
            </Link>
          </Button>
          <Link className={styles.signIn} to='/login'>
            Already have an account? Sign in.
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Register;
