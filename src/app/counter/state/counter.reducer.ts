import { Action, createReducer, on } from "@ngrx/store";
import { initialState } from "./counter.state";
import { increment, decrement, reset, customIncrement, changeChannelName } from "./counter.action";
import { CounterState } from "./CounterState";


const _counterReducer = createReducer(
    initialState,
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1,
        };
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1,
        };
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0,
        };
    }),
    on(customIncrement, (state, action) => {
        return {
            ...state,
            counter: state.counter + action.value,
        }
    }),
    on(changeChannelName, (state) => {
        return {
            ...state,
            channelName: 'Modified Shubho Web Dev'
        }
    }),
);

export function counterReducer(state: CounterState | undefined, action: Action) {
    return _counterReducer(state, action)
}