import {Injectable} from '@angular/core';
import {NgxAdDfpSettings} from './ngx-ad-dfp-settings';

@Injectable({
  providedIn: 'root'
})
export class NgxAdDfpService {

  public static areAdsDefined = false;

  constructor() {

  }

  /**
   * Define Slots used for the ads to display
   * @param settings Settings set by JSON file
   * @param googletag The googletag declared by google's script included in index.html
   *
   */
  public static defineAds(settings: NgxAdDfpSettings, googletag: any): void {
    if (!this.areAdsDefined) {
      let gptAdSlots: any[] = [];

      googletag.cmd.push(() => {
        for (let ad of settings.ads) {
          // Init mapping
          let googleMapping = googletag.sizeMapping();
          for (let mapping of ad.mappings) {
            googleMapping = googleMapping.addSize(
              [mapping.device.width, mapping.device.height],
              [mapping.ad.width, mapping.ad.height]
            );
          }
          googleMapping = googleMapping.build();

          // Init ad slots
          googletag.defineSlot(
            `/${settings.network}/${ad.id}`,
            ad.mappings.map((mapping) => [mapping.ad.width, mapping.ad.height]),
            `div-gpt-ad-${ad.tag}-0`)
            .defineSizeMapping(googleMapping)
            .addService(googletag.pubads());
        }

        // Init ad service
        googletag.enableServices();
      });
    }
    this.areAdsDefined = true;
  }
}
