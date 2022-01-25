import React from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {ActivitiesListStyles as styles} from './activitiesList.styles';

interface ActivitiesListComponentProps {
  activities: string[];
  onAdd: (food: string) => void;
  onRemove: (food: string) => void;
}

export const ActivitiesListComponent: React.FC<
  ActivitiesListComponentProps
> = ({activities, onAdd, onRemove}) => {
  const {height} = useWindowDimensions();

  return (
    <View style={{paddingHorizontal: 20}}>
      <Text style={styles.title}>Чем вы занимались сегодня?</Text>
      <FlatList
        style={{...styles.listCard, height: (height - 300) / 2}}
        contentContainerStyle={{paddingVertical: 20}}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <View style={styles.listItemContainer}>
            <TouchableOpacity
              style={styles.checkBox}
              onPress={
                activities.includes(item)
                  ? () => onRemove(item)
                  : () => onAdd(item)
              }>
              <Text>{activities.includes(item) ? '✓' : ''}</Text>
            </TouchableOpacity>
            <Text>{item}</Text>
          </View>
        )}
        data={allActivities}
      />
    </View>
  );
};

const allActivities: string[] = [
  'прогулка',
  'спорт',
  'танцы',
  'общение с семьей',
  'общение с друзьями',
  'плавание',
  'езда на велосипеде / самокате',
  'прогулка по магазинам',
  'готовка',
  'хобби',
  'сон',
].sort();
