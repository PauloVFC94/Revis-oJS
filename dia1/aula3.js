"use strict"

//O que é uma variável?
//É um espaço alocado na memória pra guardar uma informação

//        Tipo var: Gera uma variável acessível fora do escopo de onde foi declarada.

//ex:

if (true){
    var idade = 25; // foi declarada dentro do escopo do if e não no escopo geral
}

console.log(idade); // saída -> 25

//        Tipo let:Gera uma variável acessível apenas no escopo onde foi declarada e
//          essa variável pode ser modificada

//Ex:

/*

if(true){
    let nome = "Julio";
}

console.log(nome); saída -> ReferenceError: nome is not defined

*/

if(true){
    let nome = "Julio";
    console.log(nome); // saída -> Julio
    nome = "Paulo";
    console.log(nome) // saída -> Paulo
}

//          Tipo const: Não vaza escopo e não pode ter o valor alterado depois que declarada

//ex:

const planeta = "Terra";
console.log(planeta); // saída -> Terra
//planeta = "Jupiter";
//console.log(planeta) // saída -> TypeError: Assignment to constant variable.

