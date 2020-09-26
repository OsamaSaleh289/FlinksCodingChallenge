import { AngularApplicationPage } from './app.po';

describe('angular-application App', () => {
  let page: AngularApplicationPage;

  beforeEach(() => {
    page = new AngularApplicationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
