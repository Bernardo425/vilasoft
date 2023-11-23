"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.render('index');
});
router.get('/sobre', (req, res) => {
    res.render('insobredex');
});
router.get('/contactos', (req, res) => {
    res.render('contactos');
});
router.get('/servicos', (req, res) => {
    res.render('servicos');
});
router.get('/recrutamento', (req, res) => {
    res.render('recrutamento');
});
exports.default = router;
