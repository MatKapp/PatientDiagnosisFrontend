import { Injectable } from '@angular/core';
import { Patient } from '../model/patient.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  formdata: Patient;
  list: Patient[];
  readonly rootURL = 'https://localhost:44393/api/patients/'

  constructor(private http: HttpClient) { }

  postPatient(formData: Patient) {
    return this.http.post(this.rootURL, formData);
   }

  putPatient(formData: Patient) {
  return this.http.put(this.rootURL + formData.id + '/', formData);
  }

  deletePatient(id: number) {
    return this.http.delete(this.rootURL + id + '/');
    }

  refreshList() {
    this.http.get(this.rootURL)
      .toPromise().then(res => this.list = res as Patient[]);
  }
}
