var rutas=require("express").Router();
//var {Router}= require("express");

var {mostrarProductos,nuevoProducto,borrarProducto,localizado}=require("../bd/productoBD");


 rutas.get("/mostrarProductos",async(req,res)=>{
   var productosValidos = await mostrarProductos(req.params.id);  
   res.json(productosValidos);
  });

rutas.get("/localizado/:id",async(req,res)=>{
   var productoValido=await localizado (req.params.id); //llega atravez de la ruta la variabke despues del params
   res.json(productoValido);
});
rutas.delete("/borrarProducto/:id",async (req,res)=>{
   var productoBorrado= await borrarProducto(req.params.id);
   res.json(productoBorrado);
});

rutas.post("/nuevoProducto",async (req,res)=>{
   var productoValido= await nuevoProducto(req.body);
   res.json(productoValido);
});

module.exports=rutas;