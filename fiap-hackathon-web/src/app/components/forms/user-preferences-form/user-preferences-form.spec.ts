import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogRef } from '@angular/material/dialog';
import { UserPreferencesForm } from './user-preferences-form';

describe('UserPreferencesForm', () => {
  let component: UserPreferencesForm;
  let fixture: ComponentFixture<UserPreferencesForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPreferencesForm],
      providers: [
        { provide: MatDialogRef, useValue: {} },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UserPreferencesForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
