let usuarios = require ('./usuarios');

function addUsuario(usuario){ 
    usuario.id = usuarios.length + 1;

    let jaExiste = usuarios.find(cont => cont.email === contato.email);
if (jaExiste) {
    throw new Error('Já existe um contato com esse email');
}    else {
    usuarios.push(usuario);
    }
}    
module.exports = addUsuario;