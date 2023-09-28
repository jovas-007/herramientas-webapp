import { TestBed } from '@angular/core/testing';

import { ErrorspService } from './errorsp.service';

describe('ErrorspService', () => {
  let service: ErrorspService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorspService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
