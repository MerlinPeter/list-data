import { ListDataPage } from './app.po';

describe('list-data App', function() {
  let page: ListDataPage;

  beforeEach(() => {
    page = new ListDataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
