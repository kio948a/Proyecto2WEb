"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
const productoController_1 = require("../controllers/productoController");
class ProductoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('probando productos'));
        this.router.post('/create', auth_1.validarToken, productoController_1.productoController.create);
        this.router.put('/update/:id', auth_1.validarToken, productoController_1.productoController.update);
        this.router.delete('/delete/:id', auth_1.validarToken, productoController_1.productoController.delete);
        this.router.get('/showAll/', auth_1.validarToken, productoController_1.productoController.list);
        this.router.get('/listOne/:id', auth_1.validarToken, productoController_1.productoController.listOne);
        this.router.post('/listAnimal/:nombre', auth_1.validarToken, productoController_1.productoController.listAnimal);
        this.router.post('/filtraPrecio/', auth_1.validarToken, productoController_1.productoController.filtraPrecio);
        this.router.get('/getCantidad/:id', auth_1.validarToken, productoController_1.productoController.getCantidad);
        this.router.get('/getPrecio/:id', auth_1.validarToken, productoController_1.productoController.getPrecio);
    }
}
const productoRoutes = new ProductoRoutes();
exports.default = productoRoutes.router;
