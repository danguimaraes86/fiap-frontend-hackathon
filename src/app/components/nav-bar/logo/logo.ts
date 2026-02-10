import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { UserPreferencesService } from '../../../services/user-preferences.service';

@Component({
  selector: 'app-logo',
  imports: [RouterLink],
  templateUrl: './logo.html',
  styleUrl: './logo.scss',
})
export class Logo {
  readonly theme = inject(UserPreferencesService).theme
}
