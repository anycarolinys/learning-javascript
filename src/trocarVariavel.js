function trocarValor(a, b) {
    let aux = a;
    a = b;
    b = aux;

    return [a, b];
}

let var1 = 1;
let var2 = 2;

let vetorRetorno = trocarValor(var1, var2);

console.log(vetorRetorno);