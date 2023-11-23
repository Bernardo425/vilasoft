"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.render('site/index');
});
router.get('/sobre', (req, res) => {
    res.render('site/sobre');
});
router.get('/contactos', (req, res) => {
    res.render('site/contactos');
});
router.get('/servicos', (req, res) => {
    res.render('site/servicos');
});
router.get('/recrutamento', (req, res) => {
    res.render('site/recrutamento');
});
exports.default = router;
