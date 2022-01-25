import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, Pressable, Text, useWindowDimensions, View} from 'react-native';
import {Day} from '../../../../redux/dates/dates.constants';
import {mapEnMoodToRuMood} from '../../../../util/mapEnMoodToRuMood';
import {DateCardStyles as styles} from './dateCard.styles';

export const DateCard = ({day}: {day: Day}) => {
  const navigation = useNavigation();

  const goToDayScreen = () => {
    navigation.navigate('DayScreen' as never, {day} as never);
  };

  return (
    <View style={styles.card} key={day.date}>
      <View style={styles.row}>
        <Text>{day.date}</Text>
        <Text>Настроение: {mapEnMoodToRuMood(day.rating) ?? '-'}</Text>
        <Pressable onPress={goToDayScreen}>
          <Image
            style={{width: 20, height: 20}}
            source={require('../../../../../assets/edit.png')}
          />
        </Pressable>
      </View>
      <View style={{...styles.row, marginTop: 12}}>
        <View style={{width: '45%'}}>
          <Text style={styles.columnHeader}>Еда:</Text>
        </View>
        <View style={{width: '45%'}}>
          <Text style={styles.columnHeader}>Занятия:</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={{width: '45%'}}>
          {day.foods.map((item, index) => (
            <Text key={index.toString()}>• {item}</Text>
          ))}
        </View>
        <View style={{width: '45%'}}>
          {day.activities.map((item, index) => (
            <Text key={index.toString()}>• {item}</Text>
          ))}
        </View>
      </View>
    </View>
  );
};
