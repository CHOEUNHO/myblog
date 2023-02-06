import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';



export default function PostCard({ post }) {

  const Navigate = useNavigate();

  return (
    <div className="postCard" onClick={(e) => {
      e.preventDefault();
      Navigate(`/post/${post._id}`);
      }}>
      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{textOverflow: 'ellipsis',
          overflow: 'hidden', whiteSpace: 'nowrap' }}>
              {post.body}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}
