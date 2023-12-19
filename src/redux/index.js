import { configureStore } from "@reduxjs/toolkit";
import threadsReducer from "./threads/reducer";
import threadReducer from "./thread/reducer";
import authReducer from "./auth/reducer";

const store = configureStore({
  reducer: {
    threads: threadsReducer,
    thread: threadReducer,
    auth: authReducer
  }
})

export default store