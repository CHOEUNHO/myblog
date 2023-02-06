import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import Topbar from '../topbar/Topbar'

export default function Update() {
    const navigate = useNavigate();

    const postId = useParams().postId;
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        const getPost = async () => {
            const post = await axios.get(`/post/read/${postId}`);
            setTitle(post.data.title);
            setBody(post.data.body);
        }
        getPost();
    }, [postId]);

    const handleSubmit = async () => {
        const updatePost = {
            title: title,
            body: body
        };
        try {
            await axios.put(`/post/update/${postId}`, updatePost);
            navigate(`/post/${postId}`);
        } catch (err) {
            console.log(err);
        }
    }


  return (
    <>
        <Topbar/>
        <div className="create">
            <div className="createWrapper">
            <h2 className='createLogo'>Update</h2>
            <div className="createBox">
                <input type="text" className='title' placeholder='제목' value={title} onChange={(e) => {
                    setTitle(e.target.value);
                }}/>
                <textarea cols="40" rows="20" className='description' placeholder='내용' value={body} onChange={(e) => {
                    setBody(e.target.value);
                }}></textarea>
                <form className='createButtons' onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e);
                }}>
                <button className='createButton'>수정</button>
            </form>
            </div>
            </div>
        </div>
    </>
  )
}
