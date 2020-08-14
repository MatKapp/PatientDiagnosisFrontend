import { Injectable } from '@angular/core';
import { Examination } from '../model/examination.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExaminationService {
  formdata: Examination;
  list: Examination[];
  readonly rootURL = 'https://localhost:44393/api/examinations/'

  constructor(private http: HttpClient) { }

  getByPatient(id: any): any {
    return this.http.get(this.rootURL + 'getByPatient/' + id + '/')
  }

  postExamination(formData: Examination) {
    return this.http.post(this.rootURL, formData);
   }

  putExamination(formData: Examination) {
  return this.http.put(this.rootURL + formData.id + '/', formData);
  }

  deleteExamination(id: number) {
    return this.http.delete(this.rootURL + id + '/');
    }

  getPatients() {
    return this.http.get(this.rootURL) as Observable<Examination[]>;
  }

  refreshList() {
    this.http.get(this.rootURL)
      .toPromise().then(res => this.list = res as Examination[]);
  }
}


