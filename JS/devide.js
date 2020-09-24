const nuo = 0;
const iki = 11;
const daliklis = 3;

let count = 0;

for (let i = nuo; i <= iki; i++) {
    console.log(i, '%', daliklis, '=', i % daliklis);
    
    if (i % daliklis === 0){
        count++;
    }
}


const name = 'vardenis';
const lastname = "pavardenis";
// back tick'as `
const city = `miestas`;