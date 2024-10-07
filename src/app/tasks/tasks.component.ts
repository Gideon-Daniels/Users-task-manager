import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { Task } from '../../models/task.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  showModal = false;
  @Input() user?: User;
  @Input() tasks!: Task[];

  onNewTask() {
    this.showModal = !this.showModal;
  }
}
