const Usuario = require('../modelos/usuario')

const usuarioGet = async (req,res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error obteniendo usuarios de la base de datos');
    }
}

const usuarioPost=(req,res) => {
    const body = req.body
    const usuario = new Usuario(body)
    usuario.save()
    res.send(usuario)
}

const usuarioPut = async (req,res) => {
    const {id} = req.params;
    const {nombre,apellido} = req.body;
    const personaActualizada = await Usuario.findOneAndUpdate({ _id: id }, { nombre, apellido });
    res.json(personaActualizada)
}

const usuarioDelete = async (req,res) => {
    const {id}= req.params;
    const usuario = await Usuario.findByIdAndDelete(id);
        res.json(usuario);

}

module.exports = {
    usuarioPost,
    usuarioGet,
    usuarioPut,
    usuarioDelete
}