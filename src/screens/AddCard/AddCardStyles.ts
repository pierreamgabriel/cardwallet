import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  invisibleView: {
    height: 50,
  },
  inputsContainer: {
    width: '100%',
    rowGap: 40,
    marginBottom: 16,
  },
  doubleInputContainer: {
    width: '50%',
    flexDirection: 'row',
    columnGap: 16,
  },
});
