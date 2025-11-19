export class DataService {
    private articles = [];
    private tasks = [];

    getArticles() {
        return this.articles;
    }

    addArticle(article) {
        this.articles.push(article);
    }

    getTasks() {
        return this.tasks;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    updateTask(index, updatedTask) {
        this.tasks[index] = updatedTask;
    }

    toggleTaskStatus(index) {
        this.tasks[index].status = !this.tasks[index].status;
    }

    isTaskListEmpty() {
        return this.tasks.length === 0;
    }
}