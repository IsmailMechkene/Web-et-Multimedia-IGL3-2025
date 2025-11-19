# Angular Features App

This project is an Angular application that demonstrates various features of Angular, including conditional display, dynamic classes, dynamic styles, and a complete task management system.

## Features

- **Conditional Display**: Utilizes `*ngIf` to show or hide elements based on user interactions.
- **Articles List**: Displays a list of articles using `*ngFor`, allowing users to add new articles.
- **Dynamic Classes**: Applies dynamic CSS classes using `[ngClass]` based on article importance.
- **Dynamic Styles**: Uses `[ngStyle]` to change styles dynamically based on product stock levels.
- **Task Management**: A complete task management system that allows users to add, edit, and toggle tasks.

## Project Structure

```
angular-features-app
├── src
│   ├── app
│   │   ├── app.module.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   ├── app-routing.module.ts
│   │   ├── components
│   │   │   ├── conditional-display
│   │   │   │   ├── conditional-display.component.ts
│   │   │   │   ├── conditional-display.component.html
│   │   │   │   └── conditional-display.component.css
│   │   │   ├── articles-list
│   │   │   │   ├── articles-list.component.ts
│   │   │   │   ├── articles-list.component.html
│   │   │   │   └── articles-list.component.css
│   │   │   ├── dynamic-class
│   │   │   │   ├── dynamic-class.component.ts
│   │   │   │   ├── dynamic-class.component.html
│   │   │   │   └── dynamic-class.component.css
│   │   │   ├── dynamic-style
│   │   │   │   ├── dynamic-style.component.ts
│   │   │   │   ├── dynamic-style.component.html
│   │   │   │   └── dynamic-style.component.css
│   │   │   └── tasks
│   │   │       ├── task-list
│   │   │       │   ├── task-list.component.ts
│   │   │       │   ├── task-list.component.html
│   │   │       │   └── task-list.component.css
│   │   │       ├── task-item
│   │   │       │   ├── task-item.component.ts
│   │   │       │   ├── task-item.component.html
│   │   │       │   └── task-item.component.css
│   │   │       ├── task-edit
│   │   │       │   ├── task-edit.component.ts
│   │   │       │   ├── task-edit.component.html
│   │   │       │   └── task-edit.component.css
│   │   │       └── task.service.ts
│   │   ├── models
│   │   │   ├── article.model.ts
│   │   │   └── task.model.ts
│   │   └── services
│   │       └── data.service.ts
│   ├── assets
│   ├── environments
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   └── styles.css
├── angular.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tslint.json
└── README.md
```

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd angular-features-app
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Run the application:
   ```
   ng serve
   ```
5. Open your browser and navigate to `http://localhost:4200`.

## Contributing

Feel free to submit issues or pull requests for any improvements or features you would like to see in this project.