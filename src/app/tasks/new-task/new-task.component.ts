import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.services';

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
  @Output() close = new EventEmitter<void>();
  @Input() userId!: string;
  private taskService = inject(TasksService);

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.taskService.addTask({
      id: new Date().getMilliseconds().toString(),
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate,
      userId: this.userId,
    });

    this.onClose();
  }
}
