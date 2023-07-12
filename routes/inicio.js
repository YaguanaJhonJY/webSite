const express = require('express');
const router = express.Router();

router.get('/inicio',(req,res)=>{
    res.render('inicio/inicio');
});

module.exports = router;