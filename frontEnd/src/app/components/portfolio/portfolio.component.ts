import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  title = 'protectoFinal';
  config: any;
  fullpage_api: any;

  constructor() {

    // for more details on config options please visit fullPage.js docs
    this.config = {

      // fullpage options
      licenseKey: 'gplv3-license',
      sectionsColor: ['#7BAABE', 'whitesmoke', '#7BAABE', 'whitesmoke', '#7BAABE', 'whitesmoke'],
      anchors: ['banner', 'about','experienciaLaboral', 'educacion',  'skills','projects'],
      menu: '#menu',
      navigation: true,

      // fullpage callbacks
      afterResize: () => {
        console.log("After resize");
      },
      afterLoad: (origin: { index: any; }, destination: any, direction: any) => {
        console.log(origin.index);
      }
    };
  }

  getRef(fullPageRef: any) {
    this.fullpage_api = fullPageRef;
  }
}
