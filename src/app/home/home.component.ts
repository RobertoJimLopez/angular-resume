import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const target = document.querySelector('.tw');

    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 100,
      deleteSpeed: 100,
      typeColor: 'dimgray'
    })
    
    writer
      .type('Backend')
      .rest(2000)
      .remove(7)
      .type('JavaScript')
      .rest(2000)
      .remove(10)
      .type('Node.js')
      .rest(2000)
      .remove(7)
      .type('Angular')
      .rest(2000)
      .remove(7)
      .clear()
      .start()
  }
}
