import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/service/patient.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(
    private service: PatientService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }

    this.service.formdata = {
      id: null,
      surname: '',
      age: 0
    };
  }

  onSubmit(form: NgForm) {
    if (form.value.id == null) {
      delete form.value.id;
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
    this.resetForm(form);
    this.service.refreshList();
  }

  insertRecord(form: NgForm) {
    this.service.postPatient(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully', 'PATIENT register');
    });
  }

  updateRecord(form: NgForm) {
    this.service.putPatient(form.value).subscribe(res => {
      this.toastr.success('Updated successfully', 'PATIENT updated');
    });
  }
}
