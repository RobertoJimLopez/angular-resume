import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  homeButton: HTMLElement | any;
  aboutMeButton: HTMLElement | any;
  experienceButton: HTMLElement | any;
  contactButton: HTMLElement | any;

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
      this.aboutMeButton.className = "hover-copy";
      this.experienceButton.className = "button";
      this.contactButton.className = "button";
    }

    if (parentElement != null && parentElement.scrollLeft % width == 0 && width > 900) {
      for (let i = parentElement.scrollLeft; i <= width; i = i + 0.5) {
        parentElement.scrollLeft = i;
      }
    }
  }
}
