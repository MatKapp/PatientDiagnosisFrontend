import { Injectable } from '@angular/core';
import { Examination } from '../model/examination.model';

@Injectable({
  providedIn: 'root'
})
export class ExaminationService {

  formdata: Examination;

  constructor() { }
}
