var rutas=require("express").Router();


var { mostrarVentas,
   nuevoVentas,
   borrarVenta,
   encontrado}=require("../bd/ventasBD");

rutas.get("/mostrarVentas",async(req,res)=>{
 

 var ventasValidas = await mostrarVentas();  

 res.json(ventasValidas);
});

rutas.get("/encontrado/:id",async(req,res)=>{
   var ventasValidas=await encontrado(req.params.id); 
   res.json(ventasValidas);
});
rutas.patch("/cancelarVenta/:id",async (req,res)=>{
   var cancelarVenta= await cancelarVenta(req.params.id);
   res.json(cancelarVenta);
});

rutas.post("/nuevoVentas",async (req,res)=>{
   var ventasValidas= await nuevoVentas(req.body);
   res.json(ventasValidas);
});

module.exports=rutas;