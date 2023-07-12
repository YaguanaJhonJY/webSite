const express = require('express');
const router = express.Router();

const pool = require('../database')

router.get('/add',(req,res)=>{
    res.render('equipos/add');
});

router.post('/add',async (req,res)=>{
    const{nombre_equipo,estadio_equipo,ubicacion_equipo}=req.body;
    const newEquipo = {
        nombre_equipo,
        estadio_equipo,
        ubicacion_equipo
    };
    await pool.query('INSERT INTO equipos SET ?',[newEquipo]);
    res.redirect('/equipos');
});

router.get('/',async (req,res)=>{
    const equipos =  await pool.query('SELECT * FROM equipos');
    res.render('equipos/list',{equipos});
});

router.get('/delete/:id',async (req,res)=>{
    const {id}= req.params;
    await pool.query('DELETE FROM equipos WHERE id_equipo = ?',[id]);
    res.redirect('/equipos');
});

router.get('/edit/:id',async (req,res)=>{
    const {id}= req.params;
    const equipos = await pool.query('SELECT * FROM equipos WHERE id_equipo = ?',[id]);
    res.render('equipos/edit',{equipo:equipos[0]});
});


router.post('/edit/:id',async (req,res)=>{
    const {id}= req.params;
    const{nombre_equipo,estadio_equipo,ubicacion_equipo}=req.body;
    const newEquipo = {
        nombre_equipo,
        estadio_equipo,
        ubicacion_equipo
    };
    const equipos = await pool.query('UPDATE equipos SET ? WHERE id_equipo = ?',[newEquipo,id]);
    res.redirect('/equipos');
});



module.exports = router;