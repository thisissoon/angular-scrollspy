import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ScrollSpyDirective } from './scroll-spy.directive';

// tslint:disable-next-line:max-line-length
const template = `<p snScrollSpy>Ullamco esse laborum dolor eiusmod laboris aliquip aute aute aute. Ullamco velit ad laboris consequat. Deserunt ad reprehenderit cupidatat do labore esse. Occaecat nostrud mollit commodo ut ex elit fugiat et reprehenderit quis. Fugiat aliquip excepteur quis sunt sint consectetur duis elit quis ex fugiat quis eiusmod. Ad pariatur ipsum nulla sunt est non ut id et nisi culpa voluptate mollit ad. Tempor cupidatat esse ad in cillum incididunt quis. Nulla cillum qui aute labore quis ad cillum ullamco adipisicing qui est nulla amet. Nisi consectetur sint nostrud est duis dolore enim aliqua esse laboris Lorem.</p>`;

@Component({
  selector: 'test-component',
  template: template,
  styles: [`
    :host { display: block; font-family: arial, sans-serif; }
    p { height: 200px; overflow: hidden; padding: 1rem; width: 200px; }
  `]
})
class TestComponent { }

describe('AppComponent', () => {
  let fixture: ComponentFixture<TestComponent>;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ScrollSpyDirective
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    compiled = fixture.debugElement.nativeElement;
  });

  it('should render directive and clip text', async(() => {
    fixture.detectChanges();
    expect(compiled.querySelector('p').textContent)
      // tslint:disable-next-line:max-line-length
      .toEqual(`Ullamco esse laborum dolor eiusmod laboris aliquip aute aute aute. Ullamco velit ad laboris consequat. Deserunt ad reprehenderit cupidatat do labore esse. Occaecat nostrud mollit commodo ut ex elit fugiat et reprehenderit quis. Fugiat aliquip excepteur quis sunt sint consectetur duis elit…`);
  }));
});
