import {DatesActionTypes, DatesState} from './dates/dates.constants';

export interface RootState {
  dates: DatesState;
}

export type RootAction = DatesActionTypes | any;
