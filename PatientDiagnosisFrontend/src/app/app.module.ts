import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppRoutingModule } from './app-routing.module';

import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { ExaminationsComponent } from './examinations/examinations.component';
import { ExaminationComponent } from './examinations/examination/examination.component';
import { ExaminationListComponent } from './examinations/examination-list/examination-list.component';
import { ExaminationService } from './service/examination.service';
import { PatientsComponent } from './patients/patients.component';
import { PatientComponent } from './patients/patient/patient.component';
import { PatientListComponent } from './patients/patient-list/patient-list.component';
import { PatientService } from './service/patient.service';
import { StatisticsService } from './service/statistics.service';
import { MenuComponent } from './menu/menu.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    ExaminationsComponent,
    ExaminationComponent,
    ExaminationListComponent,
    PatientsComponent,
    PatientComponent,
    PatientListComponent,
    MenuComponent,
    StatisticsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    DataTablesModule,
    NgxChartsModule
  ],
  providers: [ExaminationService, PatientService, StatisticsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
