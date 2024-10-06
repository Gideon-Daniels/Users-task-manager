import { Component } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  users: { id: string; name: string; avatar: string }[] = DUMMY_USERS;
}
