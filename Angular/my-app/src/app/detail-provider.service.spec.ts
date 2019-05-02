import { TestBed } from '@angular/core/testing';

import { DetailProviderService } from './detail-provider.service';

describe('DetailProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailProviderService = TestBed.get(DetailProviderService);
    expect(service).toBeTruthy();
  });
});
