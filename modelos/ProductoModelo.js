
class Producto{

    constructor(data){
        this.id=data.id;
        this.cantidad=data.cantidad;
        this.nombre=data.nombre;
        this.precio=data.precio;
       

    }
    set id(id){
        this._id=id;
    }

    set cantidad(cantidad){
        this._cantidad=cantidad;
         }
         
    set nombre(nombre){
        
            this._nombre=nombre;
        
        }
    
    set precio(precio){
        this._precio=precio;
        }
        
    
    get id(){
        return this._id;
    }
    get cantidad(){
        return this._cantidad;
    }
    get nombre(){
        return this._nombre;
    }
    get precio(){
        return this._precio;
    }


    get getProducto(){
        const conid={
            id:this.id,
            cantidad:this.cantidad,
            nombre:this.nombre,
            precio:this.precio,
           
        }
        const sinid={     
            cantidad:this.cantidad,
            nombre:this.nombre,
            precio:this.precio
        
        }
        if(this.id==undefined){ //si es condicion lleva doble ==
            return sinid;
        }
        else{
            return conid;
        }
        
            
        
    }
}
module.exports=Producto;//exportar usuario

//agregar validaciones para los set,aqui mismo