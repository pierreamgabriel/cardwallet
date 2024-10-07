import React from 'react';
import {View} from 'react-native';
import {ActionButton} from '../../components/ActionButton/ActionButton';
import {CommonBackground} from '../../components/CommonBackground/CommonBackground';
import {WalletTile} from '../../components/WalletTitle/WalletTitle';
import {useAppNavigation} from '../../navigation/useAppNavigation';
import {styles} from './HomeStyles';

export const Home = () => {
  const navigation = useAppNavigation();
  return (
    <CommonBackground>
      <View style={styles.container}>
        <WalletTile />
        <View style={styles.buttonsContainer}>
          <ActionButton
            title="meus cartões"
            bgColor="#12C2E9"
            titleColor="#ffffff"
            onPress={() => navigation.navigate('AnimatedScreen')}
          />
          <ActionButton
            title="cadastrar cartão"
            bgColor="#A5FF32"
            titleColor="#142995"
            onPress={() => navigation.navigate('AddCard')}
          />
        </View>
      </View>
    </CommonBackground>
  );
};
