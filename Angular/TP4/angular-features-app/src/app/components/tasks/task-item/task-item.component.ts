export class TaskItemComponent {
  task: { description: string; completed: boolean };

  constructor() {
    this.task = { description: '', completed: false };
  }

  toggleStatus() {
    this.task.completed = !this.task.completed;
  }
}