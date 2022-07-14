let nome = "Any Caroliny"; // string literal
// let idade = 25; // number literal
let aprovado = true; // boolean
let variavel = null;

let sobrenome = undefined;
let cor = null;

/* */

let vetor = [2, 1, 3];

/* A convenção para nomear uma função
* Consiste em utilizar um verbo e um substantivo, por exemplo:
* resetaCor, retornarTamanho, calcularAltura
*/

let corSite = "azul";

function resetaCor(cor, tonalidade) {
    // corSite = cor + ' ' + tonalidade;
    corSite = cor.concat(tonalidade);
};

resetaCor('amarelo', ' claro');

function dobrarValor(valor) {
    return valor * 2;
};

let resultado = dobrarValor(10);

// OPERADORES ARITMÉTICOS

let salario = 100;

// console.log(salario + 10);
// console.log(salario - 10);
// console.log(salario * 10);
// console.log(salario / 10);
// console.log(salario ** 10);

let valor = 19;

// console.log(valor++)
// console.log(valor--)
// console.log(++valor)
// console.log(--valor)

// OPERADORES DE ATRIBUIÇÃO
let preco = 100;
preco += 10;
preco -= 10;
preco *= 10;
preco /= 10;


// OPERADORES DE IGUALDADE
// console.log(1 === '1'); // igualdade estrita
// console.log(1 == '1'); // igualdade solta

// OPERADOR TERNÁRIO
let pontos = 100;
let tipoCliente = pontos >= 100 ? 'Premium' : 'Comum';
// console.log(tipoCliente);

// OPERADORES LÓGICOS

// OPERADOR E (&&)
let maioridade = true;
let possuiCTPS = false;
let podeAplicar = maioridade && possuiCTPS;

// OPERADOR OU (||)
podeAplicar = maioridade || possuiCTPS;

// OPERADOR NÃO (!)
let recusado = !podeAplicar;
// console.log('candidato(a) recusado = ', recusado);

// COMPARAÇÕES NÃO BOOLEANAS

// Falsy: undefined, null, 0, false, "" (strings vazias), NaN (Not a Number)

// Truthy: tudo que não é falsy

let corPersonalizada = '';
let corPadrao = 'azul';
let corPerfil = corPersonalizada || corPadrao;

// console.log(corPerfil);

// EXPRESSÕES CONDICIONAIS

let horario = new Date();
let hora = horario.getHours();

/* if (hora >= 6 && hora < 13) {
    console.log('Bom dia!')
} else if (hora >= 13 && hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!');
} */

let permissaoUsuario = '2';

/* switch (permissaoUsuario) {
    case '1':
        console.log('usuario comum');
        break;
    case '2':
        console.log('usuario padrao')
        break;
    case '3':
        console.log('usuario premium')
        break
    default:
        console.log('usuario nao reconhecido')
        break;
} */

// LAÇOS
const array = ['a', 'n', 'y'];
/* 
// FOR
for (let i = 0; i < array.length; ++i) {
    console.log(array[i]);
}
console.log('\n');

// FORIN
// ITERAR EM UM ARRAY USANDO FORIN NÃO É UMA BOA PRÁTICA
for (let i in array) {
    console.log(array[i]);
}
console.log('\n');

// FOREACH
array.forEach((v, i) => console.log(v));
console.log('\n');

// FOROF
for (const v of array) {
    console.log(v);
}
console.log('\n'); */

// Adicionando a propriedade 'test' ao array
array.test = 'bad';

// A linha abaixo retorna true pois arrays
// são um tipo especial de objeto em JavaScript
// console.log(array[1] === array['1']);

// É possível add um elemento vazio em um array
const array1 = ['a', , 'c'];

// Printa 'a', undefined, 'c'
/* console.log('\nfor');
for (let i = 0; i < array1.length; ++i) {
    console.log(array1[i]);
}

console.log('\nforof');
for (const i of array1) {
    console.log(i);
}

console.log('\nforeach');
array1.forEach(i => console.log(i));

console.log('\nforin');
for (const i in array1) {
    console.log(i);
} */

