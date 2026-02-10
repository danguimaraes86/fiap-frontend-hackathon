import { Component, output, signal } from '@angular/core';
import { MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle } from "@angular/material/expansion";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatIcon } from "@angular/material/icon";
import { MatOption, MatSelect } from "@angular/material/select";
import { TASK_STATUSES } from '../../models/task.models';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-filter-panel',
  imports: [
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatFormField,
    MatInput,
    MatLabel,
    MatSelect,
    MatOption,
    MatExpansionPanelActionRow,
    MatButton,
    MatIcon
  ],
  templateUrl: './filter-panel.html',
  styleUrl: './filter-panel.scss',
})
export class FilterPanel {

  protected title = signal<string>('');
  public titleFilter = output<string>()

  protected status = signal<string>('');
  public statusFilter = output<string>()

  protected statusList = Object.values(TASK_STATUSES)
    .filter(status => status.value != 'completed')

  protected onTitleFilterChange(value: string) {
    this.title.set(value);
    this.titleFilter.emit(value)
  }

  protected onStatusFilterChange(value: string) {
    this.status.set(value);
    this.statusFilter.emit(value)
  }

  protected clearFilters() {
    this.title.set('');
    this.status.set('');
    this.titleFilter.emit('');
    this.statusFilter.emit('');
  }

}
