import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../service/statistics.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  patients = null;
  examinations = null;
  predictionsFrequency = null;

  constructor(private statisticsService: StatisticsService) { }

  ngOnInit() {
    // this.patients = this.statisticsService.getPatients();
    // this.examinations = this.statisticsService.getExaminations();
    this.statisticsService.getPredictionsFrequency()
      .subscribe((res) => {
        if (res instanceof Array){
          this.predictionsFrequency = res.map(prediction => ({name: prediction.roandedPrediction.toString(), value: prediction.frequency.toString()}))
        }
      });
  }

}
