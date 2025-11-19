export class TaskEditComponent {
  task: { description: string; status: boolean; priority: string };

  constructor() {
    this.task = { description: '', status: false, priority: 'normal' };
  }

  saveTask() {
    // Logic to save the task
  }

  cancelEdit() {
    // Logic to cancel editing
  }
}