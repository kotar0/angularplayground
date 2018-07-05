import { TestBed, inject } from '@angular/core/testing';

import { GoodbyeService } from './goodbye.service';

describe('GoodbyeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoodbyeService]
    });
  });

  it('should be created', inject([GoodbyeService], (service: GoodbyeService) => {
    expect(service).toBeTruthy();
  }));
});
