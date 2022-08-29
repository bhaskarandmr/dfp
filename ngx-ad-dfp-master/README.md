# Show DFP ads in your Angular X App now !

## How to use:

Insert in your index.html this line to load google DFP lib:

```html
<script async='async' src='https://www.googletagservices.com/tag/js/gpt.js'></script>
```

Then install ngx-ad-dfp:

```bash
$ npm install ngx-ad-dfp
```

Import the module to your app : 

```ts
import {NgxAdDfpModule} from 'ngx-ad-dfp';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxAdDfpModule // Add this!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Create a settings object with your DFP credentials like this: 

```json
{
  "network": "yourNetworkId",
  "ads": [{
    "tag": "yourAdTag",
    "id": "yourAdUnitId",
    "mappings": [{
      "device": {
        "width": 0,
        "height": 0
      },
      "ad": {
        "width": 320,
        "height": 50
      }
    },
    {
      "device": {
        "width": 750,
        "height": 200
      },
      "ad": {
        "width": 728,
        "height": 90
      }
    }]
  }],
}
```

You can define multiple ads and create multiple sizes of the same ad, then show them according to user's screen size.
To do so with this library, you should in the "mapping" array define for each mapping :
The device minimum width and height,
the ad's size you want to show (need to be exact)

## Actually showing the ad:

Add in any of your component this html tag :

```html
<ad-dfp [settings]="settings" [ad]="ad"></ad-dfp>
```

Where `settings` is the json we created just before, and `ad` is one of the ads in the `ads` property of `settings`

For example you could do:

```html
<ad-dfp *ngFor="let ad of settings.ads" [settings]="settings" [ad]="ad"></ad-dfp>
```

This will show all your ads one under the other

You can also:

```html
<ad-dfp [settings]="settings" [ad]="settings.ads[0]"></ad-dfp>
```

This will show the first ad you defined.

Check out [my example app on GitHub](https://github.com/alabordere/ngx-ad-dfp) if you need any more help :)

Happy coding!
