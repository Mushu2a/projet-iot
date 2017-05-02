import { AppIotPage } from './app.po';

describe('app-iot App', function() {
  let page: AppIotPage;

  beforeEach(() => {
    page = new AppIotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
