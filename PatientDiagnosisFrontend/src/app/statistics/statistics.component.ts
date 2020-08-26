import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../service/statistics.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  patients: null;
  examinations: null;
  predictionsFrequency: any[];
  tiaOccuredFrequency: any[];
  observationsRatioTiaOccured: any[];
  observationsRatioTiaNotOccured: any[];
  ageFrequency: any[];

  constructor(private statisticsService: StatisticsService) { }

  ngOnInit() {
    // this.patients = this.statisticsService.getPatients();
    // this.examinations = this.statisticsService.getExaminations();
    this.statisticsService.getPredictionsFrequency()
      .subscribe(res => {
        if (res instanceof Array) {
          this.predictionsFrequency = res.map(prediction => ({name: prediction.roandedPrediction.toString(), value: prediction.frequency.toString()}))
        }
      });

    this.statisticsService.getAgeFrequency()
      .subscribe(res => {
        if (res instanceof Array) {
          this.ageFrequency = res.map(age => ({name: `${age.downAgeBoundary}-${age.upAgeBoundary}`, value: age.frequency}));
        }
      });

    this.statisticsService.getTiaOccuredFrequency()
      .subscribe(res => {
        if (res instanceof Array) {
          this.tiaOccuredFrequency = res.map(tia => ({name: tia.occured, value: tia.frequency}));
        }
      });

    this.statisticsService.GetObservationsRatioByTiaOccured(true)
      .subscribe(res => {
        if (res instanceof Array) {
          this.observationsRatioTiaOccured = res.map(observation => ({name: observation.observationName, value: observation.ratio}));
        }
      });

    this.statisticsService.GetObservationsRatioByTiaOccured(false)
      .subscribe(res => {
        if (res instanceof Array) {
          this.observationsRatioTiaNotOccured = res.map(observation => ({name: observation.observationName, value: observation.ratio}));
        }
      });
  }

}
