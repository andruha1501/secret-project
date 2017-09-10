import { PartyMakerPage } from './app.po';

describe('party-maker App', () => {
  let page: PartyMakerPage;

  beforeEach(() => {
    page = new PartyMakerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
