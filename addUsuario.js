let usuarios = require ('./usuarios');

function addUsuario(usuario){ 
    usuario.id = usuarios.length + 1;
    usuarios.push(usuario);
}
module.exports = addUsuario;