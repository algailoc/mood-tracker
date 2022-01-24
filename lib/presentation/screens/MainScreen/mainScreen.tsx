import {ScrollView, View} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {datesSelectors} from '../../../redux/dates/dates.selectors';
import {Day} from '../../../redux/dates/dates.constants';
import {GeneralStatistics} from '../../components/MainScreen/GeneralStatistics/generalStatistics.component';
import {DateCard} from '../../components/MainScreen/DateCard/dateCard.component';
import moment from 'moment';
import {addDate} from '../../../redux/dates/dates.actions';

const MainScreen = () => {
  const dispatch = useDispatch();
  // const {dates} = useSelector(datesSelectors.dates);
  const {dates} = {dates: mockDates};

  useEffect(() => {
    if (!dates.find(el => el.date === moment().format('dd.dd.YYYY'))) {
      dispatch(addDate(moment().format('DD.MM.yyyy')));
    }
  }, []);

  return (
    <SafeAreaView>
      <ScrollView style={{paddingHorizontal: 12, marginTop: 10}}>
        <GeneralStatistics dates={dates} />
        <View style={{marginVertical: 22}}>
          {dates.map(item => (
            <DateCard day={item} key={item.date} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainScreen;

const mockDates: Day[] = [
  {
    date: '01.1.2022',
    activities: ['sport', 'conversation'],
    foods: ['fruit', 'fish'],
    rating: 'excellent',
  },
  {
    date: '02.1.2022',
    activities: ['walking'],
    foods: ['meat', 'porrige'],
    rating: 'excellent',
  },
  {
    date: '03.1.2022',
    activities: ['sport', 'conversation'],
    foods: ['fruit', 'fish'],
    rating: 'excellent',
  },
  {
    date: '04.1.2022',
    activities: ['sport', 'conversation'],
    foods: ['fruit', 'chicken', 'porrige'],
    rating: 'excellent',
  },

  {
    date: '05.1.2022',
    activities: ['walking'],
    foods: ['fruit', 'sweets', 'veggies'],
    rating: 'excellent',
  },
  {
    date: '06.1.2022',
    activities: ['shopping'],
    foods: ['veggies', 'porrige'],
    rating: 'excellent',
  },
  {
    date: '07.1.2022',
    activities: ['shopping', 'conversation'],
    foods: ['fruit', 'meat', 'noodles'],
    rating: 'excellent',
  },
  {
    date: '08.1.2022',
    activities: ['shopping', 'dancing'],
    foods: ['fruit'],
    rating: 'excellent',
  },
];
