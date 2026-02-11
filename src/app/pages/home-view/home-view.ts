import { Component } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-home-view',
  imports: [
    MatCard,
    MatCardContent,
    MatIcon,
  ],
  templateUrl: './home-view.html',
  styleUrl: './home-view.scss',
})
export class HomeView {
}
