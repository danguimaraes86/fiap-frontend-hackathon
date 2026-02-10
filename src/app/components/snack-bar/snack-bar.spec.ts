import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { SnackBar } from './snack-bar';

describe('SnackBar', () => {
  let component: SnackBar;
  let fixture: ComponentFixture<SnackBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnackBar],
      providers: [
        { provide: MatSnackBarRef, useValue: {} },
        { provide: MAT_SNACK_BAR_DATA, useValue: {} }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SnackBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
