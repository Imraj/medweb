import { TestBed, inject } from '@angular/core/testing';

import { MedinfoService } from './medinfo.service';

describe('MedinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedinfoService]
    });
  });

  it('should be created', inject([MedinfoService], (service: MedinfoService) => {
    expect(service).toBeTruthy();
  }));
});
