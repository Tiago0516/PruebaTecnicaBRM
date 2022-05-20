//Controllers de productos: Aqui se crean las funciones de crear, listar y buscar
const Sequelize = require('sequelize');
const productos = require('../models').productos;
module.exports = {
     //Funcion de Crear productos
    create(req, res) {
        return productos
            .create({
                Num_Lote: req.params.Num_Lote,
                Nom_Prod: req.params.Nom_Prod,
                Precio: req.params.Precio,
                Cant_Disp: req.params.Cant_Disp,
                Fech_Ingreso: new Date(),
                createdAt: new Date(),
                updatedAt: new Date()
            })
            .then(productos => res.status(200).send(productos))
            .catch(error => res.status(400).send(error))
    },
     //Funcion de Listar
    list(_, res) {
        return productos.findAll({})
            .then(productos => res.status(200).send(productos))
            .catch(error => res.status(400).send(error))
    },
    //Funcion de Buscar
    find(req, res) {
        return productos.findAll({
            where: {
                Num_Lote: req.params.Num_Lote,
            }
        })
            .then(productos => res.status(200).send(productos))
            .catch(error => res.status(400).send(error))
    },
};