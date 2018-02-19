import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { InViewportModule } from '@thisissoon/angular-inviewport';

import { ScrollSpyDirective } from './scroll-spy/scroll-spy.directive';
import { ScrollSpySectionComponent } from './scroll-spy-section/scroll-spy-section.component';
import { ScrollSpyItemDirective } from './scroll-spy-item/scroll-spy-item.directive';
import { ScrollSpyService } from './scroll-spy-service/scroll-spy.service';

const directives: any[] = [
  ScrollSpyDirective,
  ScrollSpyItemDirective,
];

const components: any[] = [
  ScrollSpySectionComponent
];

const providers: Provider[] = [
  ScrollSpyService
];

/**
 * A simple lightweight library for Angular 2/4+ which automatically
 * updates links to indicate the currently active section in the viewport
 *
 */
@NgModule({
  imports: [
    InViewportModule
  ],
  declarations: [
    ...directives,
    ...components
  ],
  exports: [
    ...directives,
    ...components
  ]
})
export class ScrollSpyModule {
  /**
   * Specify a static method for root module to ensure providers are
   * only provided once but allows the module to still be imported
   * into other modules without reproviding services.
   *
   * @memberof ScrollSpyModule
   */
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: ScrollSpyModule,
      providers: [
        ...providers
      ]
    };
  }
}
