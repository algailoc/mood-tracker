import {StyleSheet} from 'react-native';

// palette
// #042A2B
// #5EB1BF
// #54F2F2
// #FCFCFC
// #F4E04D

export const MoodCardStyles = StyleSheet.create({
  moodCard: {
    backgroundColor: '#5EB1BF',
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderRadius: 16,
    marginHorizontal: 10,
    elevation: 2,
  },

  listHeader: {
    fontSize: 18,
    fontWeight: '700',
  },

  listText: {
    fontSize: 16,
    marginVertical: 3,
  },

  column: {
    width: '48%',
    borderRadius: 12,
    backgroundColor: '#FCFCFC',
    padding: 5,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  tooltipContainer: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: 'white',
  },
});
