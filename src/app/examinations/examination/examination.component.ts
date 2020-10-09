import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ExaminationService } from 'src/app/service/examination.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Patient } from 'src/app/model/patient.model';
import { Examination } from 'src/app/model/examination.model';
import { Observable } from 'rxjs';
import * as signalR from '@aspnet/signalr';

@Component({
  selector: 'app-examination',
  templateUrl: './examination.component.html',
  styleUrls: ['./examination.component.css']
})
export class ExaminationComponent implements OnInit {
  @Input() examination: Observable<Examination>;
  @Input() patientId;
  @Output() backClick: EventEmitter<any> = new EventEmitter();
  @Output() examinationInserted: EventEmitter<any> = new EventEmitter();

  public hubConnection: signalR.HubConnection;

  constructor(
    private service: ExaminationService,
    private toastr: ToastrService) {}


  ngOnInit() {
    this.service.formdata = new Examination();
    // this.service.formdata = {
    //   id: null,
    //   patientId: this.patientId,
    //   atrialFibrillation: null,
    //   bodyWeakness: null,
    //   firstTia: null,
    //   gaitDisturb: null,
    //   highGlucose: null,
    //   infraction: null,
    //   initialDbp: null,
    //   speechDif: null,
    //   vertigo: null,
    //   firstClassPrediction: 0,
    //   secondClassPrediction: 0,
    //   tiaInTwoWeeksOccured: null
    // };

    this.resetForm();
    this.startSignalRConnection();
    this.addPredictionListener();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }

    if (this.examination == null) {
      this.service.formdata = new Examination();
    } else {
      this.examination.subscribe((res) => this.service.formdata = res);
    }
  }

  startSignalRConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
                                    .withUrl('https://localhost:44319/predictions')
                                    .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  addPredictionListener() {
    this.hubConnection.on('prediction', (prediction) => {
      const predictionObject = JSON.parse(prediction);
      this.service.formdata.firstClassPrediction = predictionObject.FirstClassPrediction.toFixed(2);
      this.service.formdata.secondClassPrediction = predictionObject.SecondClassPrediction.toFixed(2);
    });
  }

  onSubmit(form: NgForm) {
    if (form.value.id == null) {
      delete form.value.id;
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
    this.service.refreshList();
    this.backClick.emit(null);
  }

  insertRecord(form: NgForm) {
    form.value.patientId = this.patientId;
    this.examinationInserted.emit(
      this.service.postExamination(form.value));
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
