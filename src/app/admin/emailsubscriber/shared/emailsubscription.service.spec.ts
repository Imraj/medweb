import { TestBed, inject } from '@angular/core/testing';

import { EmailsubscriptionService } from './emailsubscription.service';

describe('EmailsubscriptionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailsubscriptionService]
    });
  });

  it('should be created', inject([EmailsubscriptionService], (service: EmailsubscriptionService) => {
    expect(service).toBeTruthy();
  }));
});
