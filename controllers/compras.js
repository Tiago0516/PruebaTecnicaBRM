//Controllers de compras: Aqui se crean las funciones de crear, listar y buscar
const Sequelize = require('sequelize');
const compras = require('../models').compras;
module.exports = {
     //Funcion de Crear compras
    create(req, res) {
        return compras
            .create({
                Id_Compra: req.params.Id_Compra,
                Id_Cliente: req.params.Id_Cliente,
                Id_Producto: req.params.Id_Producto,
                Cantidad: req.params.Cantidad,
                Fech_Compra	: new Date(),
                Precio_Total : req.params.Precio_Total,
                createdAt: new Date(),
                updatedAt: new Date()
            })
            .then(compras => res.status(200).send(compras))
            .catch(error => res.status(400).send(error))
    },
     //Funcion de Listar
    list(_, res) {
        return compras.findAll({})
            .then(compras => res.status(200).send(compras))
            .catch(error => res.status(400).send(error))
    },
    //Funcion de Buscar
    find(req, res) {
        return compras.findAll({
            where: {
                Id_Compra: req.params.Id_Compra,
            }
        })
            .then(compras => res.status(200).send(compras))
            .catch(error => res.status(400).send(error))
    },
};