import { FirebrushPage } from './app.po';

describe('firebrush App', () => {
  let page: FirebrushPage;

  beforeEach(() => {
    page = new FirebrushPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
