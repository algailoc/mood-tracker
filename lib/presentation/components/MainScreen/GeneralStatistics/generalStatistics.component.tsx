import React from 'react';
import {ScrollView, View} from 'react-native';
import {Day} from '../../../../redux/dates/dates.constants';
import {
  getBestActivity,
  getBestFood,
} from '../../../../util/getBestFoodsAndActivities';
import {MoodCard} from '../MoodCard/moodCard.component';
import {GeneralStatisticsStyles as styles} from './generalStatistics.styles';

interface GeneralStatisticsProp {
  dates: Day[];
}

export const GeneralStatistics: React.FC<GeneralStatisticsProp> = ({dates}) => {
  return (
    <View style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={{width: '100%'}}
        horizontal>
        <MoodCard
          mood="excellent"
          activities={getBestActivity(dates, 'excellent')}
          foods={getBestFood(dates, 'excellent')}
        />
        <MoodCard
          mood="good"
          activities={getBestActivity(dates, 'good')}
          foods={getBestFood(dates, 'good')}
        />
        <MoodCard
          mood="neutral"
          activities={getBestActivity(dates, 'neutral')}
          foods={getBestFood(dates, 'neutral')}
        />
        <MoodCard
          mood="bad"
          activities={getBestActivity(dates, 'bad')}
          foods={getBestFood(dates, 'bad')}
        />
        <MoodCard
          mood="awful"
          activities={getBestActivity(dates, 'awful')}
          foods={getBestFood(dates, 'awful')}
        />
      </ScrollView>
    </View>
  );
};
