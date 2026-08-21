"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTask = createTask;
exports.getTasks = getTasks;
const tasks = [];
function createTask(title) {
    const task = {
        id: tasks.length + 1,
        title,
        completed: false
    };
    tasks.push(task);
    return task;
}
function getTasks() {
    return tasks;
}
