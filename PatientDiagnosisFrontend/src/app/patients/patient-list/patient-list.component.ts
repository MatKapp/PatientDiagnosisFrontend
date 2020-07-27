import { Component, OnDestroy, OnInit } from '@angular/core';
import { PatientService } from 'src/app/service/patient.service';
import { ExaminationService } from 'src/app/service/examination.service';
import { Patient } from 'src/app/model/patient.model';
import { Examination } from 'src/app/model/examination.model';
import { ToastrService } from 'ngx-toastr';
declare var jquery: any;

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
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
    private toastr: ToastrService) { }

  ngOnInit() {
    this.patientService.refreshList();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
  }

  populateForm(patient: Patient) {
    this.patientService.formdata = Object.assign({}, patient);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')){
      this.patientService.deletePatient(id).subscribe(res => {
        this.patientService.refreshList();
        this.toastr.warning('Deleted successfully', 'PATIENT deleted');
      });
    }
  }

  toogleEditPatients() {
    this.editPatientExamination = this.editPatientExamination ? false : true;
  }

  public showPatientExaminations(patient) {
    this.selectedPatientId = patient.id;
    this.selectedPatientExamination = this.examinationService.getByPatient(patient.id);
    this.toogleEditPatients();
  }
}
