export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const tasks: Task[] = [];

export function createTask(title: string): Task {
  const task: Task = {
    id: tasks.length + 1,
    title,
    completed: false
  };

  tasks.push(task);

  return task;
}

export function getTasks(): Task[] {
  return tasks;
}