import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PatientService } from 'src/app/service/patient.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  @Input() patientId;
  @Output() backClick: EventEmitter<any> = new EventEmitter();
  @Output() patientUpdated: EventEmitter<any> = new EventEmitter();
  @Output() patientAdded: EventEmitter<any> = new EventEmitter();

  constructor(
    private service: PatientService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.formdata = {
      id: null,
      surname: '',
      age: 0,
      admissionDate: null
    };

    if (this.patientId != undefined) {
      this.service.getPatient(this.patientId).subscribe(patient => this.service.formdata = patient);
    }

    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }

    this.service.formdata = {
      id: null,
      surname: '',
      age: 0,
      admissionDate: null
    };
  }

  onSubmit(form: NgForm) {
    if (form.value.id == null) {
      delete form.value.id;
      this.insertRecord(form);
      this.resetForm(form);
    } else {
      this.updateRecord(form);
    }
    this.backClick.emit(null);
  }

  insertRecord(form: NgForm) {
    this.patientAdded.emit(this.service.postPatient(form.value));
  }

  updateRecord(form: NgForm) {
    this.patientUpdated.emit(form.value);

    this.service.putPatient(form.value).subscribe(res => {
      this.toastr.success('Updated successfully', 'PATIENT updated');
    });
  }

  backClicked(){
    this.backClick.emit(null);
  }
}
