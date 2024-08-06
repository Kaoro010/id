const prompt = require('prompt-sync')();

const addUsuario = require ('./addUsuario');
const listarUsuario = require ('./listarUsuario');
const atualizarUsuario = require ('./atualizarUsuario');
const removerUsuario = require ('./removerUsuario');

function menu(){
    console.log(`
    1. add usuario
    2. listar usuario
    3. atualizar usuario
    4. remover usuario
    5. sair
`)
let vetor = prompt('qual opçao')
let index

switch (vetor){
    case '1':
        const nome = prompt('nome: ');
        const telefone = prompt('telefone: ');
        const email = prompt('email:')
        addUsuario({nome, telefone, email})
        console.log('adicionado')
        menu();
        break;
    case '2':
        listarUsuario()
        menu()
        break
    case '3':
        listarUsuario()
        id = parseInt(prompt('numero para atualizar')) -1
        const novoNome = prompt('nome: ')
        const novoTelefone = prompt('telefone: ')
        const novoEmail = prompt('email')
        atualizarUsuario(id, {nome: novoNome, telefone: novoTelefone, email: novoEmail})
        console.log('atualizado')
        menu()
        break
    case '4':
        listarUsuario()
        id = parseInt(prompt('deletar')) -1
        removerUsuario(id)
        console.log("removido")
        menu()
        break
    case '5':
        break
        default:
            console.log('seu feioso')
}

}
menu()