import express, { Request, Response } from "express";
import { createTask, getTasks } from "./tasks";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Task API funcionando com sucesso!"
  });
});

app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    status: "OK"
  });
});

app.get("/tasks", (req: Request, res: Response) => {
  res.status(200).json(getTasks());
});

app.post("/tasks", (req: Request, res: Response) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({
      error: "O título da tarefa é obrigatório."
    });
  }

  const task = createTask(title);

  return res.status(201).json(task);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor executando na porta ${PORT}`);
});

export default app;