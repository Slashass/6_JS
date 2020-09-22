// if, switch, ternary 

// if naudotiniai: >, <, ===, >=, <=, !== (nelygu)

const num1 = 4;
const num2 = 8;

if (num1 > num2) {
    console.log(num1, 'didesnis uz', num2);
} else {
    console.log(num1, 'mazesnis uz', num2);
}

// switch 

const diena = 'antradienis';

switch (diena) {
    case 'pirmadienis':
        console.log("dirbam1");
        break;
    case 'antradienis':
        console.log('dirbam2');
        break;
}

// autobusas 6g;

const stotele = 'asdsad';

switch (stotele) {
    case 'Naujoji Vilnia':
        console.log('Naujoji vilnia');
    case 'Geniu':
        console.log('Geniu');
    case 'Rudens':
        console.log('Rudens');
    case 'Mindaugo':
        console.log('Mindaugo');
    case 'Zaliasis tiltas':
        console.log('Zaliasis tiltas');
        break;
    case 'Lvovo':
        console.log('Lvovo');

    default:
        console.log('tokia stotele nerasta');
        break;
}