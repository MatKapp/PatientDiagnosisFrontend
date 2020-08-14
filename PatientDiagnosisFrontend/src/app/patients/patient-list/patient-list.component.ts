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
  editPatientExamination = false;
  selectedPatientId = null;
  selectedPatientExamination: Examination = null;
  // selectedPatientExamination = {
  //   id: null,
  //   patientId: 20,
  //   atrialFibrillation: true,
  //   bodyWeakness: true,
  //   firstTia: true,
  //   gaitDisturb: true,
  //   highGlucose: true,
  //   infraction: 10,
  //   initialDbp: 10,
  //   speechDif: false,
  //   vertigo: false,
  // };

  constructor(
    private patientService: PatientService,
    private examinationService: ExaminationService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => this.patients = data.patients as Patient[])
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
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

  toogleEditPatients() {
    this.editPatientExamination = this.editPatientExamination ? false : true;
  }

  refreshList() {
    this.patientService.getPatients().subscribe(data => this.patients = data as Patient[]);
  }

  public showPatientExaminations(patient) {
    this.selectedPatientId = patient.id;
    this.selectedPatientExamination = this.examinationService.getByPatient(patient.id);
    this.toogleEditPatients();
  }
}
