import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spark-starter-angular';

  options: AnimationOptions = {
    path: './assets/a_test.json',
  };
 
  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
