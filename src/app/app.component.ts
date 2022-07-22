import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'protectoFinal';
  config: any;
  fullpage_api: any;

  constructor() {

    // for more details on config options please visit fullPage.js docs
    this.config = {

      // fullpage options
      licenseKey: 'YOUR LICENSE KEY HERE',
      sectionsColor: ['#7BAABE', 'whitesmoke', '#7BAABE', 'whitesmoke', '#7BAABE'],
      anchors: ['banner', 'about', 'thirdPage', 'fourthPage', 'lastPage'],
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
