import { Component, OnInit } from '@angular/core';
import {PageContentSessionComponent} from '../page-content-session/page-content-session.component';

@Component({
  moduleId: module.id,
  selector: 'app-page-content',
  templateUrl: 'page-content.component.html',
  styleUrls: ['page-content.component.css'],
  directives: [PageContentSessionComponent]
})
export class PageContentComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

}
