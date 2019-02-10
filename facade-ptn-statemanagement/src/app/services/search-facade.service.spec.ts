import { TestBed } from '@angular/core/testing';

import { SearchFacadeService } from './search-facade.service';

describe('SearchFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchFacadeService = TestBed.get(SearchFacadeService);
    expect(service).toBeTruthy();
  });
});
