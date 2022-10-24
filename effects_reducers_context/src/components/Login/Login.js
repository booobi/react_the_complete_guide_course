import React, { useEffect, useState, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../context/auth-context';
import Input from '../UI/Input/Input';



let myTimer;
 
const MyComponent = (props) => {
  const [timerIsActive, setTimerIsActive] = useState(false);
 
  const { timerDuration } = props; // using destructuring to pull out specific props values
 
  useEffect(() => {
    if (!timerIsActive) {
      setTimerIsActive(true);
      myTimer = setTimeout(() => {
        console.log('setting timer inactive');
        setTimerIsActive(false);
      }, timerDuration);
    }
  }, [timerIsActive, timerDuration]);

  return <div>{+timerIsActive}</div>
};

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.payload, isValid: action.payload.includes('@') }
  }

  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') }
  }

  return { value: '', isValid: false }
}

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.payload, isValid: action.payload.length > 6 }
  }

  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.length > 6 }
  }

  return { value: '', isValid: false }
}
const Login = (props) => {
  const ctx = useContext(AuthContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: false });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: false });

  useEffect(() => {

    const checker = setTimeout(() => {
      console.log('check');
      setFormIsValid(
        emailState.isValid && passwordState.isValid
      );
    }, 500)
    return () => {
      clearTimeout(checker)
    }
  }, [emailState.isValid, passwordState.isValid])

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({ type: 'USER_INPUT', payload: event.target.value })
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({ type: 'USER_INPUT', payload: event.target.value });

    // setFormIsValid(emailState.isValid && passwordState.isValid);
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({ type: 'INPUT_BLUR' })
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchEmail({ type: 'INPUT_BLUR' })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      ctx.onLogin(emailState.value, passwordState.value);
    } else if (!emailState.isValid){
        emailInputRef.current.focus();
    } else {

      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      
      <form onSubmit={submitHandler}>
        <Input
            ref={emailInputRef}
            id="email" 
            label="Email"
            type="email"
            isValid={emailState.isValid}
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}>
          </Input>
        <Input
            ref={passwordInputRef}
            id="password" 
            label="Password"
            type="password"
            isValid={passwordState.isValid}
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}>
        </Input>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
