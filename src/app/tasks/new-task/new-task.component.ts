import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../../models/user.model';
import { dummyTasks } from '../../../dummy-tasks';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() closeModal = new EventEmitter();
  @Input() user?: User;

  onCloseModal() {
    this.closeModal.emit();
  }

  onSubmit(data: NgForm) {
    const newTask = data.value;
    console.log(this.user);
    newTask.userId = this.user?.id;
    newTask.id = dummyTasks.length + 1;

    dummyTasks.unshift(newTask);
    this.onCloseModal();
  }
}
