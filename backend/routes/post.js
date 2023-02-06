const { application } = require('express');
const express = require('express');
const router = express.Router();
const Post = require("../models/Post");
const User = require('../models/User');


//포스트 작성
router.post('/', async(req, res) => {
    const newPost = new Post(req.body);
    try {
        const savePost = await newPost.save();
        return res.status(200).json(savePost);
    } catch(err){
        return res.status(500).json(err);
    }
});

// board에 포스트 출력
router.get('/board/:userId', async (req, res) => {
    try {
        const currentUser = await User.findById(req.params.userId);
        const userPosts = await Post.find({ userId: currentUser._id});
        return res.status(200).json(userPosts);
    } catch(err) {
        return res.status(500).json(err);
    }
});

//특정 포스트를 출력
router.get('/read/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        return res.status(200).json(post);
    } catch(err) {
        return res.status(500).json(err);
    }
})


// 포스트 수정
router.put('/update/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        await post.updateOne({
            $set: req.body,
        });
        return res.status(200).json("수정이 성공했습니다!")
    } catch (err) {
        return res.status(403).json(err);
    }
})

// 포스트 삭제
router.delete('/delete/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        await post.deleteOne();
        return res.status(200).json("삭제 성공했습니다!")
    } catch (err) {
        return res.status(403).json(err);
    }
})
module.exports = router;