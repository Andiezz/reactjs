import { useState, useRef } from 'react';

// let timer;

export default function TimerChallenge({ title, targetTime }) {
  /*
    useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). 
    The returned object will persist for the full lifetime of the component.

    Note that useRef() is useful for more than the ref attribute. 
    It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.

    useRef to manipulate unrelated UI variables
  */
  const timer = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? 'Stop' : 'Start'} Challenge
        </button>
      </p>
      <p className={timerStarted ? 'active' : undefined}>
        {timerStarted ? 'Time is running...' : 'Timer inactive'}
      </p>
    </section>
  );
}
