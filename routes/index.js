/* Controllers */
const usuarioController = require('../controllers/usuarios');
const productoController = require('../controllers/productos');
const compraController = require('../controllers/compras');
const axios = require("axios");

module.exports = (app) => {
   app.get('/api', (req, res) => res.status(200).send({
      message: 'Example project did not give you access to the api web services',
   }));
   //Listar Usuarios
   app.get('/api/usuario/list', usuarioController.list);
   //Buscar Usuario
   app.get('/api/usuario/find/Id_User/:Id_User/Pa/:pa', usuarioController.find);

   //Crear Comprar
   app.post('/api/compras/create/Id_Compra/:Id_Compra/Id_Cliente/:Id_Cliente/Id_Producto/:Id_Producto/Cantidad/:Cantidad/Precio_Total/:Precio_Total', compraController.create);

   //Listar Compras
   app.get('/api/compras/list', compraController.list);

   //Buscar Compra
   app.get('/api/compras/find/Id_Compra/:Id_Compra', compraController.find);
 
   //Login
   app.get('/api/login/Id_User/:Id_User/Pa/:pa', async function (req, res) {
      if (req.params.Id_User) {
         axios({
            method: "GET",
            url: `http://localhost:8000/api/usuario/find/Id_User/` + req.params.Id_User + `/P/`+ req.params.p +``,
         }).then(response => response.data)
            .then(async data => {
               if(data.length > 0){
                  var respuesta = {
                     error: false,
                     codigo: 200,
                     mensaje: "Login Exitoso"
                  };
                  console.log(respuesta)
               }else{
                   respuesta = {
                     error: true,
                     codigo: 400,
                     mensaje: "Login Incorrecto"
                  };
                  console.log(respuesta)
               }
            })
      }
      else {
         var respuesta = {
            error: true,
            codigo: 501,
            mensaje: "Parámetros no validos"
         };
      }

      res.send(respuesta);
   })

   //Registrarse
   app.post('/api/usuario/create/Id_User/:Id_User/Nombre/:Nombre/Pri_Apell/:Pri_Apell/Seg_Apell/:Seg_Apell/Cel/:Cel/Email/:Email/P/:p', usuarioController.create);

   //Permisos Administrador
      //Crear Producto
   app.get('/api/cproducto/Id_User/:Id_User/Pa/:pa/Num_Lote/:Num_Lote/Nom_Prod/:Nom_Prod/Precio/:Precio/Cant_Disp/:Cant_Disp', async function (req, res) {
      if (req.params.Id_User) {
         axios({
            method: "GET",
            url: `http://localhost:8000/api/usuario/find/Id_User/` + req.params.Id_User + `/Pa/`+ req.params.pa +``,
         }).then(response => response.data)
            .then(async data => {
               console.log(data[0].Rol)
               if(data[0].Rol == 2){
                  axios({
                     method: "POST",
                     url: `http://localhost:8000/api/productos/create/Num_Lote/` + req.params.Num_Lote + `/Nom_Prod/` + req.params.Nom_Prod + `/Precio/` + req.params.Precio + `/Cant_Disp/` + req.params.Cant_Disp + ``,
                  }).then(response => response.data)
                  .then(async data => {
                     console.log(data)
                  })
               }else{
                   respuesta = {
                     error: true,
                     codigo: 400,
                     mensaje: "Acesso denegado a esta funcion, no tiene permiso"
                  };
                  console.log(respuesta)
               }
            })
      }
      else {
         var respuesta = {
            error: true,
            codigo: 501,
            mensaje: "Parámetros no validos"
         };
      }

      res.send(respuesta);
   })
   app.post('/api/productos/create/Num_Lote/:Num_Lote/Nom_Prod/:Nom_Prod/Precio/:Precio/Cant_Disp/:Cant_Disp', productoController.create);
      //Listar Productos
   app.get('/api/productos/list', productoController.list);

      //Buscar Productos
   app.get('/api/productos/find/Num_Lote/:Num_Lote', productoController.find);

      //Ver Historial de Compra de un Usuario
   app.get('/api/bcompras/Id_User/:Id_User/Pa/:pa/Id_Compra/:Id_Compra', async function (req, res) {
      if (req.params.Id_User) {
         axios({
            method: "GET",
            url: `http://localhost:8000/api/usuario/find/Id_User/` + req.params.Id_User + `/Pa/`+ req.params.pa +``,
         }).then(response => response.data)
            .then(async data => {
               console.log(data[0].Rol)
               if(data[0].Rol == 2){
                  axios({
                     method: "GET",
                     url: `http://localhost:8000/api/compras/find/Id_Compra/` + req.params.Id_Compra + ``,
                  }).then(response => response.data)
                  .then(async data => {
                     console.log(data)
                  })
               }else{
                   respuesta = {
                     error: true,
                     codigo: 400,
                     mensaje: "Acesso denegado a esta funcion, no tiene permiso"
                  };
                  console.log(respuesta)
               }
            })
      }
      else {
         var respuesta = {
            error: true,
            codigo: 501,
            mensaje: "Parámetros no validos"
         };
      }

      res.send(respuesta);
   })
};
