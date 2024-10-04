var rutas=require("express").Router();


var { mostrarVentas,
   nuevoVentas,
   borrarVenta,
   encontrado,
   cancelarVenta}=require("../bd/ventasBD");

rutas.get("/mostrarVentas",async(req,res)=>{
   try {
      var ventasValidas = await mostrarVentas();
      res.json(ventasValidas);
   } catch (error) {
      console.error("Error algo fallo al obtener las ventas:", error);
      res.status(500).json({ mensaje: "Ocurrió un error al obtener las ventas :(" });
   }
});

rutas.get("/encontrado/:id",async(req,res)=>{
   var ventasValidas=await encontrado(req.params.id); 
   res.json(ventasValidas);
});
rutas.patch("/cancelarVenta/:id",async (req,res)=>{
   var ventaBorrada= await cancelarVenta(req.params.id);
   res.json(ventaBorrada);
});

rutas.post("/nuevoVentas",async (req,res)=>{
   var ventasValidas= await nuevoVentas(req.body);
   res.json(ventasValidas);
});

module.exports=rutas;