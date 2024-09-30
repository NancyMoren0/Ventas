const ventasBD = require("./conexion").ventas;
const Ventas=require("../modelos/VentasModelo");
const { ventas } = require("./conexion");


function validarDatos(venta){
    var valido = false;
    if(venta.cantidad!=undefined && venta.estado!=undefined && venta.fecha!=undefined  && venta.hora!=undefined
        && venta.hora!=undefined  && venta.idprod!=undefined  && venta.idusu!=undefined){
     valido=true;
    }
    return valido;

}

async function mostrarVentas(){
    const ventas = await ventasBD.get(); 
    ventasValidas=[];
    ventas.forEach(venta => {
    const venta1=new Ventas({id:venta.id,...venta.data()});   
    if(validarDatos (venta1.getVentas)){
        ventasValidas.push(venta1.getVentas);
    }
    
  
    });
    
    return ventasValidas;
}

async function encontrado(id) {

    const venta= await ventasBD.doc(id).get();
    const venta1= new Ventas({id:venta.id,...venta.data()});
    var ventasValidas;
    if(validarDatos(venta1.getVentas)){
        ventasValidas=venta1.getVentas;
    }
   
    return ventasValidas;
}



async function nuevoVentas(data) {
   
    data.tipoVenta="venta";
    const venta1=new Ventas (data);
    
    var ventasValidas=false;
    if(validarDatos(venta1.getVentas)){
       await ventasBD.doc().set(venta1.getVentas); 
       ventasValidas=true;
    }
    return ventasValidas;
    
}

async function cancelarVenta(id) {
    var ventasValidas = await encontrado(id);
    let ventaBorrada = false;
 
    if (ventasValidas) {
      // Modificas el campo "estado" en lugar de borrar el documento
      await ventasBD.doc(id).update({
         "estado": "cancelado" // Actualiza el campo "estado"
      });
      ventaBorrada = true;
    }
 
    return ventaBorrada;
 }

module.exports={
    mostrarVentas,
    nuevoVentas,
    cancelarVenta,
    encontrado
}
