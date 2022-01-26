import { TestBed } from '@angular/core/testing';

import { ListjobGuard } from './listjob.guard';

describe('ListjobGuard', () => {
  let guard: ListjobGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ListjobGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
