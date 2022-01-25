import {
  AddActivityPayload,
  AddFoodPayload,
  constants,
  DatesActionTypes,
  DatesState,
  SetRatingPayload,
} from './dates.constants';

const INITIAL_STATE: DatesState = {
  dates: [],
};

export const datesReducer = (
  state = INITIAL_STATE,
  action: DatesActionTypes,
) => {
  switch (action.type) {
    case constants.ADD_FOOD:
      console.log('IN ADD_FOOD', action.payload);

      return {
        ...state,
        dates: (state.dates = state.dates.map(day => {
          if (day.date === action.payload.date) {
            day.foods.push((action.payload as AddFoodPayload).food);
          }
          return day;
        })),
      };

    case constants.REMOVE_FOOD:
      console.log('IN REMOVE_FOOD', action.payload);

      return {
        ...state,
        dates: (state.dates = state.dates.map(day => {
          if (day.date === action.payload.date) {
            day.foods = day.foods.filter(
              food => food !== (action.payload as AddFoodPayload).food,
            );
          }
          return day;
        })),
      };

    case constants.ADD_ACTIVITY:
      return {
        ...state,
        dates: (state.dates = state.dates.map(day => {
          if (day.date === action.payload.date) {
            day.activities.push(
              (action.payload as AddActivityPayload).activity,
            );
          }
          return day;
        })),
      };

    case constants.REMOVE_ACTIVITY:
      return {
        ...state,
        dates: (state.dates = state.dates.map(day => {
          if (day.date === action.payload.date) {
            day.activities = day.activities.filter(
              food => food != (action.payload as AddActivityPayload).activity,
            );
          }
          return day;
        })),
      };

    case constants.SET_RATING:
      return {
        ...state,
        dates: (state.dates = state.dates.map(day => {
          if (day.date === action.payload.date) {
            day.rating = (action.payload as SetRatingPayload).rating;
          }
          return day;
        })),
      };

    case constants.ADD_DATE:
      console.log('??', action.payload);

      return {
        ...state,
        dates: [
          {date: action.payload.date, foods: [], activities: []},
          ...state.dates,
        ],
      };

    default:
      return state;
  }
};
