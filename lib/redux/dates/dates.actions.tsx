import {
  AddActivityPayload,
  AddFoodPayload,
  constants,
  SetRatingPayload,
} from './dates.constants';

export const addFood = ({date, food}: AddFoodPayload) => ({
  type: constants.ADD_FOOD,
  payload: {date, food},
});

export const removeFood = ({date, food}: AddFoodPayload) => ({
  type: constants.REMOVE_FOOD,
  payload: {date, food},
});

export const addActivity = ({date, activity}: AddActivityPayload) => ({
  type: constants.ADD_ACTIVITY,
  payload: {date, activity},
});

export const removeActivity = ({date, activity}: AddActivityPayload) => ({
  type: constants.REMOVE_ACTIVITY,
  payload: {date, activity},
});

export const setRating = ({date, rating}: SetRatingPayload) => ({
  type: constants.SET_RATING,
  payload: {date, rating},
});

export const addDate = (date: string) => ({
  type: constants.ADD_DATE,
  payload: {date},
});
