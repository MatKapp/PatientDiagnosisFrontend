export class Examination {
  id: number;
  patientId: number;
  atrialFibrillation: boolean;
  bodyWeakness: boolean;
  firstTia: boolean;
  gaitDisturb: boolean;
  highGlucose: boolean;
  infraction: number;
  initialDbp: number;
  speechDif: boolean;
  vertigo: boolean;
  firstClassPrediction: number;
  secondClassPrediction: number;
  tiaInTwoWeeksOccured: boolean;

  pmedhisHyp: boolean;
  pmedhisCad: boolean;
  pmedhisAf: boolean;
  pmedhisPvd: boolean;
  pmedhisDiab: boolean;
  pmedhisKps: boolean;
  pmedhisSmoker: boolean;
  pmedhisCs: boolean;
  pmedhisChf: boolean;
  pmedhisHchol: boolean;
  pmedhisDem: boolean;
  pmedhisVhd: boolean;
  medAsa: number;
  medDipy: number;
  medClop: number;
  medStat: number;
  medAnti: number;
  medCoum: number;
  medIbupLast7days: boolean;
  myInfarct: number;
  inittiaNumpast: number;

  // signs and symptoms
  temperature: number;
  hrRate: number;
  sbp: number;
  dbp: number;
  sa02: number;
  dursymptoms: number;
  mySensation: boolean;
  myWeakness: boolean;
  myGait: boolean;
  myVertigoSyncope: boolean;
  myLangSpeech: boolean;
  myAfib: boolean;
  uniWeaknessl: boolean;
  uniWeaknessR: boolean;
  aphasia: boolean;

  // diagnostic testing
  peterFlag: boolean;
  wbcvalue: number;
  hgbvalue: number;
  pltvalue: number;
  creatinevalue: number;
  glucosevalue: number;
  ckvalue: number;
  tntvalue: number;
  ecgtype: number;
  imgAbnL: boolean;
  imgAbnR: boolean;
}
