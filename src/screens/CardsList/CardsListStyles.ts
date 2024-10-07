import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');
const horizontalPos = width / 2 - 150;
const verticalPos = height * 0.5 - 180;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#142995',
  },
  flatListContainer: {
    position: 'absolute',
    top: height / 2 - 180,
    width: '100%',
    alignItems: 'center',
  },
  flatList: {
    flexGrow: 0,
    maxHeight: height * 0.5,
  },
  topView: {
    position: 'absolute',
    top: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: 68,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  title: {
    fontFamily: 'PTSans-Regular',
    color: '#12C2E9',
    fontSize: 20,
  },
  useThisCard: {
    fontFamily: 'PTSans-Regular',
    color: '#ffffff',
    fontSize: 16,
    marginTop: 16,
    textAlign: 'center',
  },
  actionButton: {
    marginTop: 300,
    width: 300,
  },
  hiddenFlatList: {
    position: 'absolute',
    bottom: 0,
    left: horizontalPos,
  },
  hiddenCard: {
    position: 'absolute',
    left: horizontalPos,
    top: verticalPos,
  },
});
