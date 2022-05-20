//Controllers de usuario: Aqui se crean las funciones de crear, listar y buscar

const Sequelize = require('sequelize');
const usuarios = require('../models').usuarios;
module.exports = {
    //Funcion de Crear Usuarios
    create(req, res) {
        return usuarios
            .create({
                Rol: 1,
                Id_User: req.params.Id_User,
                Nombre: req.params.Nombre,
                Pri_Apell: req.params.Pri_Apell,
                Seg_Apell: req.params.Seg_Apell,
                Cel: req.params.Cel,
                Email: req.params.Email,
                Password: req.params.pa,
                createdAt: new Date(),
                updatedAt: new Date()
            })
            .then(usuarios => res.status(200).send(usuarios))
            .catch(error => res.status(400).send(error))
    },
    //Funcion de Listar
    list(_, res) {
        return usuarios.findAll({})
            .then(usuarios => res.status(200).send(usuarios))
            .catch(error => res.status(400).send(error))
    },
    //Funcion de Buscar
    find(req, res) {
        return usuarios.findAll({
            where: {
                Id_User: req.params.Id_User, 
                Password: req.params.pa
            }
        })
            .then(usuarios => res.status(200).send(usuarios))
            .catch(error => res.status(400).send(error))
    },
};