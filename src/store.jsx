import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./reducers/TimerReducer";

export const store = configureStore({
  reducer: {
    timer: timerReducer
  }
}
);