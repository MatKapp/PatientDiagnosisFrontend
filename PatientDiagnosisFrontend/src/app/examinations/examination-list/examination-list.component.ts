import { Component, OnInit } from '@angular/core';
import { ExaminationService } from 'src/app/service/examination.service';
import { Examination } from 'src/app/model/examination.model';

@Component({
  selector: 'app-examination-list',
  templateUrl: './examination-list.component.html',
  styleUrls: ['./examination-list.component.css']
})
export class ExaminationListComponent implements OnInit {

  constructor(private service: ExaminationService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(exam: Examination) {
    this.service.formdata = Object.assign({}, exam);
  }
}
