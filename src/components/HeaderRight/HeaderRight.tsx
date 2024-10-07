import React from 'react';
import PlusButton from '../../assets/images/btn-plus.png';
import {Image, Pressable} from 'react-native';
import { useAppNavigation } from '../../navigation/useAppNavigation';
import { styles } from './HeaderRightStyles';


export const HeaderRight = () => {
  const navigation = useAppNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('AddCard')}>
      <Image style={styles.image} source={PlusButton} />
    </Pressable>
  );
};
