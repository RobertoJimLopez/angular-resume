import { Injectable } from '@angular/core';

import { AnchorItem } from './anchor-item';
import { TestComponent } from './test/test.component';
import { FooterComponent } from './footer/footer.component';

@Injectable({
  providedIn: 'root'
})
export class ViewsService {
  index = 0;

  getViews() {
    return [
      new AnchorItem(TestComponent, {}),
      new AnchorItem(FooterComponent, {})
    ]
  }

  getIndex(): number {
    return this.index;
  }

  increaseIndex(): void {
    this.index++;
  }

  decreaseIndex(): void {
    this.index--;
  }
}
