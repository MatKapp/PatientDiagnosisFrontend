import { Component, OnInit } from '@angular/core';
import { ExaminationService } from 'src/app/service/examination.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-examination',
  templateUrl: './examination.component.html',
  styleUrls: ['./examination.component.css']
})
export class ExaminationComponent implements OnInit {

  constructor(
    private service: ExaminationService,
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
      atrialFibrillation: false,
      bodyWeakness: false,
      firstTia: false,
      gaitDisturb: false,
      highGlucose: false,
      infraction: null,
      initialDbp: null,
      speechDif: false,
      vertigo: false,
    };
  }

  onSubmit(form: NgForm) {
    if (form.value.id == null) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
    this.resetForm(form);
    this.service.refreshList();
  }

  insertRecord(form: NgForm) {
    this.service.postExamination(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully', 'EXAM register');
    });
  }

  updateRecord(form: NgForm) {
    this.service.putExamination(form.value).subscribe(res => {
      this.toastr.success('Updated successfully', 'EXAM updated');
    });
  }
}
