import { TestBed } from '@angular/core/testing';

import { ExaminationsResolverService } from './examinations-resolver.service';

describe('ExaminationsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExaminationsResolverService = TestBed.get(ExaminationsResolverService);
    expect(service).toBeTruthy();
  });
});
