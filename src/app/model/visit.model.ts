export class Visit {
  admissionDate: Date;
  dischargeDate: Date;
  examinationId: Number;
  isFinished: boolean;

  constructor(examinationId: number) {
    this.admissionDate = new Date(Date.now());
    this.isFinished = false;
    this.examinationId = examinationId;
  }
}
