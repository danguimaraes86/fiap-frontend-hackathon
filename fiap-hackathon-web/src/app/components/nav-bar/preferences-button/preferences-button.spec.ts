import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferencesButton } from './preferences-button';

describe('PreferencesButton', () => {
  let component: PreferencesButton;
  let fixture: ComponentFixture<PreferencesButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreferencesButton]
    }).compileComponents();

    fixture = TestBed.createComponent(PreferencesButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
