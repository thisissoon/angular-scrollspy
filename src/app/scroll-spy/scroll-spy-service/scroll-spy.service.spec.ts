import { TestBed, inject } from '@angular/core/testing';
import { QueryList } from '@angular/core';

import { ScrollSpyService } from './scroll-spy.service';
import { ScrollSpyItemDirective } from '../scroll-spy-item/scroll-spy-item.directive';

describe('ScrollSpyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScrollSpyService],
    });
  });

  it('should add spy to list of spys', inject(
    [ScrollSpyService],
    (service: ScrollSpyService) => {
      const items = new QueryList<ScrollSpyItemDirective>();
      service.addSpy('foo', items);
      expect(service.spys).toEqual([{ id: 'foo', items }]);

      service.addSpy('bar', items);
      expect(service.spys).toEqual([
        { id: 'foo', items },
        { id: 'bar', items },
      ]);
    },
  ));

  it('should remove spy from list of spys', inject(
    [ScrollSpyService],
    (service: ScrollSpyService) => {
      const items = new QueryList<ScrollSpyItemDirective>();
      service.spys = [{ id: 'foo', items }, { id: 'bar', items }];

      service.removeSpy('bar');
      expect(service.spys).toEqual([{ id: 'foo', items }]);
      service.removeSpy('foo');
      expect(service.spys).toEqual([]);
    },
  ));

  it('should set spy section status', inject(
    [ScrollSpyService],
    (service: ScrollSpyService) => {
      const items1 = [
        {
          spyId: 'foo',
          section: 'section1',
          inViewport: false,
          active: false,
          detectChanges: () => {},
        },
      ];
      const items2 = [
        {
          spyId: 'bar',
          section: 'section2',
          inViewport: true,
          active: true,
          detectChanges: () => {},
        },
      ];
      service.spys = <any>[
        { id: 'foo', items: items1 },
        { id: 'bar', items: items2 },
      ];

      service.setSpySectionStatus('section1', 'foo', true);
      expect(items1[0].inViewport).toBeTruthy();
      service.setSpySectionStatus('section2', 'bar', true);
      expect(items1[0].inViewport).toBeTruthy();
      service.setSpySectionStatus('section1', 'foo', false);
      expect(items1[0].inViewport).toBeFalsy();
    },
  ));

  it("should NOT set spy section status if spy doesn't exist", inject(
    [ScrollSpyService],
    (service: ScrollSpyService) => {
      const items1 = [
        {
          spyId: 'foo',
          section: 'section1',
          inViewport: false,
          active: false,
          detectChanges: () => {},
        },
      ];
      const items2 = [
        {
          spyId: 'bar',
          section: 'section2',
          inViewport: false,
          active: false,
          detectChanges: () => {},
        },
      ];
      service.spys = <any>[
        { id: 'foo', items: items1 },
        { id: 'bar', items: items2 },
      ];

      service.setSpySectionStatus('section1', 'baz', true);
      expect(items1[0].inViewport).toBeFalsy();
      expect(service.buffer.length).toBe(1);
      expect(service.buffer[0]).toEqual({
        sectionId: 'section1',
        spyId: 'baz',
        inViewport: true,
      });

      service.setSpySectionStatus('section3', 'foo', true);
      expect(items1[0].inViewport).toBeFalsy();
      expect(service.buffer.length).toBe(1);
      expect(service.spys[0].items[0].inViewport).toBeFalsy();
      expect(service.spys[1].items[0].inViewport).toBeFalsy();
    },
  ));

  it('should clear buffer and update inViewport statuses', inject(
    [ScrollSpyService],
    (service: ScrollSpyService) => {
      const items1 = [
        {
          spyId: 'foo',
          section: 'section1',
          inViewport: false,
          active: false,
          detectChanges: () => {},
        },
        {
          spyId: 'foo',
          section: 'section2',
          inViewport: false,
          active: false,
          detectChanges: () => {},
        },
      ];
      const items2 = [
        {
          spyId: 'bar',
          section: 'section1',
          inViewport: false,
          active: false,
          detectChanges: () => {},
        },
        {
          spyId: 'bar',
          section: 'section2',
          inViewport: false,
          active: false,
          detectChanges: () => {},
        },
      ];
      service.spys = [];

      service.buffer = [
        { sectionId: 'section1', spyId: 'bar', inViewport: true },
        { sectionId: 'section2', spyId: 'foo', inViewport: true },
      ];

      service.addSpy('foo', <any>items1);
      expect(service.buffer.length).toBe(1);
      expect(service.buffer[0]).toEqual({
        sectionId: 'section1',
        spyId: 'bar',
        inViewport: true,
      });
      expect(service.spys.length).toBe(1);
      expect(service.spys[0].items[1].inViewport).toBeTruthy();
      expect(service.spys[0].items[1].active).toBeTruthy();

      service.addSpy('bar', <any>items2);
      expect(service.buffer.length).toBe(0);
      expect(service.spys.length).toBe(2);
      expect(service.spys[1].items[0].inViewport).toBeTruthy();
      expect(service.spys[1].items[0].active).toBeTruthy();
    },
  ));
});
