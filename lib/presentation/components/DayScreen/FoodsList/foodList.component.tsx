import React from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {FoodsListStyles as styles} from './foodList.styles';

interface FoodsListComponentProps {
  foods: string[];
  onAdd: (food: string) => void;
  onRemove: (food: string) => void;
}

export const FoodsListComponent: React.FC<FoodsListComponentProps> = ({
  foods,
  onAdd,
  onRemove,
}) => {
  const {height} = useWindowDimensions();

  return (
    <View style={{paddingHorizontal: 20, marginBottom: 40}}>
      <Text style={styles.title}>Что вы ели сегодня?</Text>
      <FlatList
        style={{...styles.listCard, height: (height - 300) / 2}}
        contentContainerStyle={{paddingVertical: 20}}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <View style={styles.listItemContainer}>
            <TouchableOpacity
              style={styles.checkBox}
              onPress={
                foods.includes(item) ? () => onRemove(item) : () => onAdd(item)
              }>
              <Text>{foods.includes(item) ? '✓' : ''}</Text>
            </TouchableOpacity>
            <Text>{item}</Text>
          </View>
        )}
        data={allFoods}
      />
    </View>
  );
};

const allFoods: string[] = [
  'мясо',
  'рыба',
  'овощи',
  'фрукты',
  'фастфуд',
  'салаты',
  'выпечка',
  'сладости',
  'ягоды',
  'молочные продукты',
  'каши',
  'мюсли',
  'мясные полуфабрикаты',
  'морепродукты',
  'соевые продукты',
  'грибы',
].sort();
