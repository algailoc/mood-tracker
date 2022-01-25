import {StyleSheet} from 'react-native';

// palette
// #042A2B
// #5EB1BF
// #54F2F2
// #FCFCFC
// #F4E04D

export const DateCardStyles = StyleSheet.create({
  card: {
    marginVertical: 12,
    width: '100%',
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderRadius: 8,
    borderColor: '#5EB1BF',
    borderWidth: 1,
    elevation: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  columnHeader: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
});