// OPERADOR DIFERENÇA
/* for (let i = 1; i <= 5; ++i) {
    if (i % 2 !== 0)
        console.log(i);
} */


/*LOOP WHILE 
while (i >= 1) {
    console.log(i);
    i--;
} */

// LOOP DO..WHILE
/* let i = 0;
do {
    console.log('imprimindo...', i);
    i++;
} while (i < 10); */

// O loop for/in funciona melhor para iterar sobre propriedades
// de um objeto ou de um array

let pessoa = {
    nome: "Any Caroliny",
    sobrenome: "Souza Silva",
    idade: 19,
    altura: 1.70
};

/* for (let chave in pessoa) {
    console.log(chave, ':', pessoa[chave]);
} */

const cores = ['azul', 'amarelo', 'vermelho', 'verde'];
// O loope for/of é ideal para fazer iterações sobre array
/* for (let index of cores) {
    console.log(index);
} */


function maior(valor1, valor2) {
    return valor1 >= valor2 ? valor1 : valor2;
}

let maiorNumero = maior(2, 3);

function fizzBuzz(entrada) {

    if (typeof (entrada) !== 'number')
        return 'Não é um número';
    else if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FIZZBUZZ';
    else if (entrada % 3 === 0)
        return 'FIZZ';
    else if (entrada % 5 === 0)
        return 'BUZZ';
    return entrada;
}

function verificarVelocidade(velocidade) {

    const velocidadeMaxima = 70;
    const kmPorPonto = 5;

    if (velocidade <= velocidadeMaxima)
        return 'Velocidade aceitável';

    const pontos = Math.floor((velocidade - velocidadeMaxima) / kmPorPonto);

    if (pontos >= 12)
        return 'Carteira suspensa!'

    return pontos + ' pontos na carteira';
}

function verificarPropriedade(objeto) {
    for (prop in objeto) {
        if (typeof (objeto[prop]) === 'string') {
            console.log(prop + ' é uma propriedade String');
        }
    }
}

function exibirAsteriscos(linhas) {

    let asteriscos = '*';

    for (let index = 0; index <= linhas; index++) {
        asteriscos = '';
        for (let j = 0; j <= index; j++) {
            asteriscos += '*';
        }
        console.log(asteriscos);
        console.log('\n');

    }
}

// FACTORY FUNCTIONS (FUNÇÕES DE FÁBRICA)

const celular = {
    marca: 'SAMSUNG',
    tamanhoTela: {
        vertical: 155,
        horizontal: 70
    },
    ligar: function () {
        console.log('Ligando...');
    }
}

// ISSO EH UMA FACTORY FUNCTION
function criarCelular(marca, tamanhoTela, bateria, mensagem) {
    // Dado que o nome da propriedade e o nome do parâmetro são
    // iguais, é possível usar o seguinte artifício
    return {
        marca,
        tamanhoTela,
        bateria,
        ligar() {
            console.log(mensagem);
        }
    }
}

const novoCelular = criarCelular('SAMSUNG', 5.5, 5000, 'Ligando...');

// ISSO EH UMA FACTORY FUNCTION
function criarLivro(nome, preco, autor, anoPublicacao) {
    return {
        nome,
        preco,
        autor,
        anoPublicacao
    }
}

const novoLivro = criarLivro('O Conto da Aia', 56.70, 'Margaret Atwood', 2018);

// CRIANDO NOMESPACES
var MEUAPP = MEUAPP || {};

// DEFININDO UMA NOVA CLASSE CHAMADA 'Pessoa'
var Pessoa = function () { };
// var Pessoa() = {};

var pessoa1 = new Pessoa();
var pessoa2 = new Pessoa();

// Forma alternativa de criar um objeto em JavaScript
const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};

const me = Object.create(person);

me.name = 'Any Caroliny';
me.isHuman = true;
// me.printIntroduction();


// DIFERENÇA ENTRE 'var' E 'let'
function exibeMensagem() {
    var mensagemForaIf = 'Fora';
    console.log(mensagemForaIf);

    if (true) {
        let mensagemDentroIf = 'Dentro';
        console.log(mensagemDentroIf);
    }
    // console.log(mensagemDentroIf);
}

