import { Router, Request, Response } from 'express';
import express from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response)=>{
    res.render('site/index');
});

router.get('/sobre', (req: Request, res: Response)=>{
    res.render('site/sobre');
});

router.get('/contactos', (req: Request, res: Response)=>{
    res.render('site/contactos');
});

router.get('/servicos', (req: Request, res: Response)=>{
    res.render('site/servicos');
});

router.get('/recrutamento', (req: Request, res: Response)=>{
    res.render('site/recrutamento');
});

export default router;