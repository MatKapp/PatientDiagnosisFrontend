import { PatientDiagnosisFrontendPage } from './app.po';

describe('patient-diagnosis-frontend App', function() {
  let page: PatientDiagnosisFrontendPage;

  beforeEach(() => {
    page = new PatientDiagnosisFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
