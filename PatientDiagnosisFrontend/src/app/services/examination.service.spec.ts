/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExaminationService } from './examination.service';

describe('ExaminationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExaminationService]
    });
  });

  it('should ...', inject([ExaminationService], (service: ExaminationService) => {
    expect(service).toBeTruthy();
  }));
});
