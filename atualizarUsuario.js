let usuarios = require ('./usuarios');

function atualizarUsuario(id, novoUsuarios){
    let index = usuarios.findIndex(usuario => usuario.id === id)
    if (index !== -1) {
        usuarios[index] = {id: id,...novoUsuarios}
    }
}

module.exports = atualizarUsuario;