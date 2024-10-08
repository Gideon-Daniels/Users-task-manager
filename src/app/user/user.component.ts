import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectedUser() {
    this.select.emit(this.user.id);
  }
}
