let usuarios = require ('./usuarios');

function listarUsuario(){
    usuarios.forEach(usuario => {
        console.log(`
        ID: ${usuario.id}
        Nome: ${usuario.nome}
        Telefones: ${usuario.telefones}
        Email: ${usuario.email}`);
    });
}
module.exports = listarUsuario;