const {Router} = require('express');
const router = Router();

const Usuario = require('../models/usuario');

router.get('/', async (req, res) =>{
    const usuarios = await Usuario.find();
    res.render('index',{ usuarios });
});

router.get('/upload', (req, res) => {
    res.render('upload');
});

router.post('/upload', async (req, res) => {
    if(req.body.nombre && req.body.email && req.body.telefono){
        const usuario = new Usuario();
        usuario.nombre = req.body.nombre;
        usuario.email = req.body.email;
        usuario.telefono = req.body.telefono;
        usuario.estado = req.body.estado;
        usuario.hijos = req.body.hijos;
        if(req.body.libros)
            usuario.libros = req.body.libros;
        else
        usuario.libros = "no";
        if(req.body.musica)
            usuario.musica = req.body.musica;
        else
        usuario.musica = "no";
        if(req.body.deportes)
            usuario.deportes = req.body.deportes;    
        else
        usuario.deportes = "no";
        if(req.body.otros)
            usuario.otros = req.body.otros;
        else
        usuario.otros = "no";
        await usuario.save();
    
        res.redirect('/');
    }
    else{
        res.redirect('/');
    } 
});
router.get('/usuario/:id', async ( req, res) => {
    const {id} = req.params;
    const usuario = await Usuario.findById(id);
    res.render('delete', { usuario });
});
router.get('/usuario/:id/delete', async (req, res) => {
    const {id} = req.params;
    await Usuario.findByIdAndDelete(id);
    res.redirect('/');
});
router.get('/usuarioedit/:id', async ( req, res) => {
    const {id} = req.params;
    const usuario = await Usuario.findById(id);
    res.render('edit', { usuario });
});
router.post('/usuario/:id/edit', async (req, res) => {
    if(req.body.nombre && req.body.email && req.body.telefono){
        const id = req.body.id;
        var libros, musica, deportes, otros;
        if(req.body.libros)
            libros = req.body.libros;
        else
        libros = "no";
        if(req.body.musica)
            musica = req.body.musica;
        else
        musica = "no";
        if(req.body.deportes)
            deportes = req.body.deportes;    
        else
        deportes = "no";
        if(req.body.otros)
            otros = req.body.otros;
        else
        otros = "no";
        let usuario = {
                nombre : req.body.nombre,
                email : req.body.email,
                telefono : req.body.telefono,
                estado : req.body.estado, 
                hijos : req.body.hijos,
                libros : libros,
                musica : musica,
                deportes : deportes,
                otros : otros
            }      
        await Usuario.findByIdAndUpdate(id, usuario);
        res.redirect('/');
    }
    else{
        res.redirect('/');
    }
});
module.exports = router;