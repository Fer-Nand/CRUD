const mongoose = require('mongoose');
const { Schema } = mongoose;

const usuarioSchema = new Schema({
    nombre: { type: String},
    email: { type: String},
    telefono: { type: String},
    estado : { type: String},
    hijos: { type: String},
    libros: { type: String},
    musica: { type: String},
    deportes: { type: String},
    otros: { type: String}
});

module.exports = mongoose.model('Usuario', usuarioSchema);
