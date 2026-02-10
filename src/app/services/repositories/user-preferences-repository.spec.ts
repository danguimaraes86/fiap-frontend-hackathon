import { TestBed } from '@angular/core/testing';
import { UserPreferencesRepository } from './user-preferences-repository';

describe('PreferencesRepository', () => {
  let service: UserPreferencesRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPreferencesRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
