import { Component, computed, inject, signal } from '@angular/core';
import { MatDivider, MatList, MatListSubheaderCssMatStyler } from '@angular/material/list';
import { MatSlideToggle, MatSlideToggleChange } from '@angular/material/slide-toggle';
import { FilterPanel } from "../../components/filter-panel/filter-panel";
import { FloatingButton } from "../../components/floating-button/floating-button";
import { TaskDetail } from "../../components/task-detail/task-detail";
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks-view',
  imports: [
    MatList,
    MatDivider,
    MatSlideToggle,
    MatListSubheaderCssMatStyler,
    TaskDetail,
    FloatingButton,
    FilterPanel
  ],
  templateUrl: './tasks-view.html',
  styleUrl: './tasks-view.scss',
})
export class TasksView {
  protected _taskService = inject(TaskService);
  protected allTasks = this._taskService.allTasks
  protected completedTasks = this._taskService.completedTasks

  protected titleFilter = signal<string>('');
  protected statusFilter = signal<string>('');

  protected pendingAndProgressTasks = computed(() => {
    let tasks = this._taskService.pendingAndProgressTasks();
    const title = this.titleFilter().toLowerCase().trim();
    const status = this.statusFilter();

    if (title) {
      tasks = tasks.filter(task =>
        task.title?.toLowerCase().includes(title)
      );
    }

    if (status) {
      tasks = tasks.filter(task => task.status === status);
    }

    return tasks;
  });

  protected visibilityCompletedTasks = signal<boolean>(false)

  protected handleShowCompletedTasks(event: MatSlideToggleChange) {
    this.visibilityCompletedTasks.set(event.checked)
  }

  protected onTitleFilterChange(value: string) {
    this.titleFilter.set(value);
  }

  protected onStatusFilterChange(value: string) {
    this.statusFilter.set(value);
  }

}