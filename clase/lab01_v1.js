---
let Cuadrado = {
    area1: function (lado) {
      return lado * lado;
    }
};

let area1 = Cuadrado.area1(20); // area: 314.16.


let Triangulo = {
	area2: function(base, altura){
		return (base * altura) / 2;
}
};
	
let area2 =  Triangulo.area2(10,20);

let area3 = area2 + area1;