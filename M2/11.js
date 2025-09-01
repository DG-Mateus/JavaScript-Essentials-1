var nome = "Ana";

function mostrarNome() {
    var nome = "Carlos";
    console.log(nome); // ?
}

mostrarNome();
console.log(nome); // ?

//será impresso "Carlos" e "Ana" pois primeiro ele declara a variavel ana e na função ele acessa a variavel nome que esta dentro da 
// função e logo depois acessa a que está fora, pedindo depois para ser impressa no console.log.