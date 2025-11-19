import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConditionalDisplayComponent } from './components/conditional-display/conditional-display.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { DynamicClassComponent } from './components/dynamic-class/dynamic-class.component';
import { DynamicStyleComponent } from './components/dynamic-style/dynamic-style.component';
import { TaskListComponent } from './components/tasks/task-list/task-list.component';
import { TaskEditComponent } from './components/tasks/task-edit/task-edit.component';

const routes: Routes = [
  { path: 'conditional-display', component: ConditionalDisplayComponent },
  { path: 'articles-list', component: ArticlesListComponent },
  { path: 'dynamic-class', component: DynamicClassComponent },
  { path: 'dynamic-style', component: DynamicStyleComponent },
  { path: 'tasks', component: TaskListComponent },
  { path: 'task-edit', component: TaskEditComponent },
  { path: '', redirectTo: '/conditional-display', pathMatch: 'full' },
  { path: '**', redirectTo: '/conditional-display' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }