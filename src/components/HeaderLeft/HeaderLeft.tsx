import React from 'react';
import BackButton from '../../assets/images/btn-back.png';
import {Image, Pressable} from 'react-native';
import {useAppNavigation} from '../../navigation/useAppNavigation';
import {styles} from './HeaderLeftStyles';

export const HeaderLeft = () => {
  const navigation = useAppNavigation();
  return (
    <Pressable onPress={() => navigation.navigate('Home')}>
      <Image style={styles.image} source={BackButton} />
    </Pressable>
  );
};
