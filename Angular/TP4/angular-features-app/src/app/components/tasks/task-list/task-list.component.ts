export class TaskListComponent {
  tasks = [
    { description: 'Task 1', completed: false },
    { description: 'Task 2', completed: true },
    { description: 'Task 3', completed: false }
  ];

  toggleTaskStatus(task) {
    task.completed = !task.completed;
  }

  isTaskListEmpty() {
    return this.tasks.length === 0;
  }
}