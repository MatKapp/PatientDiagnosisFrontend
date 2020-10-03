import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Visit } from '../model/visit.model';

@Component({
  selector: 'visit-list',
  templateUrl: './visit-list.component.html',
  styleUrls: ['./visit-list.component.css']
})
export class VisitListComponent implements OnInit {

  constructor() { }
  @Input() visits: Observable<Visit[]>;
  @Input() patientId;
  @Output() backClick: EventEmitter<any> = new EventEmitter();
  @Output() examinationClick: EventEmitter<any> = new EventEmitter();
  @Output() addNewVisitClick: EventEmitter<any> = new EventEmitter();
  @Output() finishVisitClick: EventEmitter<any> = new EventEmitter();
  public showTable: boolean;
  dtOptions: DataTables.Settings = {};

  ngOnInit() {
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

  addNewVisit() {
    this.addNewVisitClick.emit();
  }

  finishVisitClicked(examinationId) {
    this.finishVisitClick.emit(examinationId);
  }

  backClicked() {
    this.backClick.emit(null);
  }

  examinationClicked(examinationId) {
    this.examinationClick.emit(examinationId);
  }
}
