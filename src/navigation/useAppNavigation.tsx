import {useNavigation as useNativeNavigation} from '@react-navigation/native';
import {AppNavigationProp} from './navigationTypes';

export const useAppNavigation = () => {
  return useNativeNavigation<AppNavigationProp>();
};
