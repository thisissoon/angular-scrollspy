import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('ScrollSpy Lib E2E Tests', function () {
  let page: AppPage;

  beforeEach(() => page = new AppPage());

  beforeEach(() => page.navigateTo());

  afterEach(() => {
    browser.manage().logs().get('browser').then((browserLog: any[]) => {
      expect(browserLog).toEqual([]);
    });
  });

  it('should add active class to sections', () => {
    const section1 = page.getSection(1);
    const section2 = page.getSection(2);
    const section3 = page.getSection(3);
    const section4 = page.getSection(4);
    expect(section1.getAttribute('class')).toContain('active');
    expect(section2.getAttribute('class')).not.toContain('active');
    expect(section3.getAttribute('class')).not.toContain('active');
    expect(section4.getAttribute('class')).not.toContain('active');

    page.scrollToSection(2);
    expect(section1.getAttribute('class')).not.toContain('active');
    expect(section2.getAttribute('class')).toContain('active');
    expect(section3.getAttribute('class')).not.toContain('active');
    expect(section4.getAttribute('class')).not.toContain('active');

    page.scrollToSection(3);
    expect(section1.getAttribute('class')).not.toContain('active');
    expect(section2.getAttribute('class')).not.toContain('active');
    expect(section3.getAttribute('class')).toContain('active');
    expect(section4.getAttribute('class')).not.toContain('active');

    page.scrollToSection(4);
    expect(section1.getAttribute('class')).not.toContain('active');
    expect(section2.getAttribute('class')).not.toContain('active');
    expect(section3.getAttribute('class')).not.toContain('active');
    expect(section4.getAttribute('class')).toContain('active');
  });

});
