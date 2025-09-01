// let é uma variável global, ao declarar ela, ela servirá para todo o código, equanto var é uma variaével local e, const é uma 
// constante por isso o seu valor não pode ser alterado.

let exemplo1 = 1
{
    var exemplo2 = 2
}

const exemplo3 = 3;

exemplo1 = exemplo1 +exemplo2;
console.log(exemplo1);

exemplo3 = exemplo1+exemplo2;
console.log(exemplo3)