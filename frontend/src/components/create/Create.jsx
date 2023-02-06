import React, { useContext, useRef } from 'react'
import { AuthContext } from '../../state/AuthContext';
import Topbar from '../topbar/Topbar'
import "./Create.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Create() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const title = useRef();
  const desc = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      title: title.current.value,
      body: desc.current.value,
    }
    try {
      await axios.post('/post', newPost);
      navigate('/');
    } catch(err){
      console.log(err);
    }
  }
  
  return (
    <>
      <Topbar/>
      <div className="create">
        <div className="createWrapper">
          <h2 className='createLogo'>Create</h2>
          <div className="createBox">
            <input type="text" className='title' placeholder='제목' ref={title}/>
            <textarea cols="40" rows="20" className='description' placeholder='내용' ref={desc}></textarea>
            <form className='createButtons' onSubmit={(e) => { handleSubmit(e) }}>
              <button className='createButton'>저장</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
