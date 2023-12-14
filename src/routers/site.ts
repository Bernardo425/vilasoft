import { Router, Request, Response, NextFunction } from 'express';
import express from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response)=>{
    res.render('site/index');
});
router.get('/index2', (req: Request, res: Response)=>{
    res.render('site/index2');
});
router.get('/index3', (req: Request, res: Response)=>{
    res.render('site/index3');
});
router.get('/index2', (req: Request, res: Response)=>{
    res.render('site/index2');
});
router.get('/index4', (req: Request, res: Response)=>{
    res.render('site/index4');
});
router.get('/index5', (req: Request, res: Response)=>{
    res.render('site/index5');
});

router.get('/sobre', (req: Request, res: Response)=>{
    res.render('site/sobre');
});

router.get('/contactos', (req: Request, res: Response)=>{
    res.render('site/contactos');
});
router.get('/contactos2', (req: Request, res: Response)=>{
    res.render('site/contactos2');
});
router.post('/enviar-mesagem', (req: Request, res: Response)=>{
    res.render('site/enviar-mensagem');
});

router.get('/servicos', (req: Request, res: Response)=>{
    res.render('site/servicos');
});

router.get('/recrutamento', (req: Request, res: Response)=>{
    res.render('site/recrutamento');
});
router.get('/recrutamento2', (req: Request, res: Response)=>{
    res.render('site/recrutamento2');
});
router.get('/candidatura', (req: Request, res: Response)=>{
    res.render('site/candidatura');
});
router.post('/candidatar', (req: Request, res: Response)=>{
    res.render('site/registrar-candidatura');
});
router.get('/politica-de-privacidade', (req: Request, res: Response)=>{
    res.render('site/politica-privacidade');
});
router.get('/termos-de-uso', (req: Request, res: Response)=>{
    res.render('site/termos-de-uso');
});
router.get('/utilizacao-de-cookies', (req: Request, res: Response)=>{
    res.render('site/utilizacao-de-cookies');
});
router.use((req: Request, res: Response, next: NextFunction)=>{
    res.render('site/404');
});

export default router;