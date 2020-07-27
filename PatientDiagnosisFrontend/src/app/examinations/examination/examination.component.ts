import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ExaminationService } from 'src/app/service/examination.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Patient } from 'src/app/model/patient.model';
import { Examination } from 'src/app/model/examination.model';
import { async } from '@angular/core/testing';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-examination',
  templateUrl: './examination.component.html',
  styleUrls: ['./examination.component.css']
})
export class ExaminationComponent implements OnInit {
  @Input() examination: Observable<Examination>;
  @Input() patientId;
  @Output() backClick: EventEmitter<any> = new EventEmitter();

  constructor(
    private service: ExaminationService,
    private toastr: ToastrService) {}


  ngOnInit() {
    this.service.formdata = {
      id: null,
      patientId: this.patientId,
      atrialFibrillation: false,
      bodyWeakness: false,
      firstTia: false,
      gaitDisturb: false,
      highGlucose: false,
      infraction: 0,
      initialDbp: 0,
      speechDif: false,
      vertigo: false,
      firstClassPrediction: 0,
      secondClassPrediction: 0
    };
    this.resetForm();
    // this.service.formdata = null;// this.examination;
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }

    console.log(this.examination);

    if (this.examination == null){
      this.service.formdata = {
        id: null,
        patientId: null,
        atrialFibrillation: false,
        bodyWeakness: false,
        firstTia: false,
        gaitDisturb: false,
        highGlucose: false,
        infraction: 0,
        initialDbp: 0,
        speechDif: false,
        vertigo: false,
        firstClassPrediction: 0,
        secondClassPrediction: 0
      };
    } else {
      this.examination.subscribe((res) => this.service.formdata = res);
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.id == null) {
      delete form.value.id;
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
    // this.resetForm(form);
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

  backClicked(){
    this.backClick.emit(null);
  }
}
