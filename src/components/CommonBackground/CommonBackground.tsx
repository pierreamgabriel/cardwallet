import React from 'react';
import {View} from 'react-native';
import TopElement from '../../assets/images/element-background-up.svg';
import BottomElement from '../../assets/images/element-background-down.svg';
import { styles } from './CommonBackgroundStyles';

export const CommonBackground = ({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) => {
  return (
    <View style={styles.container}>
      <TopElement style={styles.topElement} />
      <BottomElement style={styles.bottomElement} />
      {children}
    </View>
  );
};


