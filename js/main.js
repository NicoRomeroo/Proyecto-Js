alert();
prompt("¿Para vos quien va a ser presidente Javier Milei o Sergio Massa?")
let desinflacionDeMilei = 100;
let inflacionDeMassa = 100;
let round = 0;

const MIN_POWER = 10;
const MAX_POWER = 25;

while((desinflacionDeMilei > 0) && (inflacionDeMassa > 0)){
    round += 1;
    let golpeMilei = Math.ceil(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);
    let golpeMassa = Math.ceil(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);
    console.log("---------MES NUMERO " + round + "-------------");
if(golpeMilei === golpeMassa){
    console.log("Un mes muy peleados para ambos");
}else if(golpeMilei > golpeMassa){
    console.log("Milei baja la inflacion un total del %" + golpeMilei);
    inflacionDeMassa -= golpeMilei;
        if(inflacionDeMassa < 0){
        inflacionDeMassa = 0;
        }
    console.log("La inflacion de Massa baja un total del %" + inflacionDeMassa);
}else{
    console.log("La inflacion de Massa sigue creciendo un total del %" + golpeMassa);
        desinflacionDeMilei -= golpeMassa;
        if(desinflacionDeMilei < 0){
        desinflacionDeMilei = 0
        }  
    console.log("Las chances de que Milei mejore la economia son de un %" + desinflacionDeMilei);
}
}

console.log("------GANADOR Y POSTULACION A PRESIDENTE ES PARA-------");

if(inflacionDeMassa > 0){
    console.log("Sergio Massa");
}else{
    console.log("Javier Milei");
}