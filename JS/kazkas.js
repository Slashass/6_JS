// skaiciaus kelimas kvadratu
function power (skaicius, kartai) {
    let ats = 1;
    for (let i=0; i<kartai; i++) {
        ats *= skaicius;
    }
    return ats;
}

console.log(power(2, 8), '->', 256);
console.log(power(0, 100), '->', 0);
console.log(power(3, 3), '->', 27);
console.log(power(-5, 2), '->', 25);