// ISSO EH UM CONSTRUCTOR FUNCTION
function Telefone(marca, tamanhoTela, capacidadeBateria) {
    this.marca = marca;
    this.tamanhoTela = tamanhoTela;
    this.capacidadeBateria = capacidadeBateria;
    this.ligar = function () {
        console.log("Fazendo ligação...");
    }
}

// CONVERTENDO FUNÇÃO ANTERIOR EM UMA CLASSE
class Celular {
    constructor(marca, tamanhoTela, capacidadeBateria) {
        this.marca = marca;
        this.tamanhoTela = tamanhoTela;
        this.capacidadeBateria = capacidadeBateria;
        this.ligar = function () {
            console.log("Fazendo ligação...");
        }
    }
}


var meuCelular = new Celular('Xiaomi', 5.5, 2000);

const mouse = {
    cor: 'red',
    marca: 'dazz'
}

mouse.velocidade = 3000;
mouse.alterarDPI = function () {
    console.log('Mudando DPI...');
}

// console.log(mouse);

delete mouse.velocidade;
delete mouse.alterarDPI;

// console.log(mouse);

// CLONANDO OBJETOS
const celular1 = Object.assign({
    bateria: 5000,
    cor: 'azul'
}, celular);

// console.log(celular1);

// SINTAXE DE ESPELHAMENTO (SPREAD SYNTAX)
const celular2 = { ...celular };

// BIBLIOTECA MATH
// console.log(Math.random());
// console.log(Math.max(8,-7,9));
// console.log(Math.min(-5,0,1));

// STRINGS
const string1 = 'tipo primitivo';

const string2 = new String('tipo objeto');

// Utilizar este método é possível pois o JavaScript encapsula
// o tipo primitivo automaticamente
// console.log(string1.length);
// console.log(string1.indexOf('primitivo'));
// console.log(string1.replace('tipo', 'type'));
// console.log(string1);
// console.log(string1.split(' '));

// console.log(string2.length);
// console.log(string2.includes('tipo'));
// console.log(string2.startsWith('palavra'));
// console.log(string2.endsWith('objeto'));

// ESCAPE SEQUENCES
// console.log("Testando escape sequence \\b \b aqui ");
// console.log("Testando escape sequence \\t \t aqui");
// console.log("Testando escape sequence \\n \naqui");
// console.log("Testando escape sequence \\v \v aqui");
// console.log("Testando escape sequence \\f \f aqui");
// console.log("Testando escape sequence \\r \r aqui");
// console.log("Testando escape sequence \" aqui");
// console.log("Testando escape sequence \' aqui");

// TEMPLATE LITERAL
// É uma ferramenta que facilita a formatação de strings
// Literais existentes:
// Object: {}
// Boolean: true, false
// string '', ""
// Template `` 

const nomeMensagem = "Any";

const mensagemEmail = `Este é um template literal, 
mais um recurso do JavaScript. Eis uma string:
'STRING' ou ainda "STRING"
Parabéns por ter chegado até esse ponto do curso,
Obrigada, ${nomeMensagem}!`;

const literal = `O dobro de 10 é igual a ${dobrarValor(10)}`

// console.log(literal);
// console.log(mensagemEmail);

const data = new Date();
const data2 = new Date('July 19 2020 21:45');
// Date(ano, mês (iniciando em 0), dia, horas, minutos);
const data3 = new Date(2021, 3, 5, 8, 45);
// console.log(data2);
// console.log(data3);
// console.log(data3.toDateString());
// console.log(data3.toTimeString());

// Este formato é o que se utiliza pra extrair informações de datas em banco de dados
// console.log(data3.toISOString());

function Endereco(rua, cidade, CEP) {
    this.rua = rua,
        this.cidade = cidade,
        this.CEP = CEP
}

const novoEndereco = new Endereco('25 de novembro', 'cidade', '49140-000');

function exibirEndereco(endereco) {
    console.log(`${endereco.rua}
${endereco.cidade}
${endereco.CEP}`);
}

