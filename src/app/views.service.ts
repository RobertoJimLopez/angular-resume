import { Injectable } from '@angular/core';

import { AnchorItem } from './anchor-item';
import { TestComponent } from './test/test.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';

@Injectable({
  providedIn: 'root'
})
export class ViewsService {
  index = 0;

  anchorItems = [
    new AnchorItem(AboutMeComponent, {}),
    new AnchorItem(ExperienceComponent, {}),
    new AnchorItem(ContactComponent, {})
  ];

  itemCount = this.anchorItems.length;
  itemEnd = false;

  getViews() {
    return this.anchorItems;
  }

  getIndex(): number {
    return this.index;
  }

  increaseIndex(): void {
    this.index++;

    if (this.index == this.itemCount) {
      this.itemEnd = true;
    }
  }

  decreaseIndex(): void {
    this.index--;

    if (this.itemEnd) {
      this.itemEnd = false;
    }
  }

  itemEnded(): boolean {
    return this.itemEnd;
  }
}
