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
router.get('/index2', (req, res) => {
    res.render('site/index2');
});
router.get('/index3', (req, res) => {
    res.render('site/index3');
});
router.get('/index2', (req, res) => {
    res.render('site/index2');
});
router.get('/index4', (req, res) => {
    res.render('site/index4');
});
router.get('/index5', (req, res) => {
    res.render('site/index5');
});
router.get('/sobre', (req, res) => {
    res.render('site/sobre');
});
router.get('/contactos', (req, res) => {
    res.render('site/contactos');
});
router.get('/contactos2', (req, res) => {
    res.render('site/contactos2');
});
router.post('/enviar-mesagem', (req, res) => {
    res.render('site/enviar-mensagem');
});
router.get('/servicos', (req, res) => {
    res.render('site/servicos');
});
router.get('/recrutamento', (req, res) => {
    res.render('site/recrutamento');
});
router.get('/recrutamento2', (req, res) => {
    res.render('site/recrutamento2');
});
router.get('/candidatura', (req, res) => {
    res.render('site/candidatura');
});
router.post('/candidatar', (req, res) => {
    res.render('site/registrar-candidatura');
});
router.get('/politica-de-privacidade', (req, res) => {
    res.render('site/politica-privacidade');
});
router.get('/termos-de-uso', (req, res) => {
    res.render('site/termos-de-uso');
});
router.get('/utilizacao-de-cookies', (req, res) => {
    res.render('site/utilizacao-de-cookies');
});
router.use((req, res, next) => {
    res.render('site/404');
});
exports.default = router;
