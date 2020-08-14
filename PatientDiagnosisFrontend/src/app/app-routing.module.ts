import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExaminationListComponent } from 'src/app/examinations/examination-list/examination-list.component';
import { PatientListComponent } from 'src/app/patients/patient-list/patient-list.component';
import { StatisticsComponent } from 'src/app/statistics/statistics.component';
import { MenuComponent } from 'src/app/menu/menu.component';
import { ExaminationsResolverService } from './service/examinations-resolver.service';
import { PatientsResolverService } from './service/patients-resolver.service';

const routes: Routes = [
    {
        path: 'observations',
        component: ExaminationListComponent,
        resolve: { examinations: ExaminationsResolverService }
    },
    {
      path: 'patients',
      component: PatientListComponent,
      resolve: { patients: PatientsResolverService }
    },
    {
        path: 'menu',
        component: MenuComponent
    },
    {
        path: 'statistics',
        component: StatisticsComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
