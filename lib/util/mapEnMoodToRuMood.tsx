import {DayMood} from '../redux/dates/dates.constants';

export const mapEnMoodToRuMood = (mood?: DayMood) => {
  switch (mood) {
    case 'excellent':
      return 'Отличное';
    case 'good':
      return 'Хорошее';
    case 'neutral':
      return 'Нейтральное';
    case 'bad':
      return 'Плохое';
    case 'awful':
      return 'Ужасное';
    default:
      return '';
  }
};
