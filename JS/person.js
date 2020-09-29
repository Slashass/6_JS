/*  spausdinsim sakini
name: vardenis
birthyear: 2002;
print: vardenis dabar yra 18 metu. */

function birth(name, birthyear) {
    const metai = 2020 - birthyear;
    return name + ' dabar yra ' + metai;
    //return '${name} dabar yra ${metai}';

}

console.log(birth('vardenis', 2002));