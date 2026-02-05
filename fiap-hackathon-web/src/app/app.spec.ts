import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { TaskService } from './services/task.service';

describe('App', () => {
  let taskService: any;

  beforeEach(async () => {
    taskService = {
      getAllTask: vi.fn(),
      tasks: vi.fn().mockReturnValue([])
    };

    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideRouter([]),
        { provide: TaskService, useValue: taskService },
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
