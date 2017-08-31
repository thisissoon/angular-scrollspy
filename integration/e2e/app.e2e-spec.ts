import { browser, element, by } from 'protractor';

describe('ScrollSpy Lib E2E Tests', function () {

  const scrollToSection = (n: number) => {
    const script = `window.scrollTo(0, (window.innerHeight * ${n - 1}) + 80)`;
    browser.executeScript(script);
    browser.sleep(100);
  };

  beforeEach(() => browser.get(''));

  afterEach(() => {
    browser.manage().logs().get('browser').then((browserLog: any[]) => {
      expect(browserLog).toEqual([]);
    });
  });

  it('should exist', () => {
    expect(element(by.css('[snScrollSpy]')).isPresent()).toBeTruthy();
  });

  it('should add active class to sections', () => {
    expect(element(by.css('[href="#section1"].active')).isPresent()).toBeTruthy();
    expect(element(by.css('[href="#section2"].active')).isPresent()).toBeFalsy();
    expect(element(by.css('[href="#section3"].active')).isPresent()).toBeFalsy();
    expect(element(by.css('[href="#section4"].active')).isPresent()).toBeFalsy();

    scrollToSection(2);
    expect(element(by.css('[href="#section1"].active')).isPresent()).toBeFalsy();
    expect(element(by.css('[href="#section2"].active')).isPresent()).toBeTruthy();
    expect(element(by.css('[href="#section3"].active')).isPresent()).toBeFalsy();
    expect(element(by.css('[href="#section4"].active')).isPresent()).toBeFalsy();

    scrollToSection(3);
    expect(element(by.css('[href="#section1"].active')).isPresent()).toBeFalsy();
    expect(element(by.css('[href="#section2"].active')).isPresent()).toBeFalsy();
    expect(element(by.css('[href="#section3"].active')).isPresent()).toBeTruthy();
    expect(element(by.css('[href="#section4"].active')).isPresent()).toBeFalsy();

    scrollToSection(4);
    expect(element(by.css('[href="#section1"].active')).isPresent()).toBeFalsy();
    expect(element(by.css('[href="#section2"].active')).isPresent()).toBeFalsy();
    expect(element(by.css('[href="#section3"].active')).isPresent()).toBeFalsy();
    expect(element(by.css('[href="#section4"].active')).isPresent()).toBeTruthy();
  });

});
