import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver} from '@angular/core';

import { ViewsService } from './views.service'

import { AnchorItem } from './anchor-item';
import { AnchorDirective } from './anchor.directive';
import { AnchorComponent } from './anchor.component';
import { createComponent } from '@angular/compiler/src/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  @Input() views: AnchorItem[];
  @Input() viewsService: ViewsService;
  currentIndex = -1;
  @ViewChild(AnchorDirective, {static: true}) anchorHost!: AnchorDirective;
  interval: any;
  componentRef: any;
  containerRef: any;
  homeButton: any;
  clientWidth: number | any;

  totalWidth = 0;
  scrollLeftVal = -1;
  ended = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private service: ViewsService) {
    this.views = service.getViews();
    this.viewsService = service;
  }

  ngOnInit(): void {
    let mainElement = document.getElementById("main");
    let homeButton = document.getElementById("home");
    let currWidth;

    if (mainElement != null) {
      currWidth = mainElement.clientWidth;
      this.totalWidth = mainElement.clientWidth + 1;
    }

    if (mainElement != null && currWidth != null) {
      mainElement.style.width = currWidth + 1 + "px";
      this.clientWidth = currWidth;
    }

    if (homeButton != null) {
      homeButton.className = "hover-copy";
      this.homeButton = homeButton;
    }
  }

  loadComponent(): void {
    this.currentIndex = this.viewsService.getIndex();
    const anchorItem = this.views[this.currentIndex];
    this.viewsService.increaseIndex();

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(anchorItem.component);

    const viewContainerRef = this.anchorHost.viewContainerRef;
    this.containerRef = viewContainerRef;

    const componentRef = viewContainerRef.createComponent<AnchorComponent>(componentFactory);
    this.componentRef = componentRef;
    componentRef.instance.data = anchorItem.data;

    this.totalWidth += this.clientWidth-1;
  }

  onWheel(event: WheelEvent): void {
    let parentElement = (<Element>event.target);

    while (parentElement != null && parentElement.parentElement != null) {
      parentElement = parentElement.parentElement;
    }

    if (parentElement != null) {
      let delta: number; 
      this.clientWidth == null ? delta = 50 : delta = this.clientWidth/15;
      event.deltaY > 0 ? parentElement.scrollLeft += event.deltaY + delta : parentElement.scrollLeft += event.deltaY - 1 * delta;

      this.scrollLeftVal = parentElement.scrollLeft;

      // ------------- HIGHLIGHT BUTTONS --------------------------------
      if (this.ended && parentElement.scrollLeft + parentElement.clientWidth >= parentElement.clientWidth * 1.4) {
        if (this.homeButton) {
          this.homeButton.className = "button";
        }
      }

      if (this.ended && parentElement.scrollLeft + parentElement.clientWidth <= parentElement.clientWidth * 1.4) {
        if (this.homeButton) {
          this.homeButton.className = "hover-copy";
        }
      }
      // ------------- HIGHLIGHT BUTTONS --------------------------------

      if (!this.ended && parentElement.scrollLeft + parentElement.clientWidth >= this.totalWidth) {
        this.loadComponent();

        if (this.viewsService.itemEnded()) 
          this.ended = true;

      } else if (parentElement.scrollLeft <= this.totalWidth - 2 * parentElement.clientWidth){
        if (this.containerRef != null) {
          let loadedItems = this.containerRef.length;
          console.log(loadedItems);
          this.containerRef.remove(loadedItems - 1);
          this.viewsService.decreaseIndex();
          this.totalWidth -= this.clientWidth - 1;
        }
        this.ended = false;
      }
    }
    event.preventDefault();
  }
}