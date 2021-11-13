import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  // counter: number;
  constructor() {
    // this.counter = 0;
  }

  ngOnInit(): void {
  }

 /*  onIncrement(): void {
    this.counter++;
  }

  onDecrement(): void {
    this.counter--;
  }
  onReset(): void {
    this.counter = 0;
  } */
}
