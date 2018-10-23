import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ScrollSpySectionComponent } from './scroll-spy-section.component';
import { ScrollSpyService } from '../scroll-spy-service/scroll-spy.service';

describe('ScrollSpySectionComponent', () => {
  let fixture: ComponentFixture<ScrollSpySectionComponent>;
  let component: ScrollSpySectionComponent;
  const mockScrollSpyService = {
    setSpySectionStatus: jasmine.createSpy('setStatus'),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ScrollSpyService, useValue: mockScrollSpyService },
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ScrollSpySectionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollSpySectionComponent);
    component = fixture.debugElement.componentInstance;
    component.id = 'bar';
    component.for = 'foo';
    fixture.detectChanges();
  });

  it('should set spy section status on onInViewportChange', () => {
    component.onInViewportChange(true);
    expect(mockScrollSpyService.setSpySectionStatus).toHaveBeenCalledWith(
      'bar',
      'foo',
      true,
    );

    mockScrollSpyService.setSpySectionStatus.calls.reset();
    component.onInViewportChange(false);
    expect(mockScrollSpyService.setSpySectionStatus).toHaveBeenCalledWith(
      'bar',
      'foo',
      false,
    );
  });
});
