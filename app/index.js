"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const site_1 = __importDefault(require("./routers/site"));
const app = (0, express_1.default)();
app.set("view engine", "ejs");
app.set("views", __dirname + '/../views');
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.static(__dirname + '/../public'));
app.use('/', site_1.default);
app.listen(3000, () => {
    console.log("aplicação rodando na porta 3000");
});
