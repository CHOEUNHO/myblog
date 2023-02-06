import axios from 'axios';
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Register.css";

export default function Register() {
  const id = useRef();
  const password = useRef();
  const passwordCheck = useRef();
  const email = useRef();

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if(password.current.value !== passwordCheck.current.value){
      passwordCheck.current.setCustomValidity("비밀번호가 일치하지 않습니다.");
    } else {
      try{
        const user = {
          id: id.current.value,
          password: password.current.value,
          email: email.current.value,
        };
        await axios.post('/auth/register', user);
        navigate('/login');
      }catch(err){
        console.log(err);
      }
    }

  };

  return (
    <div className='register'>
      <div className='registerWrapper'>
        <div className='registerTob'>
          <h1 className='registerTitle'>myBlog</h1>
        </div>
        <form className='registerBox' onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}>
          <h2 className='registerLogo'>Register</h2>
          <input type="text" className="registerInput" placeholder='ID' required ref={id}/>
          <input type="password" className="registerInput" placeholder='비밀번호' required minLength="6" ref={password}/>
          <input type="password" className="registerInput" placeholder='비밀번호 확인' required minLength="6" ref={passwordCheck}/>
          <input type="email" className="registerInput" placeholder='E-mail' required ref={email}/>
          <button className="registerButton">Sign up</button>
        </form>
      </div>
    </div>
  )
}
