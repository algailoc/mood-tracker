import {combineReducers} from 'redux';
import {datesReducer} from './dates/dates.reducer';

export const rootReducer = combineReducers({
  dates: datesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
