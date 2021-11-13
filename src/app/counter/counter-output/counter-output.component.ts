import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store } from "@ngrx/store";
import { Subscription, Observable } from 'rxjs';

import { CounterState } from '../state/CounterState';
import { getCounter } from '../state/counter.selector';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
  /** Input decorators from parent component. */
  // @Input() counter: number
 /*  counter: number;
  counterSubscription: Subscription; */
  counter$: Observable<number>;

  constructor(private store: Store<AppState>) {
    /* this.counter = 0;
    this.counterSubscription = this.store.select(getCounter)
      .subscribe((count) => {
        console.log('Counter observable called.');
        this.counter = count;
      }); */
    this.counter$ = this.store.select(getCounter);
  }

  ngOnInit(): void {
  }

  /* ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  } */
}
