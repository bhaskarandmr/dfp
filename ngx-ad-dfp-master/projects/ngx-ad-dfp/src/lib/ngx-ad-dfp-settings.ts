import {DfpAd} from './dfp-ad';

export class NgxAdDfpSettings {
  network = '';
  ads: DfpAd[] = [];

  constructor(settings?: any) {
    if (settings) {
      if (settings.network)
        this.network = settings.network;
      if (settings.ads)
        this.ads = settings.ads;
    }
  }
}
