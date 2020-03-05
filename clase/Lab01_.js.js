class Numero {
  
    constructor(paresImpares, inicio, fin) {
        this.paresImpares = paresImpares;
        this.inicio = inicio;
        this.fin = fin;
    }

    ejecutar()
    {
        if(this.paresImpares == 1) {  // 1=pares - 2=impares
            this.numerosPares();
        } else {
            this.numerosImPares();
        }
    }

    numerosPares() {
        var par = '*';
        for(var i=this.inicio; i<this.fin; i++) {
            if(i%2==0) {
                par += i + '-';
            }
        }
        return par;
    }

    numerosImPares() {
        var impar = '*';
        for(var i=this.inicio; i<this.fin; i++) {
            if(i%2!=0) {
                impar += i + '-';
            }
        }
        return impar;
    }
}

let c2 = new Numero(1, 1, 10);
c2.ejecutar(); 



