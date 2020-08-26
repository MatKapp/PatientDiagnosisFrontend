import { Injectable } from '@angular/core';
import { PatientService } from './patient.service';
import { Patient } from '../model/patient.model';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PatientsResolverService implements Resolve<Patient[]>{

  constructor(private patientsService: PatientService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Patient[] | import("rxjs").Observable<Patient[]> | Promise<Patient[]> {
    return this.patientsService.getPatients();
  }
}
