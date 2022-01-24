import {Day, DayMood} from '../redux/dates/dates.constants';
import {ratingCounter} from './ratingCounter';

export interface GetBestFoodOrActivityResult {
  resultTop1: string;
  resultTop2: string;
  resultTop3: string;
}
export const getBestFood = (
  dates: Day[],
  mood: DayMood,
): GetBestFoodOrActivityResult => {
  const ratings = ratingCounter(dates);

  let resultTop1 = '';
  let resultTop2 = '';
  let resultTop3 = '';

  let top1 = 0;
  let top2 = 0;
  let top3 = 0;

  for (const key in ratings[mood].foods) {
    if (top1 < ratings[mood].foods[key]) {
      top1 = ratings[mood].foods[key];
      resultTop1 = key;
    } else if (top1 === ratings[mood].foods[key]) {
      resultTop1 = resultTop1 + ' / ' + key;
    }
  }

  for (const key in ratings[mood].foods) {
    if (top2 < ratings[mood].foods[key] && ratings[mood].foods[key] != top1) {
      top2 = ratings[mood].foods[key];
      resultTop2 = key;
    } else if (
      top2 === ratings[mood].foods[key] &&
      ratings[mood].foods[key] != top1
    ) {
      resultTop2 = resultTop2 + ' / ' + key;
    }
  }

  for (const key in ratings[mood].foods) {
    if (
      top3 < ratings[mood].foods[key] &&
      ratings[mood].foods[key] != top1 &&
      ratings[mood].foods[key] != top2
    ) {
      top3 = ratings[mood].foods[key];
      resultTop3 = key;
    } else if (
      top3 === ratings[mood].foods[key] &&
      ratings[mood].foods[key] != top1 &&
      ratings[mood].foods[key] != top2
    ) {
      resultTop3 = resultTop3 + ' / ' + key;
    }
  }

  return {resultTop1, resultTop2, resultTop3};
};

export const getBestActivity = (
  dates: Day[],
  mood: DayMood,
): GetBestFoodOrActivityResult => {
  const ratings = ratingCounter(dates);

  let resultTop1 = '';
  let resultTop2 = '';
  let resultTop3 = '';

  let top1 = 0;
  let top2 = 0;
  let top3 = 0;

  for (const key in ratings[mood].activities) {
    if (top1 < ratings[mood].activities[key]) {
      top1 = ratings[mood].activities[key];
      resultTop1 = key;
    } else if (top1 === ratings[mood].activities[key]) {
      resultTop1 = resultTop1 + ' / ' + key;
    }
  }

  for (const key in ratings[mood].activities) {
    if (
      top2 < ratings[mood].activities[key] &&
      ratings[mood].activities[key] != top1
    ) {
      top2 = ratings[mood].activities[key];
      resultTop2 = key;
    } else if (
      top2 === ratings[mood].activities[key] &&
      ratings[mood].activities[key] != top1
    ) {
      resultTop2 = resultTop2 + ' / ' + key;
    }
  }

  for (const key in ratings[mood].activities) {
    if (
      top3 < ratings[mood].activities[key] &&
      ratings[mood].activities[key] != top1 &&
      ratings[mood].activities[key] != top2
    ) {
      top3 = ratings[mood].activities[key];
      resultTop3 = key;
    } else if (
      top3 === ratings[mood].activities[key] &&
      ratings[mood].activities[key] != top1 &&
      ratings[mood].activities[key] != top2
    ) {
      resultTop3 = resultTop3 + ' / ' + key;
    }
  }

  return {resultTop1, resultTop2, resultTop3};
};
