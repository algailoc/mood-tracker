import {DayMood} from '../redux/dates/dates.constants';

export const mapEmojiToMood = (mood: DayMood) => {
  switch (mood) {
    case 'excellent':
      return '😊';
    case 'good':
      return '🙂';
    case 'neutral':
      return '😐';
    case 'bad':
      return '🙁';
    case 'awful':
      return '😠';
    default:
      return '';
  }
};
