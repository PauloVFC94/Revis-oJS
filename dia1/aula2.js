"use strict"

//O que é o Modo Estrito JS

// Só permite que variáveis que já foram delcaradas sejam utilizadas, deixando o código mais limpo

/*nome = "Paulo";
console.log(nome);*/

//A situação acima gera o erro "nome is not defined" pois não foi declarado o tipo de variável

//Em strict mode o correto seria:

let nome = "Paulo"
console.log(nome);
