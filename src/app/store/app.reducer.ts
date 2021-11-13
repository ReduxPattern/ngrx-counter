import { counterReducer } from "../counter/state/counter.reducer";
import { postsReducer } from "../posts/state/posts.reducer";


export const appReducer = {
    counter: counterReducer,
    posts: postsReducer,
}