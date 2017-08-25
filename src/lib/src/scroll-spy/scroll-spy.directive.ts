import { Directive, ElementRef, OnInit } from '@angular/core';

/**
 * Removes excess text from element until it fits in elements
 * and appends a scrollspy symbol to end of text. This requires that
 * the elements height be fixed and it's `overflow` css property
 * be `hidden`
 *
 * @example
 * ```
 * <p snScrollSpy>Ullamco esse laborum</p>
 * ```
 *
 * @export
 * @class ScrollSpyDirective
 * @implements {OnInit}
 */
@Directive({
  selector: '[snScrollSpy]'
})
export class ScrollSpyDirective implements OnInit {
  /**
   * ScrollSpy charater
   *
   * @private
   * @memberof ScrollSpyDirective
   */
  private scrollspyChar = '…';
  /**
   * If true means the elements contents are larger
   * than the size of the element.
   *
   * @readonly
   * @private
   * @type {boolean}
   * @memberof ScrollSpyDirective
   */
  private get hasOverflow(): boolean {
    const el: HTMLElement = this.el.nativeElement;
    return el.scrollHeight > el.offsetHeight;
  }
  /**
   * Creates an instance of ScrollSpyDirective.
   * @param {ElementRef} el
   * @memberof ScrollSpyDirective
   */
  constructor(private el: ElementRef) { }
  /**
   * Clip text on component initialisation
   *
   * @memberof ScrollSpyDirective
   */
  public ngOnInit(): void {
    this.clipText();
  }
  /**
   * Removes character from end of `innerText`
   * until text fits in element and appends
   * a scrollspy symbol to the end.
   *
   * @private
   * @memberof ScrollSpyDirective
   */
  private clipText(): void {
    const el: HTMLElement = this.el.nativeElement;
    let text = el.innerText.split(' ');
    while (this.hasOverflow) {
      text = text.slice(0, -1);
      el.innerText = `${text.join(' ')}${this.scrollspyChar}`;
    };
  }
}
