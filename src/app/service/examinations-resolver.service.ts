import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Examination } from '../model/examination.model';
import { ExaminationService } from './examination.service';

@Injectable({
  providedIn: 'root'
})
export class ExaminationsResolverService implements Resolve<Examination[]> {

  constructor(private examinationsService: ExaminationService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Examination[] | import("rxjs").Observable<Examination[]> | Promise<Examination[]> {
    return this.examinationsService.getPatients();
  }
}
