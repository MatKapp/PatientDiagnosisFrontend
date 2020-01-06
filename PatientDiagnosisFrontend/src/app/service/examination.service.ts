import { Injectable } from '@angular/core';
import { Examination } from '../model/examination.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExaminationService {

  formdata: Examination;
  readonly rootURL ="http://localhost:8000/examinations/"

  constructor(private http: HttpClient) { }

  postExamination(formData: Examination) {
    return this.http.post(this.rootURL, formData);
   }
}


