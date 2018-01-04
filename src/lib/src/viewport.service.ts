import { Injectable } from '@angular/core';
import { PlatformService } from '@betadigitalproduction/ngx-platform-service';

export interface ViewportDimensions {
  width: number;
  height: number;
}

@Injectable()
export class ViewportService {
  viewport: ViewportDimensions;

  constructor(private platform: PlatformService) {
    this.platform.runExternal(() => {
      window.addEventListener('resize', () => {
        this.viewport = null;
      });
    });
  }

  get() {
    if (!this.viewport) {
      this.calcViewport();
    }

    return this.viewport;
  }

  calcViewport() {
    if (this.platform.isPlatformBrowser) {
      let e: any = window;
      let a = 'inner';

      if (!('innerWidth' in window )) {
        a = 'client';
        e = document.documentElement || document.body;
      }

      this.viewport = { width : e[a + 'Width'] , height : e[a + 'Height'] };
    }
  }
}
