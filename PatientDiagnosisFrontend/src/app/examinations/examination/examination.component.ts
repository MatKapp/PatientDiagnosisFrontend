import { Component, OnInit } from '@angular/core';
import { ExaminationService } from 'src/app/service/examination.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-examination',
  templateUrl: './examination.component.html',
  styleUrls: ['./examination.component.css']
})
export class ExaminationComponent implements OnInit {

  constructor(private service: ExaminationService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }

    this.service.formdata = {
      id: null,
      atrialFibrillation: null,
      bodyWeakness: null,
      firstTia: null,
      gaitDisturb: null,
      highGlucose: null,
      infraction: null,
      initialDbp: null,
      speechDif: null,
      vertigo: null,
    };
  }

  onSubmit(form: NgForm) {
    this.insertRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postExamination(form.value).subscribe(res => {
      console.log(res);
    });
  }
}
