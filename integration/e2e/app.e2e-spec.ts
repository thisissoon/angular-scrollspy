import { browser, element, by } from 'protractor';

describe('ScrollSpy Lib E2E Tests', function () {

  beforeEach(() => browser.get(''));

  afterEach(() => {
    browser.manage().logs().get('browser').then((browserLog: any[]) => {
      expect(browserLog).toEqual([]);
    });
  });

  it('should exist', () => {
    expect(element(by.css('[snScrollSpy]')).isPresent()).toBeTruthy();
  });

});
