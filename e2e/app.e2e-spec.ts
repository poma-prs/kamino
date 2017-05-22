import { TeamKaminoPage } from './app.po';

describe('team-kamino App', function() {
  let page: TeamKaminoPage;

  beforeEach(() => {
    page = new TeamKaminoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
