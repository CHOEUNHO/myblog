const express = require('express');
const User = require('../models/User');
const router = express.Router();

//회원정보수정
router.put('/update/:id', async (req, res) => {
    if(req.body.codeId === req.params.id || req.body.isAdmin){
        try{
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            });
            res.status(200).json('회원정보가 수정되었습니다.');
        } catch(err) {
            return res.status(500).json(err);
        }
    }else{
        return res.status(403).json("먼저 로그인 해주세요");
    }
});


module.exports = router;