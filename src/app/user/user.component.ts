import { Component, EventEmitter, Output } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
import { NgOptimizedImage } from '@angular/common';
import { TasksComponent } from '../tasks/tasks.component';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgOptimizedImage, TasksComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Output() selectedUser = new EventEmitter();
  users: User[] = DUMMY_USERS;

  onSelectedUser(user: User) {
    this.selectedUser.emit(user);
  }
}
