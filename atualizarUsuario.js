let usuarios = require ('./usuarios');

function atualizarUsuario(id, novoUsuarios){
    let mesaEmail = usuarios.find(usuario => usuario.email === novoUsuarios.email)
    if(mesaEmail){
        console.log('esse email ja existe')
    }
    let index = usuarios.findIndex(usuario => usuario.id === id)
    if (index !== -1) {
        usuarios[index] = {id: id,...novoUsuarios}
    }
}

module.exports = atualizarUsuario;