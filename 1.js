alert("Este programa calcula la velocidad que lleva un vehiculo en una determinada distancia y tiempo");
var distancia=parseFloat(prompt("Digite la distancia (KM) que recorre el vehiculo en determinado tiempo"));
var tiempo=parseFloat(prompt("Digite el tiempo (H) que gasta el vehiculo en recorrer los "+distancia+" KM"));
var velocidad=(distancia)/(tiempo);
console.log("El vehiculo recorre los "+ distancia+ " KM en un tiempo de " +tiempo+ " H a una velocidad de " +velocidad+ " KM/H ");

