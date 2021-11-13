import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';

import { changeChannelName, customIncrement } from '../state/counter.action';
import { CounterState } from '../state/CounterState';
import { AppState } from '../../store/app.state';
import { getChannelName } from '../state/counter.selector';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit{
  value: number;
  /* channelName: string;
  counterSubscription: Subscription;
 */
  channelName$: Observable<string>

  constructor(private store: Store<AppState>) {
    this.value = 0;
    this.channelName$ = this.store.select(getChannelName);
    // this.channelName = '';
    /* this.counterSubscription = this.store.select(getChannelName)
      .subscribe((channelName) => {
        console.log('Channel Name Observable called.');
        this.channelName = channelName;
      }); */
  }

  ngOnInit(): void {
  }

  onAdd(): void {
    this.store.dispatch(customIncrement({ value: +this.value }));
  }

  onChangeChannelName(): void {
    this.store.dispatch(changeChannelName());
  }

  /* ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  } */
}
