import { Injectable } from '@angular/core';
import { Examination } from '../model/examination.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExaminationService {

  formdata: Examination;
  list: Examination[];
  readonly rootURL ="http://localhost:8000/examinations/"

  constructor(private http: HttpClient) { }

  postExamination(formData: Examination) {
    return this.http.post(this.rootURL, formData);
   }

  putExamination(formData: Examination) {
  return this.http.put(this.rootURL + formData.id + '/', formData);
  }

  refreshList() {
    this.http.get(this.rootURL)
    .toPromise().then(res => this.list = res as Examination[]);
  }
}


