import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationService } from '../../services/authentication.service';
import { TaskService } from '../../services/task.service';
import { DashboardView } from './dashboard-view';

describe('DashboardView', () => {
  let component: DashboardView;
  let fixture: ComponentFixture<DashboardView>;
  let taskService: any;
  let authService: any;

  beforeEach(async () => {
    authService = {
      user: vi.fn().mockReturnValue({ uid: 'uid' })
    }

    taskService = {
      getAllTask: vi.fn(),
      allTasks: vi.fn().mockReturnValue([]),
      completedTasks: vi.fn().mockReturnValue([]),
      inProgressTasks: vi.fn().mockReturnValue([]),
      pendingTasks: vi.fn().mockReturnValue([]),
    };

    await TestBed.configureTestingModule({
      imports: [DashboardView],
      providers: [
        { provide: TaskService, useValue: taskService },
        { provide: AuthenticationService, useValue: authService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
