import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import "./Read.css";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

export default function Read() {
  const navigate = useNavigate();
  const postId = useParams()._id;
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  
  const readPost = async () => {
    const post = await axios.get(`/post/read/${postId}`);
    setPostTitle(post.data.title);
    setPostBody(post.data.body);
  }

  readPost();

  //포스트 삭제
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className="readContainer">
      <div className="readButtons">
        <Link to={`/update/${postId}`} style={{ textDecoration: "none" }}>
          <Button className='updateButton' variant="contained" size="medium" 
          style={{
            backgroundColor: "rgb(229, 207, 43)"
          }}>
            Update
          </Button>
        </Link>
          <Button variant="outlined" onClick={handleClickOpen}>
            Delete
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"삭제하시겠습니까?"}
            </DialogTitle>
            <DialogActions>
              <Button onClick={handleClose}>아니오</Button>
              <Button onClick={
                async () => {
                  handleClose();
                  await axios.delete(`/post/delete/${postId}`);
                  alert('삭제하였습니다.');
                  navigate('/');
                }
                } autoFocus>
                네
              </Button>
            </DialogActions>
          </Dialog>
      </div>
      <div className="read">
        <Box sx={{ width: '100%', maxWidth: 500 }}>
          <Typography variant="h4" gutterBottom>
            {postTitle}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {postBody}
          </Typography>
        </Box>
      </div>
    </div>
  )
}
