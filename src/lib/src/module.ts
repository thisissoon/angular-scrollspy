import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { InViewportModule, WindowRef } from '@thisissoon/angular-inviewport';

import { ScrollSpyDirective } from './scroll-spy/scroll-spy.directive';
import { ScrollSpySectionComponent } from './scroll-spy-section/scroll-spy-section.component';
import { ScrollSpyItemDirective } from './scroll-spy-item/scroll-spy-item.directive';
import { ScrollSpyService } from './scroll-spy-service/scroll-spy.service';

const defaultProviders: Provider[] = [
  WindowRef
];

const directives: any[] = [
  ScrollSpyDirective,
  ScrollSpyItemDirective,
];

const components: any[] = [
  ScrollSpySectionComponent
];

/**
 * A simple lightweight library for Angular 2/4+ which automatically
 * updates links to indicate the currently active section in the viewport
 *
 * @export
 * @class ScrollSpyModule
 */
@NgModule({
  imports: [
    InViewportModule.forRoot()
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
   * @static
   * @param {Provider[]} [providers=defaultProviders]
   * @returns {ModuleWithProviders}
   * @memberof ScrollSpyModule
   */
  public static forRoot(providers: Provider[] = defaultProviders): ModuleWithProviders {
    return {
      ngModule: ScrollSpyModule,
      providers: [
        ScrollSpyService,
        ...providers
      ]
    };
  }
}
