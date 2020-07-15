// novo recurso do ES2015

const pessoa = {
    nome:'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const{ nome, idade} = pessoa //retirar de dentro do objeto pesso o valor nome e idade
console.log(nome, idade)

const{ nome: n, idade: i} = pessoa // modificando o nome
console.log(n, i)

const{ sobrenome, bemHumorada = true} = pessoa // definindo um valor por padrao
console.log(sobrenome, bemHumorada)

const{ endereco: { logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)