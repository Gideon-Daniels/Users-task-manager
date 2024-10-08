import { Task } from '../../models/task.model';
import { dummyTasks } from '../../dummy-tasks';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks: Task[] = dummyTasks;

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(task: Task) {
    this.tasks.unshift(task);
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
