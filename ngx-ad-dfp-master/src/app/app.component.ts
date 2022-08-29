import {Component} from '@angular/core';
import {NgxAdDfpSettings} from '../../projects/ngx-ad-dfp/src/lib/ngx-ad-dfp-settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-ad-dfp-lib';
  settings: NgxAdDfpSettings = new NgxAdDfpSettings({
    network: '1028307',
    ads: [
      {
        id: '1028307/Dinamalar_Olympic_Responsive_Mainhomepage_Top_300x250',
        tag: '1627022766638',
        mappings: [{
          ad: {
            width: 320,
            height: 50
          },
          device: {
            width: 320,
            height: 400
          }
        }]
      }
    ]
  });

  constructor() {
  }
}
