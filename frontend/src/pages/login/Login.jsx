import React, { useRef } from 'react';
import { useContext } from 'react';
import { loginDispatch } from '../../dispatch';
import { AuthContext } from '../../state/AuthContext';
import {Link} from "react-router-dom";
import "./Login.css";

export default function Login() {
  const id = useRef();
  const password = useRef();
  const { dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginDispatch(
      {
        id: id.current.value,
        password: password.current.value,
      },
      dispatch
    );
  };



  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginTob'>
          <h1 className='loginTitle'>myBlog</h1>
        </div>
        <form className='loginBox' onSubmit={(e) => handleSubmit(e)}>
          <h2 className='loginLogo'>Login</h2>
          <input type="text" className="loginInput" placeholder='ID' required ref={id}/>
          <input type="password" className="loginInput" placeholder='PASSWORD' required minLength="6" ref={password}/>
          <button className="loginButton">Enter</button>
          <Link to="/register" className="loginRegisterButton">Sign up</Link>
        </form>
      </div>
    </div>
  )
}
