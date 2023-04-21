const mongoose =require('mongoose')

const URL = 'mongodb+srv://dony2:SoCP6RhLgAad0Ian@cluster0.vrgwuvj.mongodb.net/test'
const dbConnection = async () => {
    await mongoose.connect(URL)
}
console.log('conectado a la base de datos')

module.exports = {
    dbConnection
}