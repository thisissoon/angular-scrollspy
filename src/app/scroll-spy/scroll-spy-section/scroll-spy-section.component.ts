import { Component, Input } from '@angular/core';
import { ScrollSpyService } from '../scroll-spy-service/scroll-spy.service';

/**
 * A component to wrap section content within that will update the
 * `ScrollSpyService` when it's in view
 *
 * @example
 * ```
 *  <sn-scroll-spy-section id="section1" for="foo">
 *    ...
 *  </sn-scroll-spy-section>
 * ```
 *
 * @export
 * @class ScrollSpySectionComponent
 */
@Component({
  selector: 'sn-scroll-spy-section',
  templateUrl: './scroll-spy-section.component.html',
  styleUrls: ['./scroll-spy-section.component.scss']
})
export class ScrollSpySectionComponent {
  /**
   * Identifies the section
   *
   * @type {string}
   * @memberof ScrollSpySectionComponent
   */
  @Input()
  public id: string;
  /**
   * Specifies which `ScrollSpy` instance to update
   *
   * @type {string}
   * @memberof ScrollSpySectionComponent
   */
  @Input()
  public for: string;
  /**
   * Amount of time in ms to wait for other scroll events
   * before running event handler
   *
   * @type {number}
   * @default 0
   * @memberof ScrollSpySectionComponent
   */
  @Input()
  public debounce = 0;
  /**
   * Creates an instance of ScrollSpySectionComponent.
   * @param {ScrollSpyService} scrollSpySvc
   * @memberof ScrollSpySectionComponent
   */
  constructor(private scrollSpySvc: ScrollSpyService) { }
  /**
   * Updates `ScrollSpy` section when element enters/leaves viewport
   *
   * @param {boolean} inViewport
   * @memberof ScrollSpySectionComponent
   */
  public onInViewportChange(inViewport: boolean): void {
    this.scrollSpySvc.setSpySectionStatus(this.id, this.for, inViewport);
  }
}
