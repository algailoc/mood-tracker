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
  awful: {
    foods: {},
    activities: {},
  },
  bad: {
    foods: {},
    activities: {},
  },
  neutral: {
    foods: {},
    activities: {},
  },
  good: {
    foods: {},
    activities: {},
  },
  excellent: {
    foods: {},
    activities: {},
  },
};

export const datesReducer = (
  state = INITIAL_STATE,
  action: DatesActionTypes,
) => {
  switch (action.type) {
    case constants.ADD_FOOD:
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
      return {
        ...state,
        dates: (state.dates = state.dates.map(day => {
          if (day.date === action.payload.date) {
            day.foods.filter(
              food => food != (action.payload as AddFoodPayload).food,
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
            day.foods.push((action.payload as AddActivityPayload).activity);
          }
          return day;
        })),
      };

    case constants.REMOVE_ACTIVITY:
      return {
        ...state,
        dates: (state.dates = state.dates.map(day => {
          if (day.date === action.payload.date) {
            day.foods.filter(
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

    default:
      return state;
  }
};
