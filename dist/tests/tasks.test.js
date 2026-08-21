"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tasks_1 = require("../src/tasks");
describe("Gerenciamento de tarefas", () => {
    it("deve criar uma nova tarefa", () => {
        const task = (0, tasks_1.createTask)("Estudar DevOps");
        expect(task.title).toBe("Estudar DevOps");
        expect(task.completed).toBe(false);
    });
});
