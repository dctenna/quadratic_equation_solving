const a = prompt('Enter variable a');
const b = prompt('Enter variable b');
const c = prompt('Enter variable c');

function quadrEqSolving(a, b, c) {
     
     const d = Math.pow(b, 2) - 4 * a * c;
     if (d > 0) {
        const x1 = (-b - Math.sqrt(d)) / (2 * a);
        const x2 = (-b + Math.sqrt(d)) / (2 * a);
        return 'x1 = ' + x1 + ' x2 = ' + x2;
     } else if (d == 0) {
        const x = -b / (2 * a);
        return 'x = ' + x;
     } else {
         return 'Sorry, there are no real roots.'
     }
}

const message = quadrEqSolving(a, b, c);
alert(message);