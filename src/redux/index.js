import { configureStore } from "@reduxjs/toolkit";
import threadsReducer from "./threads/reducer";
import threadReducer from "./thread/reducer";
import authReducer from "./auth/reducer";
import preloadReducer from "./preload/reducer";
import commentReducer from "./comments/reducer";
import leaderboardsReducer from "./leaderboards/reducer";

const store = configureStore({
  reducer: {
    threads: threadsReducer,
    thread: threadReducer,
    auth: authReducer,
    preload: preloadReducer,
    comment: commentReducer,
    leaderboards: leaderboardsReducer
  }
})

export default store