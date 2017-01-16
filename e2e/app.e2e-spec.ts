import { Angular2explorePage } from './app.po';

describe('angular2explore App', function() {
  let page: Angular2explorePage;

  beforeEach(() => {
    page = new Angular2explorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
