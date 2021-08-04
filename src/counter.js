import React from 'react';

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className='jumbotron text-center'>
      <h2 className='align-center'>{counter}</h2>
      <button onClick={inc} className='btn btn-danger btn-large'>
        DEC
      </button>
      <button onClick={dec} className='btn btn-primary btn-large'>
        INC
      </button>
      <button onClick={rnd} className='btn btn-default btn-dark'>
        rand
      </button>
    </div>
  );
};

export default Counter;
