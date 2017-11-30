import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getSection(n: number) {
    return element(by.css(`[href="#section${n}"]`));
  }

  scrollToSection(n: number) {
    const script = `window.scrollTo(0, (window.innerHeight * ${n - 1}) + 80)`;
    browser.executeScript(script);
    browser.sleep(100);
  }
}
