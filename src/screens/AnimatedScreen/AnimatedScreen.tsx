import React, {useEffect, useRef} from 'react';
import {Animated, View} from 'react-native';
import TopElement from '../../assets/images/background-up-big.svg';
import BottomElement from '../../assets/images/background-down-big.svg';
import Wallet from '../../assets/images/wallet.png';
import {useDispatch} from 'react-redux';
import {GetCardsAction} from '../../state/CardsList/CardsListActions';
import {useAppNavigation} from '../../navigation/useAppNavigation';
import {styles} from './AnimatedScreenStyles';
import {useIsFocused} from '@react-navigation/native';

export const AnimatedScreen = () => {
  const navigation = useAppNavigation();
  const dispatch = useDispatch();
  const topLeftImageTranslate = useRef(
    new Animated.ValueXY({x: 0, y: 0}),
  ).current;
  const bottomRightImageTranslate = useRef(
    new Animated.ValueXY({x: 0, y: 0}),
  ).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const isFocused = useIsFocused();

  useEffect(() => {
    Animated.parallel([
      Animated.spring(topLeftImageTranslate, {
        toValue: {x: 120, y: 167},
        useNativeDriver: false,
      }),
      Animated.spring(bottomRightImageTranslate, {
        toValue: {x: -120, y: -167},
        useNativeDriver: false,
      }),
    ]).start();
  }, [bottomRightImageTranslate, topLeftImageTranslate, isFocused]);

  useEffect(() => {
    dispatch(GetCardsAction());
    const timeout1 = setTimeout(() => {
      navigation.navigate('CardsList');
      setTimeout(() => {
        topLeftImageTranslate.setValue({x: 0, y: 0});
        bottomRightImageTranslate.setValue({x: 0, y: 0});
        scaleAnim.setValue(1);
      }, 500);
    }, 1500);
    const timeout2 = setTimeout(() => {
      Animated.timing(scaleAnim, {
        toValue: 2,
        duration: 350,
        useNativeDriver: true,
      }).start();
    }, 800);
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [dispatch, navigation, scaleAnim, isFocused, topLeftImageTranslate, bottomRightImageTranslate]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={Wallet}
        style={[styles.wallet, {transform: [{scale: scaleAnim}]}]}
      />
      <Animated.View
        style={[
          styles.topElement,
          {
            transform: [
              {translateX: topLeftImageTranslate.x},
              {translateY: topLeftImageTranslate.y},
            ],
          },
        ]}>
        <TopElement />
      </Animated.View>
      <Animated.View
        style={[
          styles.bottomElement,
          {
            transform: [
              {translateX: bottomRightImageTranslate.x},
              {translateY: bottomRightImageTranslate.y},
            ],
          },
        ]}>
        <BottomElement />
      </Animated.View>
    </View>
  );
};
