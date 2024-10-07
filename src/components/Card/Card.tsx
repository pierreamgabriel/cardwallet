import React from 'react';
import {Text, View} from 'react-native';
import {FormInput} from '../../helpers/validateFormData';
import {styles} from './CardStyles';

interface CardProps extends FormInput {
  type?: string;
}
export const Card = (props: CardProps) => {
  const textColor = props.type === 'Black Card' ? '#ffffff' : '#3F3F3F';
  const getBgColor = () => {
    if (props.type === 'Black Card') {
      return '#000000';
    }
    return '#A5FF32';
  };
  return (
    <View style={{...styles.container, backgroundColor: getBgColor()}}>
      <Text style={{...styles.title, color: textColor}}>{props.type}</Text>
      <Text style={{...styles.text, ...styles.name, color: textColor}}>
        {props.name}
      </Text>
      <View style={styles.cardNumberContainer}>
        <Text style={{...styles.dots, color: textColor}}>
          {props.number.slice(0, -4).replace(/\d/g, '•')}
        </Text>
        <Text style={{...styles.text, color: textColor}}>
          {props.number.slice(-4)}
        </Text>
      </View>
      <Text style={{...styles.text, color: textColor}}>
        Validade {props.expiration}
      </Text>
    </View>
  );
};
