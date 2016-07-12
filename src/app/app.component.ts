import { Component } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import {IntroHeaderComponent} from './intro-header/intro-header.component';
import {PageContentComponent} from './page-content/page-content.component';
import {PageFooterComponent} from './page-footer/page-footer.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [NavigationComponent,
    IntroHeaderComponent,
    PageContentComponent,
    PageFooterComponent]
})
export class AppComponent {
  title = 'app works!';
}
