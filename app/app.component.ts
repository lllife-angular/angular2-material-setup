import {Component} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

// noinspection TypeScriptCheckImport
import {MdButton} from '@angular2-material/button';
// noinspection TypeScriptCheckImport
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
// noinspection TypeScriptCheckImport
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
// noinspection TypeScriptCheckImport
import {MdToolbar} from '@angular2-material/toolbar';

import {HomeComponent} from './home.component';
import {AboutComponent } from './about.component';

@Component({
  selector: 'app',
  providers: [],
  templateUrl: 'app/app.component.html',
  directives: [
    ROUTER_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdToolbar
  ]
})
@RouteConfig([
  new Route({ path: '/home', component: HomeComponent, name: 'Home', useAsDefault: true}),
  new Route({ path: '/about', component: AboutComponent, name: 'About'})
])
export class AppComponent {

}