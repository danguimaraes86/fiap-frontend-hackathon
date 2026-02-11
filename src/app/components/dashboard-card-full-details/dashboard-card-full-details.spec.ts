import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCardFullDetails } from './dashboard-card-full-details';

describe('DashboardCardFullDetails', () => {
  let component: DashboardCardFullDetails;
  let fixture: ComponentFixture<DashboardCardFullDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCardFullDetails]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardCardFullDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
