import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-page-content-session',
  templateUrl: 'page-content-session.component.html',
  styleUrls: ['page-content-session.component.css'],
  inputs:['contentIndex']
})
export class PageContentSessionComponent implements OnInit {

  private headingText1: string;
  private headingText2: string;
  private leadHtml: string;
  private imageUrl: string;
  private pullLeft:boolean = false;

  private contentIndex: number = 0;

  constructor() { }

  ngOnInit() {
    switch (this.contentIndex) {
      case 0:
        this.headingText1 = 'Death to the Stock Photo:';
        this.headingText2 = 'Special Thanks';
        this.leadHtml = 'A special thanks to <a target="_blank" href="http://join.deathtothestockphoto.com/">Death to the Stock Photo</a> for providing the photographs that you see in this template. Visit their website to become a member.';
        this.imageUrl = 'img/ipad.png';
        break;
      case 1:
        this.headingText1 = '3D Device Mockups';
        this.headingText2 = 'by PSDCovers';
        this.leadHtml = 'Turn your 2D designs into high quality, 3D product shots in seconds using free Photoshop actions by <a target="_blank" href="http://www.psdcovers.com/">PSDCovers</a>! Visit their website to download some of their awesome, free photoshop actions!';
        this.imageUrl = 'img/dog.png';
        this.pullLeft = true;
        break;
      case 2:
        this.headingText1 = 'Google Web Fonts and';
        this.headingText2 = 'Font Awesome Icons';
        this.leadHtml = 'This template features the \'Lato\' font, part of the <a target="_blank" href="http://www.google.com/fonts">Google Web Font library</a>, as well as <a target="_blank" href="http://fontawesome.io">icons from Font Awesome</a>.';
        this.imageUrl = 'img/phones.png';
        break;
    }
  }

}
