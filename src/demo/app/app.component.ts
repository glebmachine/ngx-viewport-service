import { Component } from '@angular/core';
import { ViewportService } from '@betadigitalproduction/ngx-viewport-service';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(public viewport: ViewportService) {
    console.log(this.viewport.get());
  }
}
