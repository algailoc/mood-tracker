export const constants = {
  ADD_FOOD: 'ADD_FOOD',
  REMOVE_FOOD: 'REMOVE_FOOD',
  ADD_ACTIVITY: 'ADD_ACTIVITY',
  REMOVE_ACTIVITY: 'REMOVE_ACTIVITY',
  SET_RATING: 'SET_RATING',
};

export interface Day {
  date: string;
  foods: string[];
  activities: string[];
  rating?: 'awful' | 'bad' | 'neutral' | 'good' | 'excellent';
}

export interface Rating {
  foods: {
    [key: string]: string;
  };
  activities: {
    [key: string]: string;
  };
}

export type AddFoodPayload = {food: string; date: string};

export type AddActivityPayload = {activity: string; date: string};

export type SetRatingPayload = {
  rating: 'awful' | 'bad' | 'neutral' | 'good' | 'excellent';
  date: string;
};

interface AddFoodAction {
  type: typeof constants.ADD_FOOD;
  payload: AddFoodPayload;
}

interface RemoveFoodAction {
  type: typeof constants.REMOVE_FOOD;
  payload: AddFoodPayload;
}

interface AddActivityAction {
  type: typeof constants.ADD_ACTIVITY;
  payload: AddActivityPayload;
}

interface RemoveActivityAction {
  type: typeof constants.REMOVE_ACTIVITY;
  payload: AddActivityPayload;
}

interface SetRatingAction {
  type: typeof constants.SET_RATING;
  payload: SetRatingPayload;
}

export type DatesActionTypes =
  | AddFoodAction
  | RemoveFoodAction
  | AddActivityAction
  | RemoveActivityAction
  | SetRatingAction;

export interface DatesState {
  dates: Day[];
  awful: Rating;
  bad: Rating;
  neutral: Rating;
  good: Rating;
  excellent: Rating;
}
