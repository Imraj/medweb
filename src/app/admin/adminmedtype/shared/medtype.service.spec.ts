import { TestBed, inject } from '@angular/core/testing';

import { MedtypeService } from './medtype.service';

describe('MedtypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedtypeService]
    });
  });

  it('should be created', inject([MedtypeService], (service: MedtypeService) => {
    expect(service).toBeTruthy();
  }));
});
