import { Directive, Input, HostBinding, ChangeDetectorRef } from '@angular/core';

/**
 * A directive used to add an `active` class to a nav item
 * when the section is in the viewport
 *
 * @example
 * ```
 * <a snScrollSpyItem for="foo" href="#section1">Section 1</a>
 * ```
 *
 * @export
 * @class ScrollSpyItemDirective
 * @implements {AfterViewInit}
 * @implements {OnDestroy}
 */
@Directive({
  selector: '[snScrollSpyItem]'
})
export class ScrollSpyItemDirective {
  /**
   * True if the nav item is the active item in the `items` list
   * for `ScrollSpyDirective` instance
   *
   * @type {boolean}
   * @memberof ScrollSpyItemDirective
   */
  @HostBinding('class.active')
  public active = false;
  /**
   * ID of `ScrollSpyDirective` instance
   *
   * @type {string}
   * @memberof ScrollSpyItemDirective
   */
  @Input()
  public for: string;
  /**
   * Hash for section to link to
   *
   * @type {string}
   * @memberof ScrollSpyItemDirective
   */
  @Input()
  public href: string;
  /**
   * If true means the section is in the viewport
   *
   * @type {boolean}
   * @memberof ScrollSpyItemDirective
   */
  public inViewport = false;
  /**
   * Id of section that links navigates to
   *
   * @readonly
   * @type {string}
   * @memberof ScrollSpyItemDirective
   */
  public get section(): string {
    return this.href.replace('#', '');
  }
  /**
   * Creates an instance of ScrollSpyItemDirective.
   * @param {ChangeDetectorRef} cdRef
   * @memberof ScrollSpyItemDirective
   */
  constructor(private cdRef: ChangeDetectorRef) { }
  /**
   * Manually trigger change detection
   *
   * @memberof ScrollSpyItemDirective
   */
  public detectChanges(): void {
    this.cdRef.detectChanges();
  }
}
