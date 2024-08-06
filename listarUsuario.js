let usuarios = require ('./usuarios');

function listarUsuario(){
    usuarios.forEach(usuario => {
        console.log(`id: ${usuario.id}, nome: ${usuario.nome}, telefone: ${usuario.telefone}, email: ${usuario.email}`)
    });
}
module.exports = listarUsuario;