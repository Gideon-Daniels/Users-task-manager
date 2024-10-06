import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';
import { dummyTasks } from '../dummy-tasks';
import { User } from '../models/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, TasksComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  userTasks: any;
  selectedUser: any;

  onUserTasks(user: User) {
    this.userTasks = dummyTasks.filter((task) => task.userId === user.id);
    this.selectedUser = user;
  }
}
