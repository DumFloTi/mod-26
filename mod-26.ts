//const multiplicao1 = (numero1: number, numero2: number): number => numero1 * numero2
function multiplicacao2(numero1: number, numero2: number): number {
    return numero1 * numero2;
}

/*
class Pessoa {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    dizOla(): string {
        return `${this.nome} disse oi`;
    }
}
*/

function dizOi(nome: string): string {
    return "Olá " + nome;
}

const resultadoMultiplicacao = multiplicacao2(2, 8);
console.log("Resultado da multiplicação:", resultadoMultiplicacao);

const dizOla = dizOi("Maria");
console.log(dizOla);