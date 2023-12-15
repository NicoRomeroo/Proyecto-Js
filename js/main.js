alert("Hola como estas nose si lo sabias pero estas apunto de ver una de las mejores peleas del mundo...");
alert("Hace tus apuestas, para vos quien va a ganar ¿El Hombre Araña? o ¿El Doctor Octopus?");

let nombreIngresado = prompt ("Ingresa el Ganador") 
alert("Para vos va a ganar " + nombreIngresado);
alert("Mucha suerte, que gane el mejor ;)");

console.log("Antes de empezar con esta pelea, quiero que veas las estadisticas de cada uno.");
console.log(".-.-.-.-.-. (EL HOMBRE ARAÑA) .-.-.-.-.-.");
function SuperHeroe(n, a, p, e){
    this.nombre = n;
    this.alias = a;
    this.poder = p;
    this.enemigo = e;
}

let elHombreAraña = new SuperHeroe("El Hombre Araña","Peter Parker","Poderes de araña", "Doctor Octopus");
console.table(elHombreAraña);

console.log(".-.-.-.-.-. (EL DOCTOR OCTOPUS) .-.-.-.-.-.");

let elDoctorOctopus = new SuperHeroe("El Doctor Octopus", "Otto Octavius", "Tentaculos metalicos de titanio", "El Hombre Araña");
console.table(elDoctorOctopus);


let vidaHombreAraña = 100;
let vidaDoctorOctopus = 100;
let round = 0;

const MIN_POWER = 5;
const MAX_POWER = 15;

while((vidaHombreAraña > 0) && (vidaDoctorOctopus > 0)){
    round += 1;
    let golpeHombreAraña = Math.ceil(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);
    let golpeDoctorOctopus = Math.ceil(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);
    console.log("---------ROUND NUMERO " + round + "-------------");
if(golpeHombreAraña === golpeDoctorOctopus){
    console.log("Una batalla muy igualada");
}else if(golpeHombreAraña > golpeDoctorOctopus){
    console.log("El hombre araña ataca con sus telarañas y le baja %" + golpeHombreAraña + " de vida al Doctor Octopus.");
    vidaDoctorOctopus -= golpeHombreAraña;
        if(vidaDoctorOctopus < 0){
        vidaDoctorOctopus = 0;
        }
    console.log("El Doctor Octopus se levanta y sigue con la batalla sin importarle el %" + vidaDoctorOctopus + " de vida que le quedan.");
}else{
    console.log("El Doctor Octopus le mete un zarpaso con sus brazos metalicos a el Hombre Araña y le baja %" + golpeDoctorOctopus + " de vida.");
        vidaHombreAraña -= golpeDoctorOctopus;
        if(vidaHombreAraña < 0){
        vidaHombreAraña = 0
        }  
    console.log("El Hombre Araña se levanta como si nada a seguir con el combate a pesar que le queden %" + vidaHombreAraña + " de vida.");
}
}
function ganador(){
    console.log("------EL GANADOR DE ESTA INCREIBLE BATALLA ES PARA-------");
}
ganador();

if(vidaDoctorOctopus > 0){
    console.log("EL DOCTOR OCTOPUS");
}else{
    console.log("EL HOMBRE ARAÑA");
}

console.log("El ganador de esta pelea tendra que elegir a su siguiente oponente, que son:");

if(vidaHombreAraña > 0){
    let superEnemigos = ["El Duende Verde", "Venom", "El Hombre Arena", "Electro", "El Lagarto"]
    console.table(superEnemigos);
}else{
    let superEnemigos = ["Iron Man", "Capitan America", "Thor", "Hulk", "Natasha Romanoff"]
    console.table(superEnemigos);
}





