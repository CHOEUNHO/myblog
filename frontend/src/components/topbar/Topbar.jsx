import React from 'react'
import "./Topbar.css";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';

export default function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <Link to="/" className='logo'>myBlog</Link>
        </div>
        <div className="topbarMenu">
          <Link to='/create' className='createIcon' style={{ textDecoration: "none" }}>
            <Button variant="contained" style={{
              backgroundColor: "rgb(153, 0, 0)"
            }}>Create</Button>
          </Link>
          <Button variant="text" onClick={() => {
            window.location.reload();
          }} style={{
            color: 'rgb(153, 0, 0)',
            backgroundColor: "white"
          }}>Logout</Button>
        </div>
    </div>
  )
}
