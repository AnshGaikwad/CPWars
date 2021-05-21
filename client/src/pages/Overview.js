import React from 'react';
import Compiler from '../components/compiler/Compiler.js';

const Overview = () => {
  return (
    <div className='main'>
      <h1>Overview</h1>
    </div>
  );
};

export const Battle = () => {
    return (
      <div className='main'>
        <h1>Battle</h1>
      </div>
    );
  };
  
  export const Practice = () => {
    return (
      // <div className='main'>
      //   <h1>Practice</h1>
      // </div>
      <Compiler/>
    );
  };
  
  export const Tournaments = () => {
    return (
      <div className='main'>
        <h1>Tournaments</h1>
      </div>
    );
  };

export default Overview;
