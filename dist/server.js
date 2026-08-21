"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tasks_1 = require("./tasks");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.json({
        message: "Task API funcionando com sucesso!"
    });
});
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK"
    });
});
app.get("/tasks", (req, res) => {
    res.status(200).json((0, tasks_1.getTasks)());
});
app.post("/tasks", (req, res) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({
            error: "O título da tarefa é obrigatório."
        });
    }
    const task = (0, tasks_1.createTask)(title);
    return res.status(201).json(task);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor executando na porta ${PORT}`);
});
exports.default = app;
