import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFocusMode } from './dashboard-focus-mode';

describe('DashboardFocusMode', () => {
  let component: DashboardFocusMode;
  let fixture: ComponentFixture<DashboardFocusMode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardFocusMode]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardFocusMode);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
