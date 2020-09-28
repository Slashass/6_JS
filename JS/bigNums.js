 function bigNum(list) {
    let biggestNumber = list[0];
    for (let i=0; i<list.length; i++) {
        const currentNumber = list[i];
        
        if(currentNumber > biggestNumber) {
            biggestNumber = currentNumber;
        }
    }
    return biggestNumber;
 }