import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/counter-slice';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(store => store.counter.counter);
  const showCounter = useSelector(store => store.counter.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  const onIncrement = () => {
    dispatch(counterActions.increment())
  }

  const onIncrease = () => {
    dispatch(counterActions.increase({ amount: 5 }))
  }

  const onDecrement = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{ counter }</div>}
      <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onIncrease}>Increment by 5</button>
        <button onClick={onDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
