addEventListener('load', function(e) {

    this.document.querySelector('#test').innerHTML = 'El más barato';
});

const producto1 = prompt('¿Cuál es el primer articulo?');

let precio1 = prompt('¿Cuánto cuesta ' + producto1 + '?');

let peso1 = prompt('¿Cuánto pesa ' + producto1 + '?');

const producto2 = prompt('¿Cuál es el segundo articulo?');

let precio2 = prompt('¿Cuánto cuesta ' + producto2 + '?');

let peso2 = prompt('¿Cuánto pesa ' + producto2 + '?');

const precioa = precio1/peso1;

const preciob = precio2/peso2;

if(precioa < preciob) {
    alert('El producto ' + producto1 + ' es más barato que ' + producto2 + ' porque cuesta: ' + precioa)
    alert('El producto ' + producto2 +' cuesta ' + preciob)
}

if(precioa === preciob) {
    alert('El producto ' + producto2 + ' cuesta lo mismo que: ' + producto1 + ' porque cuesta: ' + precioa)
}

else {
    alert('El producto ' + producto1 + ' es más caro que ' + producto2 + ' porque cuesta: ' + precioa)
    alert('El producto ' + producto2 +' cuesta ' + preciob) 
}

document.write('El producto: ' + producto1 + ' cuesta ' + precioa)
document.write('<br/>');
document.write('El producto: ' + producto2 + ' cuesta ' + preciob)

