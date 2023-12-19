import { configureStore } from "@reduxjs/toolkit";
import threadsReducer from "./threads/reducer";
import threadReducer from "./thread/reducer";
import authReducer from "./auth/reducer";
import preloadReducer from "./preload/reducer";

const store = configureStore({
  reducer: {
    threads: threadsReducer,
    thread: threadReducer,
    auth: authReducer,
    preload: preloadReducer
  }
})

export default store