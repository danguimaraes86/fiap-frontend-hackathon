import { Component, computed, inject, signal } from '@angular/core';
import { MatDivider, MatList, MatListSubheaderCssMatStyler } from '@angular/material/list';
import { FilterPanel } from "../../components/filter-panel/filter-panel";
import { FloatingButton } from "../../components/floating-button/floating-button";
import { TaskDetail } from "../../components/task-detail/task-detail";
import { TaskService } from '../../services/task.service';
import { UserPreferencesService } from '../../services/user-preferences.service';

@Component({
  selector: 'app-tasks-view',
  imports: [
    MatList,
    MatDivider,
    MatListSubheaderCssMatStyler,
    TaskDetail,
    FloatingButton,
    FilterPanel
  ],
  templateUrl: './tasks-view.html',
  styleUrl: './tasks-view.scss',
})
export class TasksView {
  private _taskService = inject(TaskService);
  private _userPreferences = inject(UserPreferencesService)

  protected allTasks = this._taskService.allTasks
  protected completedTasks = this._taskService.completedTasks

  protected showPendingTasks = computed(() => {
    return this._userPreferences.userPreference().showPendingTasks
  })

  protected showCompletedTasks = computed(() => {
    return this._userPreferences.userPreference().showCompletedTasks
  })

  protected titleFilter = signal<string>('');
  protected statusFilter = signal<string>('');

  protected pendingAndProgressTasks = computed(() => {
    let tasks = this._taskService.pendingAndProgressTasks();

    if (!this.showPendingTasks()) {
      tasks = tasks.filter(task => task.status != 'pending')
    }

    const title = this.titleFilter().toLowerCase().trim();
    if (title) {
      tasks = tasks.filter(task =>
        task.title?.toLowerCase().includes(title)
      );
    }

    const status = this.statusFilter();
    if (status) {
      tasks = tasks.filter(task => task.status === status);
    }

    return tasks;
  });

  protected onTitleFilterChange(value: string) {
    this.titleFilter.set(value);
  }

  protected onStatusFilterChange(value: string) {
    this.statusFilter.set(value);
  }

}