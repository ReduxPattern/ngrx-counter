import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from "@ngrx/store";

import { decrement, increment, reset } from '../state/counter.action';
import { CounterState } from '../state/CounterState';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {
 /*  @Output() Increment: EventEmitter<void>;
  @Output() Decrement: EventEmitter<void>;
  @Output() Reset: EventEmitter<void>; */

  constructor(private store: Store<AppState>) { 
 /*    this.Increment = new EventEmitter<void>();
    this.Decrement = new EventEmitter<void>();
    this.Reset = new EventEmitter<void>(); */
  }

  ngOnInit(): void {
  }

  onIncrement() {
    this.store.dispatch(increment());
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }

  onReset() {
    this.store.dispatch(reset());
  }

}
