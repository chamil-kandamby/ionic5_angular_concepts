import { TestBed } from '@angular/core/testing';

import { SystemAccessGuard } from './system-access.guard';

describe('SystemAccessGuard', () => {
  let guard: SystemAccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SystemAccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
