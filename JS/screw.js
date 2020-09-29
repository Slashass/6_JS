/* medvarztis :
ilgis: 15 mm
zingsnis: 1.5 mm
rankos pasukimas  : 140deg
kiek reikia pasukimu susukti medvarzti? */

function screw(height, step, turn) {
    const stepCount = height / step;
    const turnPerStep = 360 / turn;
    const turnsCount = stepCount * turnPerStep;
    return turnsCount;
}


console.log(screw(15, 1.5, 140), '->', 25.7);