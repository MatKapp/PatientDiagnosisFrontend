import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExaminationListComponent } from 'src/app/examinations/examination-list/examination-list.component';
import { MenuComponent } from 'src/app/menu/menu.component';

const routes: Routes = [
    {
        path: 'examinations',
        component: ExaminationListComponent
    },
    {
        path: 'menu',
        component: MenuComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
