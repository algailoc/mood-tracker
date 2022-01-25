import {Text, View} from 'react-native';
import React, {useState} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {StackParamList} from '../../../navigation/mainStack';
import {Day, DayMood} from '../../../redux/dates/dates.constants';
import {useDispatch} from 'react-redux';
import {
  addActivity,
  addFood,
  removeActivity,
  removeFood,
  setRating,
} from '../../../redux/dates/dates.actions';
import {Rating} from 'react-native-ratings';
import {FoodsListComponent} from '../../components/DayScreen/FoodsList/foodList.component';
import {ActivitiesListComponent} from '../../components/DayScreen/ActivitiesList/activitiesList.component';

type DayScreenParams = RouteProp<StackParamList, 'DayScreen'>;

const DayScreen = () => {
  const route = useRoute<DayScreenParams>();
  const day: Day = route.params.day;
  const dispatch = useDispatch();

  const [mood, setMood] = useState<DayMood | undefined>(day.rating);
  const [foods, setFoods] = useState<string[]>(day.foods);
  const [activity, setActivity] = useState<string[]>(day.activities);

  const setRatingHandler = (rating: DayMood | undefined) => {
    if (rating) {
      dispatch(setRating({date: day.date, rating}));
      setMood(rating);
    }
  };

  const addFoodOrActivityHandler = (item: string, isFood: boolean = false) => {
    if (isFood) {
      dispatch(addFood({date: day.date, food: item}));
      setFoods([item, ...foods]);
    } else {
      dispatch(addActivity({date: day.date, activity: item}));
      setActivity([item, ...activity]);
    }
  };

  const removeFoodOrActivityHandler = (
    item: string,
    isFood: boolean = false,
  ) => {
    if (isFood) {
      dispatch(removeFood({date: day.date, food: item}));
      setFoods(foods.filter(el => el !== item));
    } else {
      dispatch(removeActivity({date: day.date, activity: item}));
      setActivity(activity.filter(el => el !== item));
    }
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 16,
      }}>
      <Text style={{fontWeight: '700', fontSize: 18, textAlign: 'center'}}>
        Оцените ваше настроение
      </Text>
      <Rating
        style={{marginBottom: 20, marginTop: 8}}
        type="heart"
        ratingCount={5}
        imageSize={40}
        minValue={1}
        showRating={false}
        startingValue={mapRatingStringToInt(mood)}
        onFinishRating={(rating: number) =>
          setRatingHandler(mapRatingIntToString(rating))
        }
      />
      <FoodsListComponent
        foods={foods}
        onRemove={food => removeFoodOrActivityHandler(food, true)}
        onAdd={food => addFoodOrActivityHandler(food, true)}
      />
      <ActivitiesListComponent
        activities={activity}
        onRemove={activity => removeFoodOrActivityHandler(activity, false)}
        onAdd={activity => addFoodOrActivityHandler(activity, false)}
      />
    </View>
  );
};

const mapRatingIntToString = (rate: number) => {
  switch (rate) {
    case 1:
      return 'awful';
    case 2:
      return 'bad';
    case 3:
      return 'neutral';
    case 4:
      return 'good';
    case 5:
      return 'excellent';
    default:
      return undefined;
  }
};

const mapRatingStringToInt = (rate: DayMood | undefined) => {
  switch (rate) {
    case 'awful':
      return 1;
    case 'bad':
      return 2;
    case 'neutral':
      return 3;
    case 'good':
      return 4;
    case 'excellent':
      return 5;
    default:
      return 3;
  }
};

export default DayScreen;
