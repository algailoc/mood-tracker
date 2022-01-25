import {StyleSheet} from 'react-native';

// palette
// #042A2B
// #5EB1BF
// #54F2F2
// #FCFCFC
// #F4E04D

export const ActivitiesListStyles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 12,
  },
  listCard: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 6,
    borderColor: '#F4E04D',
    backgroundColor: '#FCFCFC',
    elevation: 5,
  },
  listItemContainer: {
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBox: {
    height: 30,
    width: 30,
    borderRadius: 6,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
});
