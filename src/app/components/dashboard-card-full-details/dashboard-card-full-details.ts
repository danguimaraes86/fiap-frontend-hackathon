import { Component, computed, inject } from '@angular/core';
import { MatBadge } from '@angular/material/badge';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatChip, MatChipAvatar } from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { TaskService } from '../../services/task.service';
import { UserPreferencesService } from '../../services/user-preferences.service';

@Component({
  selector: 'app-dashboard-card-full-details',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatCardActions,
    RouterLink,
    MatChip,
    MatChipAvatar,
    MatBadge,
    MatCardSubtitle,
    MatIcon,
    MatButton
  ],
  templateUrl: './dashboard-card-full-details.html',
  styleUrl: './dashboard-card-full-details.scss',
})
export class DashboardCardFullDetails {
  private _authService = inject(AuthenticationService)
  private _taskService = inject(TaskService)
  private _userPreferences = inject(UserPreferencesService)

  protected pendingTasks = this._taskService.pendingTasks
  protected inProgressTasks = this._taskService.inProgressTasks

  protected tasksCount = computed(() => {
    return this.taskStatuses().reduce((total, status) => total + status.count, 0);
  });

  protected taskStatuses = computed(() => {
    if (!this._userPreferences.userPreference().showPendingTasks) {
      return [this.inProgressTasks()]
    }
    return [this.inProgressTasks(), this.pendingTasks()]
  });

  protected userDisplayName = computed(() => {
    return this._authService.user()?.displayName || 'Usuário'
  })

  protected welcomeMessage = computed(() => {
    return this.tasksCount() > 0
      ? `Hoje você tem ${this.tasksCount()} tarefa${this.tasksCount() > 1 ? 's' : ''}.`
      : 'Seu dia está livre! Nenhuma tarefa para hoje.'
  })
}
