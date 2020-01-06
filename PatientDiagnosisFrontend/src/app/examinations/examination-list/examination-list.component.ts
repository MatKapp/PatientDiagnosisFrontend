import { Component, OnInit } from '@angular/core';
import { ExaminationService } from 'src/app/service/examination.service';
import { Examination } from 'src/app/model/examination.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-examination-list',
  templateUrl: './examination-list.component.html',
  styleUrls: ['./examination-list.component.css']
})
export class ExaminationListComponent implements OnInit {

  constructor(
    private service: ExaminationService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(exam: Examination) {
    this.service.formdata = Object.assign({}, exam);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')){
      this.service.deleteExamination(id).subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Deleted successfully', 'EXAM deleted');
      });
    }
  }
}
