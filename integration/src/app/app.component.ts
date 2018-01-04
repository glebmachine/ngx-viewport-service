import { Component } from '@angular/core';
import { ViewportService } from 'platform-service';

@Component({
  selector: 'integration-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  meaning: number;
  constructor(libService: ViewportService) {
    this.meaning = libService.getMeaning();
  }
}
