import { Injectable, QueryList } from '@angular/core';

import { ScrollSpyItemDirective } from '../scroll-spy-item/scroll-spy-item.directive';
import { Spy } from '../shared/spy.model';

/**
 * Service that stores a list of `Spy`'s and the state
 * of their nav items `inViewport` and `active` state
 *
 * @export
 * @class ScrollSpyService
 */
@Injectable()
export class ScrollSpyService {
  /**
   * List of `Spy`'s
   *
   * @type {Spy[]}
   * @memberof ScrollSpyService
   */
  public spys: Spy[] = [];
  /**
   * Stores requests to add items to spy when spy hasn't been created
   * yet. Once spy has been added then request will be made again.
   *
   * @type {any[]}
   * @memberof ScrollSpyService
   */
  public buffer: any[] = [];
  /**
   * Add spy to list of `spys`
   *
   * @param {string} id
   * @param {QueryList<ScrollSpyItemDirective>} items
   * @memberof ScrollSpyService
   */
  public addSpy(id: string, items: QueryList<ScrollSpyItemDirective>): void {
    this.spys.push({ id, items });
    const buffer = this.buffer.filter((i) => i.spyId === id);
    this.buffer = this.buffer.filter((i) => i.spyId !== id);
    buffer.forEach((i) => this.setSpySectionStatus(i.sectionId, i.spyId, i.inViewport));
  }
  /**
   * Remove spy from list of `spys`
   *
   * @param {string} id
   * @memberof ScrollSpyService
   */
  public removeSpy(id: string): void {
    const i = this.spys.findIndex((s) => s.id === id);
    this.spys.splice(i, 1);
  }
  /**
   * Set the `inViewport` status for a spy item then sets the active
   * to true for the first item in the list that has `inViewport`
   * set to true
   *
   * @param {string} sectionId
   * @param {string} spyId
   * @param {boolean} inViewport
   * @returns {void}
   * @memberof ScrollSpyService
   */
  public setSpySectionStatus(sectionId: string, spyId: string, inViewport: boolean): void {
    const spy = this.spys.find((s) => s.id === spyId);
    if (!spy) {
      this.buffer.push({ sectionId, spyId, inViewport });
      return;
    }
    const item = spy.items.find((i) => i.section === sectionId);
    if (!item) { return; }

    item.inViewport = inViewport;
    const firstInViewport = spy.items.filter((i) => i.inViewport)[0];
    spy.items.forEach((i) => i.active = false);

    if (firstInViewport) {
      firstInViewport.active = true;
      firstInViewport.detectChanges();
    }
  }
}
