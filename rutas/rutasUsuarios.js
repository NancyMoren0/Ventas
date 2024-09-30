var rutas=require("express").Router();
//var {Router}= require("express");

var {mostrarUsuarios,nuevoUsuario,borrarUsuario,buscarPorID}=require("../bd/usuariosBD");

rutas.get("/mostrarUsuarios",async(req,res)=>{
 //res.send("Hola estas en raíz");

 var usuariosValidos = await mostrarUsuarios();  
 //console.log("jhfhjf");
 res.json(usuariosValidos);
});

rutas.get("/buscarPorId/:id",async(req,res)=>{
   var usuarioValido=await buscarPorID(req.params.id); //llega atravez de la ruta la variabke despues del params
   res.json(usuarioValido);
});
rutas.delete("/borrarUsuario/:id",async (req,res)=>{
   var usuarioBorrado= await borrarUsuario(req.params.id);
   res.json(usuarioBorrado);
});

rutas.post("/nuevoUsuario",async (req,res)=>{
   var usuarioValido= await nuevoUsuario(req.body);
   res.json(usuarioValido);
});

module.exports=rutas;