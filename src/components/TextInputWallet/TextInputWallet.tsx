import React from 'react';
import {
  DimensionValue,
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import {styles} from './TextInputStyles';

interface TextInputWalletProps {
  onChangeText: (text: string) => void;
  error: boolean;
  width?: DimensionValue;
  label: string;
  iconLeft?: ImageSourcePropType;
  value: string;
  placeholder?: string;
  secureTextEntry?: boolean;
}
export const TextInputWallet = (props: TextInputWalletProps) => {
  const getStyles = () => {
    return [
      {width: props.width ?? '100%', paddingLeft: props.iconLeft ? 52 : 10},
      props.error && {borderColor: 'red', borderWidth: 1},
    ];
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      {props.iconLeft && (
        <Pressable style={styles.icon}>
          <Image source={props.iconLeft} />
        </Pressable>
      )}
      <TextInput
        style={[styles.textInputcontainer, ...getStyles()]}
        value={props.value}
        onChangeText={v => props.onChangeText(v)}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};