function exibirEnderecoIteracao(endereco) {
    for (const chave in endereco)
        console.log(`${chave}: ${endereco[chave]}`);
}

// exibirEndereco(novoEndereco);
// exibirEnderecoIteracao(novoEndereco);

// IGUALDADE DE OBJETOS

let endereco1 = new Endereco('Rua A', 'Aracaju', '49140-111');
let endereco2 = new Endereco('Rua A', 'Aracaju', '49140-111');
delete endereco2.CEP;



function testaIgualdadeEnderecoMemoria(objeto1, objeto2) {
    return objeto1 === objeto2;
}

let retorno = testaIgualdadeEnderecoMemoria(endereco1, endereco2);

const postagem = {
    titulo: 'Como educar um filho',
    mensagem: 'Deixe ele ser quem ele quiser ser',
    autor: 'Paulo Freire',
    visualizacoes: 10,
    estaAoVivo: true,
    comentarios: [
        {autor: 'Any', mensagem: 'Mensagem de Any'}, 
        {autor: 'Bia', mensagem: 'Mensagem de Bia'}, 
        {autor: 'Carla', mensagem: 'Mensagem de Carla'}]
}

// console.log(postagem);

function printComentarios(postagem) {
    for (const i of postagem.comentarios) {
        console.log(`${i.autor}: ${i.mensagem}`);
    }
}

// printComentarios(postagem);

// Utilizando o conceito de constructor function
// para criar objetos 'postagem'
function Postagem(titulo, autor, conteudo) {
    this.titulo = titulo,
    this.autor= autor,
    this.conteudo = conteudo,
    this.visualizacoes = 0,
    this.estaAoVivo = false,
    this.comentarios = []
}

// A propriedade 'comentarios' é um array de objetos
let novaPostagem = new Postagem('Novo post', 'Autor do post', 'Conteudo do post');

// console.log(novaPostagem);

// Array com 3 objetos cada um com uma propriedade
let faixaPrecoObjeto = [
    {tooltip: 'Faixa de preço'},
    {minimo: 500},
    {maximo: 1000}];

// Array com 1 objeto contendo 3 propriedades
let faixaPrecoProps = [
    {
        tooltip: 'Faixa de preco', 
        minimo: 400,
        maximo: 800
    }
];

let faixas = [ 
    {tooltip: 'até R$ 200', minimo: 100, maximo: 200},
    {tooltip: 'de R$ 200 a R$ 450', minimo: 200, maximo: 450},
    {tooltip: 'a partir de R$ 450 a R$2 800', minimo: 450, maximo: 800},
];

// Criando objetos com Factory Function
function criaFaixaPreco(tooltip, minimo, maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criaFaixaPreco('faixa1', 100, 200),
    criaFaixaPreco('faixa2', 200, 300),
    criaFaixaPreco('faixa3', 300, 400)
];

// Criando objetos com Constructor Function 
function Faixa(tooltip, minimo, maximo) {
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixas3 = [
    new Faixa('faixa1', 100, 200),
    new Faixa('faixa2', 200, 300),
    new Faixa('faixa3', 300, 400)
];

// console.log(faixas);
// console.log(faixas2);
// console.log(faixas3);

// ARRAYS DE TIPOS PRIMITIVOS
const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arrayNumeros);

// Inserindo no INÍCIO do Array
arrayNumeros.unshift(0);
// console.log(arrayNumeros);

// Inserindo em POSIÇÕES INTERMEDIÁRIAS no array

// Inserindo o valor 4 na posição 1 do array
arrayNumeros.splice(1, 0, 4);

// Inserindo os elementos 10, 11 e 12 a partir da posição 0 do array
arrayNumeros.splice(0, 0, 10, 11, 12);
// console.log(arrayNumeros);

// Deletando 3 valores a partir da posição 1 do array
arrayNumeros.splice(1, 3);
// console.log(arrayNumeros);

// Inserindo no FIM do array
arrayNumeros.push(5);
// console.log(arrayNumeros);

// Buscando o índice em que se encontra o valor 4
// console.log(arrayNumeros.indexOf(4));

