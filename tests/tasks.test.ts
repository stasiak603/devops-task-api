import { createTask } from "../src/tasks";

describe("Gerenciamento de tarefas", () => {
  it("deve criar uma nova tarefa", () => {
    const task = createTask("Estudar DevOps");

    expect(task.title).toBe("Estudar DevOps");
    expect(task.completed).toBe(false);
  });
});