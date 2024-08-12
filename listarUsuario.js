let usuarios = require ('./usuarios');

function listarUsuario(){
    for (o = 0; o < usuarios.length; o++ ) {
        const usuario = usuarios[o]
        console.log(`
        ID: ${usuario.id}
        Nome: ${usuario.nome}
        Email: ${usuario.email}`);

        for (let i = 0; i < usuario.telefones.length; i++) {
            console.log(`
        telefone ${i + 1}. ${usuario.telefones[i]}`)
        }
    };
}
module.exports = listarUsuario;