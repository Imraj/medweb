import { TestBed, inject } from '@angular/core/testing';

import { RecallService } from './recall.service';

describe('RecallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecallService]
    });
  });

  it('should be created', inject([RecallService], (service: RecallService) => {
    expect(service).toBeTruthy();
  }));
});
