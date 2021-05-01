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


  scrollLeftVal = -1;
  ended = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private service: ViewsService) {
    this.views = service.getViews();
    this.viewsService = service;
  }

  ngOnInit(): void {
    let mainElement = document.getElementById("main");
    let homeButton = document.getElementById("home");
    let currWidth = mainElement?.clientWidth;
    console.log("Test;")
    console.log(homeButton);

    if (mainElement != null && currWidth != null) {
      mainElement.style.width = currWidth + 50 + "px";
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
    viewContainerRef.clear();
    this.containerRef = viewContainerRef;

    const componentRef = viewContainerRef.createComponent<AnchorComponent>(componentFactory);
    this.componentRef = componentRef;
    componentRef.instance.data = anchorItem.data
  }

  onWheel(event: WheelEvent): void {
    let parentElement = (<Element>event.target);

    while (parentElement != null && parentElement.parentElement != null) {
      parentElement = parentElement.parentElement;
    }

    if (parentElement != null) {
      let delta: number; 
      this.clientWidth == null ? delta = 50 : delta = this.clientWidth/20;
      event.deltaY > 0 ? parentElement.scrollLeft += event.deltaY + delta : parentElement.scrollLeft += event.deltaY - 1 * delta;

      this.scrollLeftVal = parentElement.scrollLeft;

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

      if (!this.ended && parentElement.scrollLeft + parentElement.clientWidth >= parentElement.clientWidth + 1) {
        this.loadComponent();
        this.ended = true;
      } else if (this.ended && parentElement.scrollLeft + parentElement.clientWidth <= parentElement.clientWidth + 1){
        if (this.containerRef != null) {
          this.containerRef.clear();
          this.viewsService.decreaseIndex();
        }
        this.ended = false;
      }
    }
    event.preventDefault();
  }
}