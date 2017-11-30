import { ScrollSpyDirective } from './scroll-spy.directive';
import { ScrollSpyService } from '../scroll-spy-service/scroll-spy.service';

describe('ScrollSpyDirective', () => {
  let directive: ScrollSpyDirective;
  let service: ScrollSpyService;

  beforeEach(() => {
    service = new ScrollSpyService();
    directive = new ScrollSpyDirective(service);
  });

  it('should add spy to ScrollSpyService', () => {
    const spy = spyOn(service, 'addSpy');
    directive.ngAfterViewInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should remove spy from ScrollSpyService', () => {
    const spy = spyOn(service, 'removeSpy');
    directive.ngOnDestroy();
    expect(spy).toHaveBeenCalled();
  });
});
