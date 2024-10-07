import React from 'react';
import {Text, View} from 'react-native';
import {WalletTile} from '../../components/WalletTitle/WalletTitle';
import {Header} from '../../components/Header/Header';
import {CommonBackground} from '../../components/CommonBackground/CommonBackground';
import {useSelector} from 'react-redux';
import {addCardSelector} from '../../state/selectors';
import {RouteProp, useRoute} from '@react-navigation/native';
import {Card} from '../../components/Card/Card';
import {ActionButton} from '../../components/ActionButton/ActionButton';
import {useAppNavigation} from '../../navigation/useAppNavigation';
import {StackParams} from '../../navigation/navigationTypes';
import {styles} from './ShowCardStyles';

export const ShowCard = () => {
  const navigation = useAppNavigation();
  const route = useRoute<RouteProp<StackParams, 'ShowCard'>>();
  const addCardState = useSelector(addCardSelector);
  const message = addCardState.success
    ? 'cartão cadastrado com sucesso'
    : 'houve um erro no cadastro do cartão';
  return (
    <CommonBackground>
      <Header title="cadastro" />
      <View style={styles.container}>
        <WalletTile />
        <Text style={styles.message}>{message}</Text>
        <View style={styles.cardContainer}>
          <Card {...route.params.formInput} type="Black Card" />
        </View>
        <ActionButton
          title="avançar"
          bgColor="#12C2E9"
          titleColor="#ffffff"
          width={300}
          onPress={() => navigation.navigate('AnimatedScreen')}
        />
      </View>
    </CommonBackground>
  );
};
