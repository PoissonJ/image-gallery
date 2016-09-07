describe('Home page', () => {
  beforeAll(done => {
    browser.get('/')
      .then(done);
  });

  it('should have a kitten image', () => {
    browser.sleep(1000);
    let ng2Img = element(by.css('img'));
    expect(ng2Img.isDisplayed()).toBeTruthy();
  });

  it('should have a title above the kitten image that is hidden', () => {
    browser.sleep(1000);
    let ng2Title = element(by.className('topBar'));
    expect(ng2Title.isDisplayed()).toBeFalsy();
  });
});
