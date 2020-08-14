import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExaminationService } from 'src/app/service/examination.service';
import { Examination } from 'src/app/model/examination.model';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
declare var jquery: any;

@Component({
  selector: 'app-examination-list',
  templateUrl: './examination-list.component.html',
  styleUrls: ['./examination-list.component.css']
})
export class ExaminationListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  public examinations: Examination[];

  constructor(
    private service: ExaminationService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => this.examinations = data.examinations as Examination[]);
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
  }

  populateForm(exam: Examination) {
    this.service.formdata = Object.assign({}, exam);
  }

  refreshList() {
    this.service.getPatients().subscribe(data => this.examinations = data as Examination[]);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')){
      this.service.deleteExamination(id).subscribe(res => {
        this.refreshList();
        this.toastr.warning('Deleted successfully', 'EXAM deleted');
      });
    }
  }
}
