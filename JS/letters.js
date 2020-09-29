function letters(text, step) {
    let errors = [];

    //validacija
    if (typeof text !== 'string'){
        errors.push('ERROR: antras turi buti skaicius');
    }
    if (typeof step !== 'number'){
        errors.push('ERROR: antras turi buti skaicius');
    } 
    if (errors.length > 0) {
        return errors;
    }
    if (step === 0) {
        return 'ERROR'
    }
    if (text.length < step) {
        return 'ERROR';
    }
    //logika
    const textSize= text.length;
    let ats = '';
    for (let i = 1; i <= textSize; i++) {
        const letter = text[i - 1];
        if (i%step === 0) {
            ats += letter;
        }
    }

    return text;
}

console.log(letters( 1561, 2 ) );
console.log(letters('abcdefg', 2 ), '->', 'bdf');
console.log(letters('abcdefghijkl', 3 ), '->', 'cfil');
console.log(letters('abc', 0 ) );
console.log(letters('abc', 4 ) );
