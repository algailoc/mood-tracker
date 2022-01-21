import {Day} from '../redux/dates/dates.constants';

interface RatingState {
  awful: {
    foods: {
      [key: string]: number;
    };
    activities: {
      [key: string]: number;
    };
  };
  bad: {
    foods: {
      [key: string]: number;
    };
    activities: {
      [key: string]: number;
    };
  };
  neutral: {
    foods: {
      [key: string]: number;
    };
    activities: {
      [key: string]: number;
    };
  };
  good: {
    foods: {
      [key: string]: number;
    };
    activities: {
      [key: string]: number;
    };
  };
  excellent: {
    foods: {
      [key: string]: number;
    };
    activities: {
      [key: string]: number;
    };
  };
}

export const ratingCounter = (days: Day[]): RatingState => {
  let state: RatingState = {
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

  days.map(({foods, activities, rating}) => {
    if (rating != undefined) {
      foods.map(food => {
        state[rating].foods[food] === undefined
          ? (state[rating].foods[food] = 0)
          : (state[rating].foods[food] += 1);
      });
      activities.map(act => {
        state[rating].activities[act] === undefined
          ? (state[rating].activities[act] = 0)
          : (state[rating].activities[act] += 1);
      });
    }
  });

  console.log('STATE', state);
  return state;
};
