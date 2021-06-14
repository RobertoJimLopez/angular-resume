import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  homeButton: HTMLElement | any;
  aboutMeButton: HTMLElement | any;
  experienceButton: HTMLElement | any;
  contactButton: HTMLElement | any;

  constructor() { }

  ngOnInit(): void {
    let width = window.innerWidth;
    let parentElement = document.getElementById("main");

    while (parentElement != null && parentElement.parentElement != null) {
      parentElement = parentElement.parentElement;
    }

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

    if (this.homeButton && this.aboutMeButton && this.experienceButton && this.contactButton) {
      this.homeButton.className = "button";
      this.aboutMeButton.className = "button";
      this.experienceButton.className = "hover-copy";
      this.contactButton.className = "button";
    }

    if (parentElement != null && parentElement.scrollLeft % width == 0 && width > 900) {
      for (let i = parentElement.scrollLeft; i <= 2 * width; i = i + 0.5) {
        parentElement.scrollLeft = i;
      }
    }
  }

}
