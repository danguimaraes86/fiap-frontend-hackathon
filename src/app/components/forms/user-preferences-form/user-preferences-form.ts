import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { THEMES } from '../../../models/user-preferences.models';
import { UserPreferencesService } from '../../../services/user-preferences.service';

interface UserPreferencesFormData {
  theme: FormControl<'light' | 'dark'>,
  focusMode: FormControl<boolean>,
  showCompletedTasks: FormControl<boolean>,
  showPendingTasks: FormControl<boolean>,
}

@Component({
  selector: 'app-preferences-form',
  imports: [
    ReactiveFormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButton,
    MatIcon,
    MatRadioGroup,
    MatRadioButton,
    MatDivider,
    MatSlideToggle,
  ],
  templateUrl: './user-preferences-form.html',
  styleUrl: './user-preferences-form.scss',
})
export class UserPreferencesForm {

  private _preferencesService = inject(UserPreferencesService)
  private _userPreferences = this._preferencesService.userPreference
  private _dialogRef = inject(MatDialogRef<UserPreferencesForm>);
  private readonly _formBuilder = inject(FormBuilder)

  protected preferencesForm: FormGroup<UserPreferencesFormData>

  protected themes = Object.values(THEMES)

  constructor() {
    this.preferencesForm = this._formBuilder.group<UserPreferencesFormData>({
      theme: this._formBuilder.control(this._userPreferences().theme,
        { nonNullable: true }),
      focusMode: this._formBuilder.control(this._userPreferences().focusMode,
        { nonNullable: true }),
      showCompletedTasks: this._formBuilder.control(this._userPreferences().showCompletedTasks,
        { nonNullable: true }),
      showPendingTasks: this._formBuilder.control(this._userPreferences().showPendingTasks,
        { nonNullable: true }),
    })
  }

  onSubmit(): void {
    this._preferencesService.updateUserPreference({
      id: this._userPreferences().id,
      userId: this._userPreferences().userId,
      ...this.preferencesForm.getRawValue()
    })
    this._dialogRef.close();
  }

}
