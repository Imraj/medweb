import { TestBed, inject } from '@angular/core/testing';

import { InsulinService } from './insulin.service';

describe('InsulinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InsulinService]
    });
  });

  it('should be created', inject([InsulinService], (service: InsulinService) => {
    expect(service).toBeTruthy();
  }));
});
