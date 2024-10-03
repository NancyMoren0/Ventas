const ventasBD = require("./conexion").ventas;
const Ventas=require("../modelos/VentasModelo");
const { ventas } = require("./conexion");


function validarDatos(venta){
    var valido = false;
    if(venta.cantidad!=undefined && venta.estado!=undefined && venta.fecha!=undefined  && venta.hora!=undefined
          && venta.idprod!=undefined  && venta.idusu!=undefined){
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
    // Agrega el tipo de venta y el estado al objeto de datos
    data.tipoVenta = "venta";
    data.estado = "entregado";  // Establece el estado como "entregado"

    // Obtén la fecha y hora actuales
    const fechaActual = new Date();
    
    // Formato de fecha (dd-mm-yyyy)
    const fecha = fechaActual.toLocaleDateString('es-ES'); // Ej: "02/10/2024"
    
    // Formato de hora (hh:mm:ss)
    const hora = fechaActual.toLocaleTimeString('es-ES'); // Ej: "15:35:21"
    
    // Añadir fecha y hora separadas al objeto data
    data.fecha = fecha;
    data.hora = hora;
    
    // Crea una nueva instancia de la venta
    const venta1 = new Ventas(data);
    
    var ventasValidas = false;

    // Valida los datos de la venta antes de guardarla
    if (validarDatos(venta1.getVentas)) {
        // Asegúrate de que la fecha y la hora estén en los datos que se guardarán
        const datosVenta = {
            ...venta1.getVentas, 
            fecha: data.fecha, // Agrega la fecha
            hora: data.hora    // Agrega la hora
        };

        // Guarda la nueva venta en la base de datos
        await ventasBD.doc().post(datosVenta);
        ventasValidas = true;
    }

    return ventasValidas;
}


/*async function borrarVenta(id) {
    var ventasValidas=await encontrado(id);
    ventaBorrada=false;
    if(ventasValidas){
      await usuariosBD.doc(id).delete();
      ventaBorrada=true;
    }
    return ventaBorrada;
 }*/

async function cancelarVenta(id) {
    var ventasValidas = await encontrado(id);
    let ventaBorrada = false;
 
    if (ventasValidas) {
      
      await ventasBD.doc(id).update({
         "estado": "cancelado" 
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
