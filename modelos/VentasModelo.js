class Ventas{

    constructor(data){
        this.id=data.id;
        this.cantidad=data.cantidad;
        this.estado=data.estado;
        this.fecha=data.fecha;
        this.hora=data.hora;
        this.idprod=data.idprod;
        this.idusu=data.idusu;
       

    }
    set id(id){
        this._id=id;
    }

    set cantidad(cantidad){
        this._cantidad=cantidad;
         }
         
    set estado(estado){
        
            this._estado=estado;
        
        }
        set fecha(fecha){
        
            this._fecha=fecha;
        
        }
    
    set hora(hora){
        this._hora=hora;
        }

        
    set idprod(idprod){
        this._idprod=idprod;
        }

        
    set idusu(idusu){
        this._idusu=idusu;
        }
        
    
    get id(){
        return this._id;
    }
    get cantidad(){
        return this._cantidad;
    }
    get estado(){
        return this._estado;
    }
    get fecha(){
        return this._fecha;
    }
    get hora(){
        return this._hora;
    }
    get idprod(){
        return this._idprod;
    }
    get idusu(){
        return this._idusu;
    }

    get getVentas(){
        const conid={
            id:this.id,
            cantidad:this.cantidad,
            estado:this.estado,
            fecha:this.fecha,
            hora:this.hora,
            idprod:this.idprod,
            idusu:this.idusu,
           
        }
        const sinid={     
            cantidad:this.cantidad,
            estado:this.estado,
            fecha:this.fecha,
            hora:this.hora,
            idprod:this.idprod,
            idusu:this.idusu,
        
        }
        if(this.id==undefined){ 
            return sinid;
        }
        else{
            return conid;
        }
        
            
        
    }
}
module.exports=Ventas;