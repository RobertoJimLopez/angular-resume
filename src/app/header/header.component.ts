import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewsService } from '../views.service'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() viewsService: ViewsService;
  @Output() loadComponent = new EventEmitter();
  @Output() removeComponent = new EventEmitter();
  homeButton: HTMLElement | any;
  aboutMeButton: HTMLElement | any;
  experienceButton: HTMLElement | any;
  contactButton: HTMLElement | any;
  mainView: HTMLElement | any;

  constructor(private service: ViewsService) {
    this.viewsService = service;
  }

  ngOnInit(): void {
    let homeButton = document.getElementById("home");

    if (homeButton != null) {
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

  onClick(event: MouseEvent): void {
    let width = window.innerWidth;
    console.log(width);
    let parentElement = (<Element>event.target);
    let loadedEvents = this.viewsService.getIndex();

    while (parentElement != null && parentElement.parentElement != null) {
      parentElement = parentElement.parentElement;

      if (!this.mainView && parentElement.id == "main") {
        this.mainView = parentElement;
      }
    }

    if (this.mainView) {
      this.mainView.className = "main-blur";
      console.log(this.mainView);
    }

    switch((<HTMLTextAreaElement>event.target).id) {
      case 'home': {
        if (this.homeButton && this.aboutMeButton && this.experienceButton && this.contactButton) {
          this.homeButton.className = "hover-copy";
          this.aboutMeButton.className = "button";
          this.experienceButton.className = "button";
          this.contactButton.className = "button";
        }

        if (parentElement.scrollLeft > 0) {
          let accumulated = 0;
          for (let i = parentElement.scrollLeft; i >= 0; i = i - 0.5) {
            accumulated += 0.5;

            if (accumulated / width == 1 && accumulated > 0) {
              accumulated = 0;
              window.setTimeout(() =>{this.removeComponent.next('removeComponent');}, 150);
            }

            window.setTimeout(() => {parentElement.scrollLeft = i;}, 100);
          }
        }
        break;
      }
      case 'about-me': {
        if (this.homeButton && this.aboutMeButton && this.experienceButton && this.contactButton) {
          this.homeButton.className = "button";
          this.aboutMeButton.className = "hover-copy";
          this.experienceButton.className = "button";
          this.contactButton.className = "button";
        }

        if (parentElement.scrollLeft > width) {
          let accumulated = 0;
          for (let i = parentElement.scrollLeft; i >= width; i = i - 0.5) {
            accumulated += 0.5;

            if (accumulated / width == 1 && accumulated > 0) {
              accumulated = 0;
              window.setTimeout(() =>{this.removeComponent.next('removeComponent');}, 150);
            }

            window.setTimeout(() => {parentElement.scrollLeft = i;}, 100);
          }
        } else {
          if (loadedEvents < 1) {
            this.loadComponent.next('loadComponent');
          }

          for (let i = parentElement.scrollLeft; i <= width; i = i + 0.5) {
            window.setTimeout(() => {
              parentElement.scrollLeft = i;
            }, 100);
          }
        }
        break;
      }
      case 'experience': {
        if (this.homeButton && this.aboutMeButton && this.experienceButton && this.contactButton) {
          this.homeButton.className = "button";
          this.aboutMeButton.className = "button";
          this.experienceButton.className = "hover-copy";
          this.contactButton.className = "button";
        }

        if (parentElement.scrollLeft > 2 * width) {
          let accumulated = 0;
          for (let i = parentElement.scrollLeft; i >= 2 * width; i = i - 0.5) {
            accumulated += 0.5;

            if (accumulated / width == 1 && accumulated > 0) {
              accumulated = 0;
              window.setTimeout(() =>{this.removeComponent.next('removeComponent');}, 150);
            }

            window.setTimeout(() => {parentElement.scrollLeft = i;}, 100);
          }
        } else {
          if (loadedEvents < 2) {
            for (let i = loadedEvents; i < 2; i++) {
              this.loadComponent.next('loadComponent');
            }
          }

          for (let i = parentElement.scrollLeft; i <= 2 * width; i = i + 0.5) {
            window.setTimeout(() => {parentElement.scrollLeft = i;}, 100);
          }
        }
        break;
      }
      case 'contact': {
        if (this.homeButton && this.aboutMeButton && this.experienceButton && this.contactButton) {
          this.homeButton.className = "button";
          this.aboutMeButton.className = "button";
          this.experienceButton.className = "button";
          this.contactButton.className = "hover-copy";
        }

        if (parentElement.scrollLeft > 3 * width) {
          for (let i = parentElement.scrollLeft; i >= 3 * width; i = i - 0.5) {
            window.setTimeout(() => {parentElement.scrollLeft = i;}, 100);
          }
        } else {
          if (loadedEvents < 3) {
            for (let i = loadedEvents; this.viewsService.getIndex() < 3; i++) {
              this.loadComponent.next('loadComponent');
            }
          }

          for (let i = parentElement.scrollLeft; i <= 3 * width; i = i + 0.5) {
            window.setTimeout(() => {parentElement.scrollLeft = i;}, 100);
          }
        }
        break;
      }
      default: {
        console.log("nope");
      }
    }

    if (this.mainView) {
      window.setTimeout(() => {this.mainView.className = "main";}, 200)
    }
  }

}
