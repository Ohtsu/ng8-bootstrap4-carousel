import { Component } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

// import { Component } from '@angular/core';

// @Component({selector: 'ngbd-carousel-basic', 
// templateUrl: './carousel-basic.html'})
// export class NgbdCarouselBasic {
//   images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
// }


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NgbCarouselConfig] 
})
export class AppComponent {
  // title = 'ng8-bootstrap4-carousel';
  // images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }
}