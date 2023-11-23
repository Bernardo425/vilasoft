import { Application } from "express";
import morgan from 'morgan';
import express from 'express';

import site from './routers/site';

const app: Application = express();

app.set("view engine", "ejs");
app.set("views", __dirname + '/../views');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/../public'));
app.use('/',site);

app.listen(3000, ()=>{
    console.log("aplicação rodando na porta 3000");
});