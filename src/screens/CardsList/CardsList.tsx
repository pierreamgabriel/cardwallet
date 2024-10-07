import React, {useEffect, useRef, useState} from 'react';
import {View, Animated, Pressable, Text} from 'react-native';
import {Card} from '../../components/Card/Card';
import {useSelector} from 'react-redux';
import {cardsListSelector} from '../../state/selectors';
import {ActionButton} from '../../components/ActionButton/ActionButton';
import {FormInput} from '../../helpers/validateFormData';
import {styles} from './CardsListStyles';

const cardTypes = ['Green Card', 'Black Card'];

export const CardsList = () => {
  const cards = useSelector(cardsListSelector).cards;
  const [selectedCard, setSelectedCard] = useState<FormInput | null>(null);
  const animatedValue = useRef(new Animated.Value(1)).current;
  const animatedBottomCardValue = useRef(new Animated.Value(0)).current;
  const animatedFlatListValue = useRef(new Animated.Value(1)).current;

  const [cardOpacity, setCardOpacity] = useState(0.5);

  useEffect(() => {
    if (selectedCard) {
      Animated.spring(animatedBottomCardValue, {
        toValue: 1,
        useNativeDriver: true,
        friction: 3,
        tension: 40,
      }).start();
    } else {
      animatedBottomCardValue.setValue(0);
    }
  }, [animatedBottomCardValue, selectedCard]);

  const showSelectedCard = (card: FormInput, index: number) => {
    const cardType = cardTypes[index % cardTypes.length];
    setSelectedCard({...card, type: cardType});

    animatedValue.setValue(0);
    Animated.spring(animatedValue, {
      toValue: 1,
      useNativeDriver: true,
      friction: 3,
      tension: 40,
    }).start();
  };

  const hideSelectedCard = () => {
    setSelectedCard(null);
    animatedFlatListValue.setValue(0);
    Animated.spring(animatedFlatListValue, {
      toValue: 1,
      useNativeDriver: true,
      friction: 3,
      tension: 40,
    }).start();
  };

  const handleHiddenCardPress = () => {
    hideSelectedCard();
    setCardOpacity(0.5);
  };

  const renderBottomCard = () => {
    if (!selectedCard) {
      return null;
    }

    const selectedCardIndex = cards.findIndex(
      card => card.id === selectedCard.id,
    );

    const selectedCardType = cardTypes[selectedCardIndex % 2];

    const oppositeCardType =
      selectedCardType === 'Green Card' ? 'Black Card' : 'Green Card';

    let bottomCard = null;

    for (let i = selectedCardIndex + 1; i < cards.length; i++) {
      const currentCardType = cardTypes[i % 2];
      if (currentCardType === oppositeCardType) {
        bottomCard = cards[i];
        break;
      }
    }

    if (!bottomCard) {
      for (let i = selectedCardIndex - 1; i >= 0; i--) {
        const currentCardType = cardTypes[i % 2];
        if (currentCardType === oppositeCardType) {
          bottomCard = cards[i];
          break;
        }
      }
    }

    if (!bottomCard) {
      return null;
    }
    const flatListTranslateY = animatedBottomCardValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 100],
    });

    return (
      <Animated.View
        style={{
          ...styles.hiddenFlatList,
          transform: [{translateY: flatListTranslateY}],
        }}>
        <Pressable
          onPressIn={() => setCardOpacity(1)}
          onPressOut={() => setCardOpacity(0.5)}
          onPress={() => handleHiddenCardPress()}>
          <View style={{opacity: cardOpacity}}>
            <Card
              {...bottomCard}
              type={
                cardTypes[
                  cards.findIndex(card => card.id === bottomCard.id) % 2
                ]
              }
            />
          </View>
        </Pressable>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.title}>Meus cartões</Text>
      </View>
      {!selectedCard && (
        <View style={styles.flatListContainer}>
          <Animated.FlatList
            scrollEnabled
            style={{
              ...styles.flatList,
              transform: [
                {
                  translateY: animatedFlatListValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 0],
                  }),
                },
              ],
            }}
            data={cards}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              const marginTop = {marginTop: index > 0 ? -110 : 0};

              return (
                <Pressable
                  style={marginTop}
                  onPress={() => showSelectedCard(item, index)}>
                  <Card {...item} type={cardTypes[index % cardTypes.length]} />
                </Pressable>
              );
            }}
          />
          {cards.length > 0 && (
            <Text style={styles.useThisCard}>usar este cartão</Text>
          )}
        </View>
      )}
      {selectedCard && (
        <>
          <Animated.View
            style={{
              ...styles.hiddenCard,
              transform: [
                {
                  translateY: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 0],
                  }),
                },
              ],
              opacity: animatedValue,
            }}>
            <Card {...selectedCard} />
          </Animated.View>
          <View style={styles.actionButton}>
            <ActionButton
              title="pagar com este cartão"
              onPress={() => console.log('')}
            />
          </View>
        </>
      )}
      {selectedCard && renderBottomCard()}
    </View>
  );
};
