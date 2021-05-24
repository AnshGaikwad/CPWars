import React, {useState, useEffect, setError} from 'react';
import Compiler from '../components/compiler/Compiler.js';
import axios from "axios";

const Overview = () => {

  const [user, setUser] = useState({ hits: [] });
 
  useEffect(async () => {

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    const token = localStorage.getItem("authToken");

    const { data } = await axios.post(
        "/api/auth/currentUser",
        { token },
        config
      );
 
    setUser(data.user);
  }, []);


  return (
    <div className='main'>
      <h1>Welcome {user.username}</h1>
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
