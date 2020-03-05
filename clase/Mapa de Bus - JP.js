
class Asiento{
    posX;
    posY;
    numeroAsiento;
    tipo;

    setPosX(_posX){
        this.posX = _posX;
    }

    getPosX(){
        return this.posX;
    }


}

function establecerTipo(x,y){

    if(y === 0){
        return 2;
    }
    else{

        if(x === 0 || x === 1 || x === 3 || x === 4)
            return 1;
        else
            return 2;
    }

}

var asientos = new Array(2);
var listaAsientos = new Array();

for(x = 0; x < 5; x++){
    asientos[x] = new Array();
}

var contarAsientos = 1;
var z = 0;

for(x = 0; x < 5; x++){

    for(y = 0; y < 10; y++){
        var asiento = new Asiento();
        asiento.posX = x;
        asiento.posY = y;
        asiento.numeroAsiento = 1;
        
        asiento.tipo = establecerTipo(x,y);

        if(asiento.tipo === 1){
            asiento.numeroAsiento = contarAsientos;
            contarAsientos = contarAsientos + 1;
        }
        else
            asiento.numeroAsiento = null;


        asientos[x,y] = asiento;
        listaAsientos[z] = asiento;

        z = z + 1;
    }
}

console.log(listaAsientos);


