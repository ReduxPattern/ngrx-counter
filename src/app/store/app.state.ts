import { CounterState } from "../counter/state/CounterState";
import { PostsState } from "../posts/state/posts.state.interface";


export interface AppState {
    counter: CounterState;
    posts: PostsState;
}