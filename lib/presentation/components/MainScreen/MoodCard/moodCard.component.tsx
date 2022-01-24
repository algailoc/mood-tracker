import React from 'react';
import {Text, useWindowDimensions, View} from 'react-native';
import {Tooltip} from 'react-native-elements';
import {DayMood} from '../../../../redux/dates/dates.constants';
import {GetBestFoodOrActivityResult} from '../../../../util/getBestFoodsAndActivities';
import {mapEmojiToMood} from '../../../../util/mapEmojiToMood';
import {mapEnMoodToRuMood} from '../../../../util/mapEnMoodToRuMood';
import {MoodCardStyles as styles} from './moodCard.styles';

export const MoodCard = ({
  mood,
  foods,
  activities,
}: {
  mood: DayMood;
  foods: GetBestFoodOrActivityResult;
  activities: GetBestFoodOrActivityResult;
}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={{...styles.moodCard, width: width - 65}}>
      <View style={styles.row}>
        <Text style={{fontSize: 16}}>
          {mapEmojiToMood(mood)} {mapEnMoodToRuMood(mood)} настроение
        </Text>
        <Tooltip
          width={200}
          height={100}
          backgroundColor="white"
          popover={
            <Text>
              Показывает, что вы ели и чем занимались чаще всего в такие дни.
            </Text>
          }>
          <View style={styles.tooltipContainer}>
            <Text>?</Text>
          </View>
        </Tooltip>
      </View>
      <View style={{...styles.row, marginTop: 16}}>
        <View style={styles.column}>
          <Text style={styles.listHeader}>Еда</Text>
          <Text style={styles.listText}>1. {foods.resultTop1}</Text>
          <Text style={styles.listText}>2. {foods.resultTop2}</Text>
          <Text style={styles.listText}>3. {foods.resultTop3}</Text>
        </View>
        <View style={{...styles.column}}>
          <Text style={styles.listHeader}>Занятия</Text>
          <Text style={styles.listText}>1. {activities.resultTop1}</Text>
          <Text style={styles.listText}>2. {activities.resultTop2}</Text>
          <Text style={styles.listText}>3. {activities.resultTop3}</Text>
        </View>
      </View>
    </View>
  );
};
