import { ScrollSpyItemDirective } from './scroll-spy-item.directive';
import { ScrollSpyService } from '../scroll-spy-service/scroll-spy.service';

describe('ScrollSpyDirective', () => {
  let directive: ScrollSpyItemDirective;
  const mockChangeDetectionRef = {
    detectChanges: jasmine.createSpy('detectChanges')
  };

  beforeEach(() => {
    directive = new ScrollSpyItemDirective(<any>mockChangeDetectionRef);
  });

  it('should trigger change detection', () => {
    directive.detectChanges();
    expect(mockChangeDetectionRef.detectChanges).toHaveBeenCalled();
  });

  it('should return section', () => {
    directive.href = '#section1';
    const result = directive.section;
    expect(result).toBe('section1');
  });

});