// Buscando o último índice em que se encontra o valor 4
// console.log(arrayNumeros.lastIndexOf(4));

// Retorna um valor negativo caso o valor não exista no array
// console.log(arrayNumeros.lastIndexOf('0') !== -1);

// Confirmando a existência de um valor no array
// console.log(arrayNumeros.includes(15));

// ARRAYS DE TIPO REFERÊNCIA
const funcionarios = [
    {id: 001, nome: 'Amando Silva'},
    {id: 002, nome: 'Lucas Ribeiro'},
    {id: 003, nome: 'Tamara Souza'}
];

// BUSCANDO E RETORNANDO UM OBJETO DE UM ARRAY DE TIPO REFERÊNCIA
const funcionario = funcionarios.find(function(objetoFuncionario) {
    // return objetoFuncionario.nome === 'Tamara Souza';
    return objetoFuncionario.id === 002;
});

// console.log(funcionario);

var vetorNumeros = [9, 8, 60, 4, -1];

// Buscando o primeiro valor que seja 
// maior que 10 no vetor
var encontrado = vetorNumeros.find(function(elemento) {
    return elemento > 10;
});

// console.log(encontrado);

// ARROW FUNCTIONS (FUNÇÕES DE SETA)
const imoveis = [
    {rua: 'A', numero: 18},
    {rua: 'B', numero: 190},
    {rua: 'C', numero: 87}
];

// console.log(imoveis.find(imovel => imovel.rua === 'C'));

const materiais = ['Hidrogênio', 'Hélio', 'Lítio', 'Berílio'];

// Imprimindo o tamanho de todas as palavras do vetor
// console.log(materiais.map(material => material.length));


// REMOVER ELEMENTOS DE UM ARRAY
const valores = [1, 3, 5, 7, 9, 11, 13, 15];

// Removendo no final
const removido1 = valores.pop();
// console.log(removido1);

// Removendo no início
const removido2 = valores.shift();
// console.log(removido2);

// Esvaziando um array

valores.length = 0; // Solução 1
valores.splice(0, valores.length); // Solução 2
while(valores.length > 0) // Solução 3
    valores.pop();


// COMBINAÇÃO E DIVISÃO DE ARRAYS
const conjunto1 = [2,4,6,8,10];
const conjunto2 = [1,3,5,7,9];

// Concatenando conjuntos
const conjunto3 = conjunto1.concat(conjunto2);

// Seccionando conjunto
// Retornan os valores entre as posições 1 e 3 (4 - 1)
// console.log(conjunto1.slice(1, 4));

// OPERADOR SPREAD
// Concatenando arrays
const conjunto4 = [...conjunto1, ...conjunto2];
// console.log(conjunto4);

// Clonando array
const conjunto5 = [...conjunto4];
// console.log(conjunto5);

// FOREACH
const numeros = [0,1,2,3,4,5,6];

// numeros.forEach((valor, indice) => console.log(valor, indice));

function logArrayElements(elemento, indice) {
    console.log('a[' + indice + '] = ' + elemento);
}

// [1,2,3,4].forEach(logArrayElements);

function copiaObjeto(objeto) {
    var copia = Object.create(Object.getPrototypeOf(objeto));
    var nomeProps = Object.getOwnPropertyNames(objeto);

    nomeProps.forEach(function(nome) {
        var descritor = Object.getOwnPropertyDescriptor(objeto, nome);
        Object.defineProperty(copia, nome, descritor);
    });

    return copia;
}


var obj = {prop1 : 1, prop2: 2};
var copia = copiaObjeto(obj);
// console.log(copia);

// JOIN E SPLIT
const palavra = ['p','a','l','a','v','r','a'];
const vetorJoin = palavra.join('-');
// console.log(vetorJoin);

const palavra1 = 'esta eh uma url de um site';
const vetorSplit = palavra1.split(' ');
// console.log(vetorSplit);


let idade = prompt('Qual a sua idade?');

if(idade >= 18)
    alert('Maior de idade!');
else
    alert('Menor de idade!');









