import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import { FormInput } from '../helpers/validateFormData';

export type StackParams = {
  Home: undefined;
  AddCard: undefined;
  ShowCard: {formInput: FormInput};
  AnimatedScreen: undefined;
  CardsList: undefined;
};

export type AppNavigationProp = NativeStackNavigationProp<StackParams>;
export type AppRouteProp<RouteName extends keyof StackParams> = RouteProp<
  StackParams,
  RouteName
>;
