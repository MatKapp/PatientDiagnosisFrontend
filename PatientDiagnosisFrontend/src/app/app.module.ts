import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ExaminationsComponent } from './examinations/examinations.component';
import { ExaminationComponent } from './examinations/examination/examination.component';
import { ExaminationListComponent } from './examinations/examination-list/examination-list.component';
import { ExaminationService } from './service/examination.service';

@NgModule({
  declarations: [
    AppComponent,
    ExaminationsComponent,
    ExaminationComponent,
    ExaminationListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ExaminationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
