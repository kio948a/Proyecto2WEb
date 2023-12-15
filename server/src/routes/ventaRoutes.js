"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
const ventaController_1 = require("../controllers/ventaController");
class VentaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('probando ventas'));
        this.router.post('/create', auth_1.validarToken, ventaController_1.ventaController.create);
        this.router.put('/update/:id', auth_1.validarToken, ventaController_1.ventaController.update);
        this.router.delete('/delete/:id', auth_1.validarToken, ventaController_1.ventaController.delete);
        this.router.get('/showAll/', auth_1.validarToken, ventaController_1.ventaController.list);
        this.router.get('/listOne/:id', auth_1.validarToken, ventaController_1.ventaController.listOne);
        this.router.get('/ventasProducto/:id', auth_1.validarToken, ventaController_1.ventaController.ventasProducto);
        this.router.get('/totalVentaProducto/:id', auth_1.validarToken, ventaController_1.ventaController.totalVentaProducto);
        this.router.get('/gananciaVentaProducto/:id', auth_1.validarToken, ventaController_1.ventaController.gananciaVentaProducto);
        this.router.get('/filtraYear/:year', auth_1.validarToken, ventaController_1.ventaController.filtraYear);
        this.router.get('/filtraMonthYear/:year/:mes', auth_1.validarToken, ventaController_1.ventaController.filtraMonthYear);
        this.router.get('/listCarritoUsuario/:id', auth_1.validarToken, ventaController_1.ventaController.listVentaUsuario);
        this.router.post('/filtraMonto/', auth_1.validarToken, ventaController_1.ventaController.filtraMonto);
    }
}
const ventaRoutes = new VentaRoutes();
exports.default = ventaRoutes.router;
