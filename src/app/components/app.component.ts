// angular
import { ChangeDetectionStrategy } from '@angular/core';
import { RouteConfig } from '@angular/router-deprecated';

// app
import { NameListService } from 'frameworks/app.framework';
import { AnalyticsService } from 'frameworks/analytics.framework';
import { RouteComponent, PlatformDirective } from 'frameworks/core.framework';
import { LangSwitcherComponent } from 'frameworks/i18n.framework';
import { NavbarComponent } from './navbar.component';
import { ToolbarComponent } from './toolbar.component';

@RouteComponent({
  selector: 'app',
  viewProviders: [NameListService],
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')],
  directives: [LangSwitcherComponent, NavbarComponent, ToolbarComponent, PlatformDirective],
  changeDetection: ChangeDetectionStrategy.Default // Everything else uses OnPush
})
@RouteConfig([
  {
    path: '/',
    loader: () => require('es6-promise!./home')('HomeComponent'),
    name: 'Home',
    useAsDefault: true
  },
  {
    path: '/about',
    loader: () => require('es6-promise!./about')('AboutComponent'),
    name: 'About'
  }
])
export class AppComponent {
  constructor(public analytics: AnalyticsService) {
  }
}
