import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../../models/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  title = '';
  summary = '';
  dueDate = '';
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<Task>();
  @Input() userId!: string;

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      id: new Date().getMilliseconds().toString(),
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate,
      userId: this.userId,
    });

    this.onCancel();
  }
}
