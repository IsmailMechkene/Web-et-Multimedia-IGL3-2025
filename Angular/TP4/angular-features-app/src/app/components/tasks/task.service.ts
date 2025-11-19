export class TaskService {
  private tasks: { description: string; status: boolean; priority: string }[] = [];

  getTasks() {
    return this.tasks;
  }

  addTask(description: string, priority: string) {
    this.tasks.push({ description, status: false, priority });
  }

  toggleTaskStatus(index: number) {
    if (this.tasks[index]) {
      this.tasks[index].status = !this.tasks[index].status;
    }
  }

  updateTask(index: number, description: string, priority: string) {
    if (this.tasks[index]) {
      this.tasks[index].description = description;
      this.tasks[index].priority = priority;
    }
  }

  deleteTask(index: number) {
    if (this.tasks[index]) {
      this.tasks.splice(index, 1);
    }
  }

  isEmpty() {
    return this.tasks.length === 0;
  }
}