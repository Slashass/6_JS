const sayHi = 'Labas';
const count = 10;

for (let i=0; i<count; i++) {
    console.log(sayHi);
}
const seasons = ['ziema', 'pavasaris', 'vasara', 'ruduo'];
const seasonsCount = seasons.length;
console.log(seasons);

for (let i = 0; i < seasonsCount; i++) {
    console.log(seasons[1]);
}

// 7-11

const nuo = 0;
const iki = 100;

//const diff = iki - nuo;

//for (let i = 0; i < diff; i++) {
//    console.log(i + nuo);
//}S

let suma = 0;


for (let i = nuo; i <= iki; i++) {
    suma = suma + i;
    console.log(i, suma);
}
console.log('suma -', suma);

console.clear();

const text = 'labas :)';
let atbulas = '';

for (let i=0; i<text.length; i++) {
    atbulas = text[i] + atbulas;
    console.log(i, atbulas);
}
console.log(text, '->', atbulas);

console.clear();

