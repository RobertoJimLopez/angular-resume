import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver} from '@angular/core';
import { Location } from '@angular/common';

import { ViewsService } from './views.service'

import { AnchorItem } from './anchor-item';
import { AnchorDirective } from './anchor.directive';
import { AnchorComponent } from './anchor.component';
import { createComponent } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

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
  homeButton: HTMLElement | any;
  aboutMeButton: HTMLElement | any;
  experienceButton: HTMLElement | any;
  contactButton: HTMLElement | any;
  clientWidth: number | any;

  loadThreshold = 0.1;
  totalWidth = 0;
  scrollLeftVal = -1;
  ended = false;
  pagesLoaded = 1;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private service: ViewsService, private router: Router, private location: Location) {
    this.views = service.getViews();
    this.viewsService = service;
  }

  ngOnInit(): void {
    let mainElement = document.getElementById("main");
    let currWidth = window.innerWidth;

    this.totalWidth = window.innerWidth + 1;

    if (mainElement != null && currWidth != null) {
      mainElement.style.width = currWidth + 1 + "px";
      this.clientWidth = currWidth;
    }

    let homeButton = document.getElementById("home");

    if (homeButton != null) {
      homeButton.className = "hover-copy";
      this.homeButton = homeButton;
    }

    let aboutMeButton = document.getElementById("about-me");

    if (aboutMeButton != null) {
      this.aboutMeButton = aboutMeButton;
    }

    let experienceButton = document.getElementById("experience");

    if (experienceButton != null) {
      this.experienceButton = experienceButton;
    }

    let contactButton = document.getElementById("contact");

    if (contactButton != null) {
      this.contactButton = contactButton;
    }
  }

  loadComponent(): void {
    console.log("loadComponent");
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

    this.pagesLoaded++;
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
      // ----- HOME BUTTON -----
      if (parentElement.scrollLeft + parentElement.clientWidth >= parentElement.clientWidth + (this.loadThreshold * parentElement.clientWidth)) {
        if (this.homeButton) {
          this.homeButton.className = "button";
        }
      }

      if (parentElement.scrollLeft + parentElement.clientWidth <= parentElement.clientWidth + (this.loadThreshold * parentElement.clientWidth)) {
        if (this.homeButton) {
          this.homeButton.className = "hover-copy";
          this.router.navigate(['/home']);
        }
      }
      // ----- HOME BUTTON -----
      // ----- ABOUT ME BUTTON -----
      if (parentElement.scrollLeft + parentElement.clientWidth <= parentElement.clientWidth + (this.loadThreshold * parentElement.clientWidth) ||
        parentElement.scrollLeft + parentElement.clientWidth >= 2 * parentElement.clientWidth + (this.loadThreshold * parentElement.clientWidth)) {
        if (this.aboutMeButton) {
          this.aboutMeButton.className = "button";
        }
      }

      if (parentElement.scrollLeft + parentElement.clientWidth > parentElement.clientWidth + (this.loadThreshold * parentElement.clientWidth) &&
          parentElement.scrollLeft + parentElement.clientWidth < 2 * parentElement.clientWidth + (this.loadThreshold * parentElement.clientWidth)) {
        if (this.aboutMeButton) {
          this.aboutMeButton.className = "hover-copy";
          this.router.navigate(['/about-me']);
        }
      }
      // ----- ABOUT ME BUTTON -----
      // ----- EXPERIENCE BUTTON -----
      if (parentElement.scrollLeft + parentElement.clientWidth <= 2 * parentElement.clientWidth + (this.loadThreshold * parentElement.clientWidth) ||
        parentElement.scrollLeft + parentElement.clientWidth >= 3 * parentElement.clientWidth + (this.loadThreshold * parentElement.clientWidth)) {
        if (this.experienceButton) {
          this.experienceButton.className = "button";
        }
      }

      if (parentElement.scrollLeft + parentElement.clientWidth > 2 * parentElement.clientWidth + (this.loadThreshold * parentElement.clientWidth) &&
          parentElement.scrollLeft + parentElement.clientWidth < 3 * parentElement.clientWidth + (this.loadThreshold * parentElement.clientWidth)) {
        if (this.experienceButton) {
          this.experienceButton.className = "hover-copy";
          this.router.navigate(['/experience']);
        }
      }
      // ----- EXPERIENCE BUTTON -----
      // ----- CONTACT BUTTON -----
      if (parentElement.scrollLeft + parentElement.clientWidth <= 3 * parentElement.clientWidth + (this.loadThreshold * parentElement.clientWidth) ||
        parentElement.scrollLeft + parentElement.clientWidth >= 4 * parentElement.clientWidth + (this.loadThreshold * parentElement.clientWidth)) {
        if (this.contactButton) {
          this.contactButton.className = "button";
        }
      }

      if (parentElement.scrollLeft + parentElement.clientWidth > 3 * parentElement.clientWidth + (this.loadThreshold * parentElement.clientWidth) &&
          parentElement.scrollLeft + parentElement.clientWidth < 4 * parentElement.clientWidth + (this.loadThreshold * parentElement.clientWidth)) {
        if (this.contactButton) {
          this.contactButton.className = "hover-copy";
          this.router.navigate(['/contact']);
        }
      }
      // ----- CONTACT BUTTON -----
      // ------------- HIGHLIGHT BUTTONS --------------------------------

      if (!this.ended && this.viewsService.getIndex() < 3 && parentElement.scrollLeft + parentElement.clientWidth >= this.totalWidth) {
        this.loadComponent();

        if (this.viewsService.itemEnded()) 
          this.ended = true;

      } else if (parentElement.scrollLeft <= this.totalWidth - 2 * (parentElement.clientWidth - 1)){
        this.removeComponent();
        this.ended = false;
      }
    }
    event.preventDefault();
  }

  removeComponent(): void {
    if (this.containerRef != null) {
      let loadedItems = this.containerRef.length;
      if (loadedItems > 0) {
        this.containerRef.remove(loadedItems - 1);
        this.viewsService.decreaseIndex();
        this.totalWidth -= this.clientWidth - 1;
        this.pagesLoaded--;
      }
    }
  }

  onResize(): void {
    this.clientWidth = window.innerWidth;
    this.totalWidth = this.pagesLoaded * (window.innerWidth - 1);
  }

  onActivate(event: Event): void {
    let url = this.router.url;
    let loadedComponents = this.viewsService.getIndex();

    switch (url) {
      case '/about-me': {
        this.loadNComponents(1 - loadedComponents);
        break;
      }
      case '/experience': {
        this.loadNComponents(2 - loadedComponents);
        break;
      }
      case '/contact': {
        this.loadNComponents(3 - loadedComponents);
        break;
      }
    }
  }

  loadNComponents(components: number): void {
    for (let i = 0; i < components; i++) {
      this.loadComponent();
    }
  }
}