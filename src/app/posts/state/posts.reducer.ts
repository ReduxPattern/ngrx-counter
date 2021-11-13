import { Action, createReducer } from "@ngrx/store";

import { PostsState } from "./posts.state.interface";
import { initialState } from "./posts.state";


const _postsReducer = createReducer(
    initialState,
    
);

export function postsReducer(state: PostsState | undefined, action: Action){
    return _postsReducer(state, action);
}