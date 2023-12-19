
class Animal {
    constructor(nome) {
    if (this.constructor === Animal) {
        throw new Error("Não é possível instanciar uma classe abstrata.");
    }
    this.nome = nome;
    }

    emitirSom() {
    throw new Error("O método emitirSom() deve ser implementado nas classes filhas.");
    }

    mover() {
    console.log(`${this.nome} está se movendo.`);
    }
}

class Cachorro extends Animal {
    constructor(nome, raca) {
    super(nome);
    this.raca = raca;
    }

    emitirSom() {
    console.log(`${this.nome} está latindo.`);
    }

    cavar() {
    console.log(`${this.nome} está cavando um buraco.`);
    }
}

class Gato extends Animal {
    constructor(nome, cor) {
    super(nome);
    this.cor = cor;
    }

    emitirSom() {
console.log(`${this.nome} está miando.`);
    }

    arranhar() {
console.log(`${this.nome} está arranhando.`);
    }
}


const meuCachorro = new Cachorro("Rex", "Labrador");
meuCachorro.emitirSom();
meuCachorro.mover();
meuCachorro.cavar();

const meuGato = new Gato("Whiskers", "Branco");
meuGato.emitirSom();
meuGato.mover();
meuGato.arranhar();





class Pessoa {
    constructor(nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
    }

    apresentar() {
    console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e trabalho como ${this.profissao}.`);
    }
}


const pessoa1 = new Pessoa("Alice", 30, "Engenheira");
const pessoa2 = new Pessoa("Bob", 25, "Desenvolvedor");
const pessoa3 = new Pessoa("Carol", 35, "Médica");


pessoa1.apresentar();
pessoa2.apresentar();
pessoa3.apresentar();
