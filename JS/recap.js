// kintamieji: numbers, string, array
// salygos: if, switch 

// const / let / var 

const age = 99;
const name = 'vardenis';
const luckynumber = [3, 5, 7, 13];
const cities = ['vilnius', 'klaipeda', 'riga'];

let agreedwithcookies = false; 

if (agreedwithcookies = false) {
    console.log('ar sutinki su sausainiais? Y/N');
}
if (age > 21) {
    console.log('wow, kiek tau daug metu');
} else {
    console.log('nope, negausi');
}

const eyecolor = 'ruda';

if (eyecolor === 'melyna') {
    console.log('uoj, koks geras katinelis')
} else {
    if (eyecolor === 'ruda') {
        console.log('gundruolis');
    } else {
        if (eyecolor === 'pilkos') {
            console.log('kazkas kazkas');
        }
    }
}

// ternary operatorius 

const favoriteAnimal = 'dog';
console.log('my favorite animal is:', favoriteAnimal);

const sentence = 'my favorite animal is:' + (favoriteAnimal === 'doggo' ? 'dog' : 'cat');

console.log(sentence);