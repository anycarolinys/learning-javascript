// Em OOP cada objeto é capaz de receber mensagens, processar dados e envio de mensagens para outros objetos

// PROGRAMAÇÃO BASEADA EM PROTÓTIPOS 
// é um estilo de programação orientada a objetos na qual não temos presença de classes. Em vez disso, a reutilização de comportamento (equivalente à herança das linguagens baseadas em classes) é realizada através de um processo de decorar (ou expandir) objetos existentes que servem como protótipos. 


// NAMESPACES
// É um recipiente que permite o agrupamento de funcionalidades em um único nome específico para uma aplicação. Em JS, um namespace é simplesmente outro objeto contendo métodos, propriedades e objetos
// Para criar um namepace cria-se um objeto global e todas as variáveis, métodos e chamadas de função tornam-se propriedades daquele objeto

// Verifica-se se MEUAPP já está definido dentro da aplicação, se sim, utiliza-se o objeto global existente, caso contrário cria-se um objeto vazio que encapsula métodos, variáveis e objetos
var MEUAPP = MEUAPP || {};

// Criando subespaçoes de nomes
MEUAPP.eventos = {};

// Criando um recipiente para métodos e propriedades em comum
MEUAPP.metodosEmComum = {
    // Definindo expressões regulares para validação de dados
    regexParaNome: "",
    regexParaTelefone: ""
}

MEUAPP.eventos = {
    addTratador: function(elemento, tipo, funcao) {
        
    },
    removerTratador: function(elemento, tipo, funcao) {
        
    },
    obterEvento: function(e) {

    }
}

// MEUAPP.eventos.addTratador("Tratador1", "Tipo 1", tratador);

// "CONSTRUTOR" DE UMA CLASSE
var ClassePessoa = function() {
    console.log("Novo objeto instanciado!");
}

var p1 = new ClassePessoa();
var p2 = new ClassePessoa();

// CRIANDO "CLASSES"
var Pessoa = function(nome) {
    this.nome = nome;
    console.log("Objeto Pessoa instanciado");
};

// INSTANCIANDO OBJETOS
var pessoa1 = new Pessoa('Any Caroliny');
var pessoa2 = new Pessoa('Maria Clara');

console.log(`Pessoa 1: ${pessoa1.nome}`);
console.log(`Pessoa 2: ${pessoa2.nome}`);

// MÉTODOS
// Para definir um método, atribua uma função a uma propriedade com o nome 'prototype' da classe
Pessoa.prototype.cumprimentar = function() {
    alert('Olá!');
};

// pessoa1.cumprimentar();

Pessoa.prototype.dizNome = function() {
    alert(this.nome);
};

// Métodos são funções normais de objetos que são vinculados a uma classe/objeto como uma propriedade, o que significa que eles podem ser invocados "fora de contexto"
var informaNome = pessoa1.dizNome;

// alert(informaNome === pessoa1.dizNome); // true


// informaNome.call(pessoa1);

// HERANÇA
// É uma maneira de criar uma classe como uma versão especializada de uma ou mais classes (JS supoerta apenas herança de classe única)
// JS não detecta o prototype.constructor da classe filha, então deve-se declará-la manualmente

// Declarando a classe Humano
function Humano() {}

// Método 'caminhar' da classe Humano
Humano.prototype.caminhar = function() {
    alert('Estou caminhando!');
};

// Método 'falar' da classe Humano
Humano.prototype.falar = function() {
    alert('Estou falando!');
};

// Declarando a classe Estudante
function Estudante() {
    // Chamando o método da classe mãe
    Humano.call(this);
}

// Herança de Humano
Estudante.prototype = new Humano();

// Corrigindo o ponteiro construtor, o qual aponta para Humano
Estudante.prototype.constructor = Estudante;

// Adicionando o método 'despedir'
Estudante.prototype.despedir = function() {
    alert('Tchau!');
};

var estudante1 = new Estudante();
// estudante1.falar();
// estudante1.caminhar();
// estudante1.despedir();

console.log(estudante1 instanceof Humano);
console.log(estudante1 instanceof Estudante);

// Herança utilizando 'Object.create'
Estudante.prototype = Object.create(Humano.prototype);



// COMPOSIÇÃO
// JS alcança composição deixando instâncias de classes ser os valores de atributos de outros objetos
var funcao = function() {};
alert(`\'funcao\' é um Function : ${funcao instanceof Function}`);
// Uso de composição
alert(`funcao.prototype é um Object: ${funcao.prototype instanceof Object}`); 