const express = require('express');
const router = express.Router();
const User = require('../models/User.js'); 


//로그인


router.post('/login', async (req, res) => {
    try{
        const user = await User.findOne({ id: req.body.id});
        if(!user) return res.status(404).send("ID를 찾을 수 없습니다.");

        const validPassword = req.body.password === user.password;
        if(!validPassword) return res.status(400).send("패스워드가 맞지 않습니다.");

        return res.status(200).json(user);
    }catch(err){
        return res.status(500).json(err);
    }
});

//회원가입

router.post('/register', async (req, res) => {
    try {
        const newUser = await new User({
            id: req.body.id,
            email: req.body.email,
            password: req.body.password,
        });
        const user = await newUser.save();
        return res.status(200).json(user);
    } catch(err) {
        return res.status(500).json(err);
    }
});


module.exports = router;