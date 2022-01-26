import { TestBed } from '@angular/core/testing';

import { BiodataGuard } from './biodata.guard';

describe('BiodataGuard', () => {
  let guard: BiodataGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BiodataGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
