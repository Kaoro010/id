let usuarios = require ('./usuarios');

function removerUsuario(id, confirmacao){
    let index = usuarios.findIndex(usuario => usuario.id === id)
    if (index !== -1) {
        if(confirmacao.toLowerCase() === 'sim' ){
            usuarios.splice(index,1)
            console.log('usuario deletado')
            return true
        } else {
            return false
        }
    }
    return false
}
module.exports = removerUsuario