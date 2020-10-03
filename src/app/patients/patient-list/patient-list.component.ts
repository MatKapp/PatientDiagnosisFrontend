import { Component, OnDestroy, OnInit } from '@angular/core';
import { PatientService } from 'src/app/service/patient.service';
import { ExaminationService } from 'src/app/service/examination.service';
import { Patient } from 'src/app/model/patient.model';
import { Examination } from 'src/app/model/examination.model';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { Visit } from 'src/app/model/visit.model';
import { Observable } from 'rxjs';
declare var jquery: any;

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  public patients: Patient[];
  public patientVisits: Visit[];
  public showTable: boolean;
  editPatientExamination = false;
  state = 'patients';
  editPatient = false;
  selectedPatientId = null;
  selectedPatientExamination: Observable<Examination>;

  constructor(
    private patientService: PatientService,
    private examinationService: ExaminationService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => this.patients = data.patients as Patient[])
    this.showTable = false;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      deferRender: true,
      initComplete: (settings, json) => {
        this.showTable = true;
      }
    };
  }

  populateForm(patient: Patient) {
    this.patientService.formdata = Object.assign({}, patient);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.patientService.deletePatient(id).subscribe(res => {
        this.refreshList();
        this.toastr.warning('Deleted successfully', 'PATIENT deleted');
      });
    }
  }

  refreshList() {
    this.patientService.getPatients().subscribe(data => this.patients = data as Patient[]);
  }

  public showPatientVisits(patient) {
    if (patient != null) {
      this.selectedPatientId = patient.id;
    }
    this.examinationService.getVisitsByPatient(this.selectedPatientId).subscribe(data => this.patientVisits = data as Visit[]);
    this.state = 'visits';
  }

  examinationBackClicked() {
    this.state = 'visits';
  }

  public examinationInserted(examination) {
    examination.subscribe(res => {
      this.toastr.success('Inserted successfully', 'EXAM register');
      this.patientVisits.push(new Visit(res));
    });
  }

  public showExamination(examinationId) {
    this.selectedPatientExamination = this.examinationService.getExamination(examinationId);
    this.state = 'examination-edit';
  }

  public addNewVisit() {
    this.selectedPatientExamination = null;
    this.state = 'examination-edit';
  }

  public finishVisit(examinationId){
    const indexToUpdate = this.patientVisits.findIndex(item => item.examinationId === examinationId);
    this.patientVisits[indexToUpdate].dischargeDate = new Date(Date.now());
    this.patientVisits[indexToUpdate].isFinished = true;
    this.examinationService.finishVisit(examinationId).subscribe(data => console.log(data));
    console.log('finished');
  }

  public showPatient(patient) {
    if (patient) {
      this.selectedPatientId = patient.id;
    }
    else {
      this.selectedPatientId = undefined;
    }
    this.state = 'patient-edit';
  }

  public onPatientAdded(patientAddedObservable) {
    patientAddedObservable.subscribe(res => {
      this.patients.push(res);
      this.toastr.success('Inserted successfully', 'PATIENT register');
    });
  }

  public visitBackClicked() {
    this.state = 'patients';
    this.patientVisits = [];
  }

  public onPatientUpdated(patient) {
    const indexToUpdate = this.patients.findIndex(item => item.id === patient.id);
    this.patients[indexToUpdate] = patient;
  }
}
