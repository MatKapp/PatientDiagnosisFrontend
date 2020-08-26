import { Component, OnDestroy, OnInit } from '@angular/core';
import { PatientService } from 'src/app/service/patient.service';
import { ExaminationService } from 'src/app/service/examination.service';
import { Patient } from 'src/app/model/patient.model';
import { Examination } from 'src/app/model/examination.model';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
declare var jquery: any;

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  public patients: Patient[];
  public showTable: boolean;
  editPatientExamination = false;
  editPatient = false;
  selectedPatientId = null;
  selectedPatientExamination: Examination = null;

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
    if (confirm('Are you sure to delete this record?')){
      this.patientService.deletePatient(id).subscribe(res => {
        this.refreshList();
        this.toastr.warning('Deleted successfully', 'PATIENT deleted');
      });
    }
  }

  toogleEditPatientExaminations() {
    this.editPatientExamination = this.editPatientExamination ? false : true;
  }

  toogleEditPatient() {
    this.editPatient = this.editPatient ? false : true;
  }

  refreshList() {
    this.patientService.getPatients().subscribe(data => this.patients = data as Patient[]);
  }

  public showPatientExaminations(patient) {
    this.selectedPatientId = patient.id;
    this.selectedPatientExamination = this.examinationService.getByPatient(patient.id);
    this.toogleEditPatientExaminations();
  }

  public showPatient(patient) {
    if (patient) {
      this.selectedPatientId = patient.id;
    }
    else {
      this.selectedPatientId = undefined;
    }
    this.toogleEditPatient();
  }

  public onPatientAdded(patient) {
    this.refreshList();
  }

  public onPatientUpdated(patient) {
    console.log(patient);
    const indexToUpdate = this.patients.findIndex(item => item.id === patient.id);
    this.patients[indexToUpdate] = patient;
  }
}
