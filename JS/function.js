// pirmas uzdavinys is funkciju

function  tusciaFunkcija() {
    const pirmas = 8;
    const antras = 9;
    const suma = pirmas + antras;
    return false;
}
// kiek kartu prasysi, kad grazintu reiksme, tiek ir grazins
console.log(tusciaFunkcija());

console.clear();

function daugyba(pirmas, antras){ 
    console.log(pirmas);
    console.log(antras);
    return pirmas * antras;
}

console.log('daugyba:', daugyba(8, 9));

console.log('-----------------------------')

const vardas = 'vardenis';
const pavarde = 'pavardenis';

function sayHi (daiktas) {
    return `labas ` + daiktas;
}
console.log(sayHi(vardas));
console.log(sayHi(pavarde));

console.log('-----------------------------')

function sum(a, b, c) {
    const suma = a + b + c;
    return `susumavus ${a}, ${b}, ${c} gauname ${suma}`;
}

//susumavus 1, 2 ir 3 gauname 6
// susumavus 11, 22 ir 33 gauname 66

console.log(sum(1, 2, 3));
console.log(sum(11, 22, 33));