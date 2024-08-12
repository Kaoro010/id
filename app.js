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

switch (vetor){
    case '1':
        const nome = prompt('Nome: ');
        let telefones = [];
        let telefone;
        while ((telefone = prompt('Telefone (ou deixe em branco para sair): '))) {
            telefones.push(telefone);
        }
        const email = prompt('Email: ');
        addUsuario({ nome, telefones, email });   
        console.log('Contato adicionado com sucesso!');
        menu();
        break;
    case '2':
        listarUsuario()
        menu()
        break
    case '3':
        listarUsuario()
        id = parseInt(prompt('numero para atualizar'))
        const novoNome = prompt('nome: ')
        let novoTelefones = []
        let novoTelefone 
        while((novoTelefone = prompt('novo telefone:'))){
            novoTelefones.push(novoTelefone)
        }
        const novoEmail = prompt('email')
        atualizarUsuario(id, {nome: novoNome, telefones: novoTelefones, email: novoEmail})
        console.log('atualizado')
        menu()
        break
    case '4':
        listarUsuario()
        id = parseInt(prompt('deletar'))
        let confirmacao = prompt('tem certeza? sim/nao')
        removerUsuario(id, confirmacao)
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