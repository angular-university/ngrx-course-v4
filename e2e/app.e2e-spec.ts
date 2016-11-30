import { NgrxCoursePage } from './app.po';

describe('ngrx-course App', function() {
  let page: NgrxCoursePage;

  beforeEach(() => {
    page = new NgrxCoursePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
