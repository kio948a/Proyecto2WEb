"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carritoController_1 = require("../controllers/carritoController");
const auth_1 = require("../middleware/auth");
class CarritoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('probando carritos'));
        this.router.post('/create', auth_1.validarToken, carritoController_1.carritoController.create);
        this.router.put('/update/:id', auth_1.validarToken, carritoController_1.carritoController.update);
        this.router.delete('/delete/:id', auth_1.validarToken, carritoController_1.carritoController.delete);
        this.router.get('/showAll/', auth_1.validarToken, carritoController_1.carritoController.list);
        this.router.get('/listOne/:id', auth_1.validarToken, carritoController_1.carritoController.listOne);
        this.router.get('/listCarritoUsuario/:id', auth_1.validarToken, carritoController_1.carritoController.listCarritoUsuario);
        this.router.get('/totalCarrito/:id', auth_1.validarToken, carritoController_1.carritoController.totalCarrito);
    }
}
const carritoRoutes = new CarritoRoutes();
exports.default = carritoRoutes.router;
