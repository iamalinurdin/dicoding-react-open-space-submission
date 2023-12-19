import { configureStore } from "@reduxjs/toolkit";
import threadsReducer from "./threads/reducer";
import threadReducer from "./thread/reducer";

const store = configureStore({
  reducer: {
    threads: threadsReducer,
    thread: threadReducer
  }
})

export default store