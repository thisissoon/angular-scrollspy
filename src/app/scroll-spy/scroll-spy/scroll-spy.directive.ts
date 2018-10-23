import {
  Directive,
  ContentChildren,
  QueryList,
  AfterViewInit,
  Input,
  OnDestroy
} from '@angular/core';

import { ScrollSpyItemDirective } from '../scroll-spy-item/scroll-spy-item.directive';
import { ScrollSpyService } from '../scroll-spy-service/scroll-spy.service';

/**
 * Adds `active` class to navigation links when section is in the viewport.
 * Used in conjuction with `snScrollItem` directive which should be added
 * to anchor links in the nav
 *
 * @example
 * ```
 * <ul role="navigation" snScrollSpy id="foo">
 *  <li><a snScrollSpyItem for="foo" href="#section1">Section 1</a></li>
 *  <li><a snScrollSpyItem for="foo" href="#section2">Section 2</a></li>
 *  <li><a snScrollSpyItem for="foo" href="#section3">Section 3</a></li>
 *  <li><a snScrollSpyItem for="foo" href="#section4">Section 4</a></li>
 * </ul>
 * ```
 *
 */
@Directive({
  selector: '[snScrollSpy]'
})
export class ScrollSpyDirective implements AfterViewInit, OnDestroy {
  /**
   * Collection of `ScrollSpyItem`. They are the list of
   * nav items.
   *
   * @memberof ScrollSpyDirective
   */
  @ContentChildren(ScrollSpyItemDirective)
  public items: QueryList<ScrollSpyItemDirective>;
  /**
   * ID of scrollSpy instance
   *
   * @memberof ScrollSpyDirective
   */
  @Input()
  public id: string;
  /**
   * Creates an instance of ScrollSpyDirective.
   * @memberof ScrollSpyDirective
   */
  constructor(private scrollSpySvc: ScrollSpyService) {}
  /**
   * Adds spy to list of spys in `ScrollSpyService`
   *
   * @memberof ScrollSpyDirective
   */
  public ngAfterViewInit(): void {
    this.scrollSpySvc.addSpy(this.id, this.items);
  }
  /**
   * Remove spy from list of spys when directive is destroyed
   *
   * @memberof ScrollSpyDirective
   */
  public ngOnDestroy(): void {
    this.scrollSpySvc.removeSpy(this.id);
  }
}
