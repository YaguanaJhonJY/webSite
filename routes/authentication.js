const express = require('express');
const router = express.Router();

const pool = require('../database')

router.get('/login',(req,res)=>{
    res.render('auth/login');
});

router.post('/register',async (req,res)=>{
    const{nombre_user,apellido_user,correo_user,password_user}=req.body;
    const newUsuario = {
        nombre_user,
        apellido_user,
        correo_user,
        password_user
    };
    await pool.query('INSERT INTO usuario SET ?',[newUsuario]);
    res.redirect('/');
});

router.post('/session',async (req,res)=>{
    const{correo_user}=req.body;
    const{password_user}=req.body;
    await pool.query('SELECT * FROM usuario WHERE correo_user = ? and password_user = ?',[correo_user,password_user]);
    res.redirect('/inicio');
});



module.exports = router;