import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from './posts.state.interface';


const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostsState, (state) => {
    return state.posts;
});