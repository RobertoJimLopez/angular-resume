import { Component, Input, OnInit } from '@angular/core';
import { Console } from 'node:console';

import { AnchorComponent } from '../anchor.component'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements AnchorComponent, OnInit {
  @Input() data: any;

  ngOnInit(): void {
    console.log("WatchMe!");
  }
}
