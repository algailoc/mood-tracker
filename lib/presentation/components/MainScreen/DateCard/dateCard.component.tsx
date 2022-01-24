import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {Day} from '../../../../redux/dates/dates.constants';
import {mapEnMoodToRuMood} from '../../../../util/mapEnMoodToRuMood';
import {DateCardStyles as styles} from './dateCard.styles';

export const DateCard = ({day}: {day: Day}) => {
  const navigation = useNavigation();

  const goToDayScreen = () => {
    navigation.navigate('DayScreen', day);
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
          {day.foods.map(item => (
            <Text key={item}>• {item}</Text>
          ))}
        </View>
        <View style={{width: '45%'}}>
          {day.activities.map(item => (
            <Text key={item}>• {item}</Text>
          ))}
        </View>
      </View>
    </View>
  );
};
