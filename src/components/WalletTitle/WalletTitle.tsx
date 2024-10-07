import { useFocusEffect } from '@react-navigation/native';
import React, {useRef} from 'react';
import {Text, Animated} from 'react-native';
import { styles } from './WalletTitleStyles';

export const WalletTile = ({fromBottom = false}) => {
  const translateY = useRef(new Animated.Value(fromBottom ? 50 : -50)).current;

  useFocusEffect(
    React.useCallback(() => {
      translateY.setValue(fromBottom ? 100 : -100);
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
        friction: 3,
        tension: 80,
      }).start();
    }, [fromBottom, translateY])
  );

  return (
    <Animated.View style={{transform: [{translateY}]}}>
      <Text style={styles.text}>Wallet Test</Text>
    </Animated.View>
  );
};
