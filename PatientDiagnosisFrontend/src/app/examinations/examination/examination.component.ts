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
      Id: null,
      AtrialFibrillation: null,
      BodyWeakness: null,
      FirstTia: null,
      GaitDisturb: null,
      HighGlucose: null,
      Infraction: null,
      InitialDbp: null,
      SpeechDif: null,
      Vertigo: null,
    };
  }

  onSubmit(form: NgForm) {
    this.insertRecord(form);
  }

  insertRecord(form: NgForm) {

  }
}
