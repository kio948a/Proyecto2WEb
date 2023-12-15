"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
const userController_1 = require("../controllers/userController");
class UserRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('probando usuarios'));
        this.router.post('/create', auth_1.validarToken, userController_1.userController.create);
        this.router.put('/update/:id', auth_1.validarToken, userController_1.userController.update);
        this.router.delete('/delete/:id', auth_1.validarToken, userController_1.userController.delete);
        this.router.get('/showAll/', auth_1.validarToken, userController_1.userController.list);
        this.router.get('/listOne/:id', auth_1.validarToken, userController_1.userController.listOne);
        this.router.get('/listUserRol/:id', auth_1.validarToken, userController_1.userController.listUserRol);
        this.router.get('/historial/:id', auth_1.validarToken, userController_1.userController.historial);
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
