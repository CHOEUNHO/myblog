import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import "./Board.css";
import { AuthContext } from '../../state/AuthContext';
import PostCard from '../postcard/PostCard';


function Contents (props) {
  if(props.posts.length === 0) {
    return <>
      <div className="helloContainer">
        <div className="helloLogo">
          Welcome to myBlog!
        </div>
        <div className="helloText">
          Please write your story
        </div>
      </div>
    </>
  } else {
    return <div className="boardContainer">
      {props.posts.map((post) => {
      return <PostCard key={post._id} post={post}/>
      })}
    </div>
    
  }
}

export default function Board() {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(`/post/board/${user._id}`);
      setPosts(response.data);
    };
    fetchPosts();
  }, [user._id]);


  return (
      <Contents posts={posts}></Contents>
  )
}
