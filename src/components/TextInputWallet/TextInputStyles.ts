import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  textInputcontainer: {
    borderRadius: 6,
    paddingRight: 16,
    height: 45,
    backgroundColor: '#ffffff',
    textAlignVertical: 'center',
  },
  label: {
    fontFamily: 'PTSans-Regular',
    fontSize: 14,
    lineHeight: 16,
    color: '#ffffff',
    marginBottom: 16,
  },
  icon: {
    position: 'absolute',
    top: 40,
    left: 12,
    zIndex: 999,
  },
});
