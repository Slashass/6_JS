/* turim geliu soda:
plotas: 20 kv.m
pradinis geliu plotas: 1 kv.m
geliu dauginimosi greitis: 1

per kiek metu pasidengs visas plotas? */

function flowers(plotas, pradinisPlotas, greitis) {
    let pots = pradinisPlotas;
    let year = 1;

    while(pots < plotas) {
        pots = pots + pots * greitis;
        console.log(pots);
        year++;
    }
    return year;
}

console.log(flowers(20, 1, 1),'->',6);

//console.log(flowers(50, 4, 2),'->',4);