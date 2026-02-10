import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task } from '../../../models/task.models';
import { MenuButton } from './menu-button';

describe('MenuButton', () => {
  let component: MenuButton;
  let fixture: ComponentFixture<MenuButton>;

  const mockTask: Task = {
    id: '1',
    title: 'Test Task',
    description: 'Test Description',
    status: 'pending',
    dueDate: '2026-01-01',
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01',
    userId: '',
    completedAt: null
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuButton]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuButton);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('task', mockTask)
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
