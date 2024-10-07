import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import BackButton from '../../assets/images/btn-back.png';
import {useNavigation} from '@react-navigation/native';
import {styles} from './HeaderStyles';

export const Header = ({title}: {title: string}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.imageContainer}
        onPress={() => navigation.goBack()}>
        <Image style={styles.image} source={BackButton} />
      </Pressable>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};
