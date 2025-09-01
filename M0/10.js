let x = 5;
let y = 10;
let z = (x++ * --y) / 2 + (y % 3);

//o valor final de z será 28 pois na expressão deve-se resolver primeiro a operção entre parenteses, então (x++ * --y) e (y % 3) após 
// atribuir o valores as icógnitas as operações se traduzem em "54" e "1" a seguir realizamos o resto da expressão: 54/2+1. Resultano em 
// 28.