import {NgxAdDfpMapping} from './ngx-ad-dfp-mapping';

export interface DfpAd {
  tag: string;
  id: string;
  mappings: NgxAdDfpMapping[];
}
