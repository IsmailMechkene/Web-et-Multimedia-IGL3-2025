import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConditionalDisplayComponent } from './components/conditional-display/conditional-display.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { DynamicClassComponent } from './components/dynamic-class/dynamic-class.component';
import { DynamicStyleComponent } from './components/dynamic-style/dynamic-style.component';
import { TaskListComponent } from './components/tasks/task-list/task-list.component';
import { TaskItemComponent } from './components/tasks/task-item/task-item.component';
import { TaskEditComponent } from './components/tasks/task-edit/task-edit.component';
import { TaskService } from './components/tasks/task.service';

@NgModule({
  declarations: [
    AppComponent,
    ConditionalDisplayComponent,
    ArticlesListComponent,
    DynamicClassComponent,
    DynamicStyleComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }