function autoAshys(ratai) {
    //return ratai / 2;
    if (ratai === 4) {
        return 2;
    } else {
        return (ratai - 2) / 4 + 1;
    }
}

console.log(autoAshys(4))
console.log(autoAshys(10))
console.log(autoAshys(14))

console.log('-----------------------------------')

const appSize = [4, 8, 7, 6, 1, 1, 9, 45, 7, 2];
const phoneMemorySize = 70;

function kiekTilpsAppsu(memory, list) {
    let usedSpace = 0;
    let installedAppsCount = 0;
    const appCount = list.length;

    for (let i=0; i<appCount; i++) {
        const appSizee = list[i];
        usedSpace += appSizee;
        if (usedSpace <= memory) {
            installedAppsCount++;
            console.log(appSizee, usedSpace);
        }
    }

    return installedAppsCount;
}

const phoneAppCount = kiekTilpsAppsu(phoneMemorySize, appSize);

console.log(phoneAppCount);