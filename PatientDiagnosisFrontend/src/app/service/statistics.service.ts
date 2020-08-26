import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PatientService } from 'src/app/service/patient.service';
import { ExaminationService } from 'src/app/service/examination.service';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  readonly rootURL = 'https://0c9715e4e56f.ngrok.io/api/statistics/'

  constructor(private http: HttpClient,
    private examinationService: ExaminationService,
    private patientService: PatientService) { }

  getPatients() {
    this.patientService.refreshList();
    return this.patientService.list;
  }

  getExaminations() {
    this.examinationService.refreshList();
    return this.examinationService.list;
  }

  getPredictionsFrequency() {
    return this.http.get(this.rootURL + 'GetPredictionsFrequency');
  }

  getAgeFrequency() {
    return this.http.get(this.rootURL + 'GetAgeFrequency');
  }

  getTiaOccuredFrequency() {
    return this.http.get(this.rootURL + 'GetTiaOccuredFrequency');
  }

  GetObservationsRatioByTiaOccured(occured) {
    return this.http.get(this.rootURL + 'GetObservationsRatioByTiaOccured/' + occured);
  }
}
