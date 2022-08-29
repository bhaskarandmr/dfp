import {Input, Component, OnInit} from '@angular/core'
import {NgxAdDfpSettings} from './ngx-ad-dfp-settings';
import {DfpAd} from './dfp-ad';
import {NgxAdDfpService} from './ngx-ad-dfp.service';

declare var googletag: any;

@Component({
  selector: 'ad-dfp',
  template: '<div id="div-gpt-ad-1627022766638-0" style="min-width: 300px; min-height: 250px;"></div>'
})
export class NgxAdDfpComponent implements OnInit {

  @Input() public settings: NgxAdDfpSettings;
  @Input() public ad: DfpAd;

  public id: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.id = `div-gpt-ad-${this.ad.tag}-0`;
    // Prevent from JS Errors if googletag is not defined
    if (typeof googletag !== 'undefined') {
      NgxAdDfpService.defineAds(this.settings, googletag);
      this.showAd(this.ad);
    }
  }

  /**
   * Show adds on the web page
   */
  showAd(ad: DfpAd): void {
    googletag.cmd.push(() => {
      googletag.display(this.id);
    });
  }
}
