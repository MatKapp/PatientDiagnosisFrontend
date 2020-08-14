import { TestBed } from '@angular/core/testing';

import { PatientsResolverService } from './patients-resolver.service';

describe('PatientsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatientsResolverService = TestBed.get(PatientsResolverService);
    expect(service).toBeTruthy();
  });
});
