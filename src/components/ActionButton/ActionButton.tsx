import React from 'react';
import {DimensionValue, Pressable, Text} from 'react-native';
import { styles } from './ActionButtonStyles';

interface ActionButtonProps {
  title: string;
  bgColor?: string;
  titleColor?: string;
  disabled?: boolean;
  onPress: () => void;
  width?: DimensionValue;
}
export const ActionButton = (props: ActionButtonProps) => {
  const getStyles = (type: 'container' | 'title') => {
    if (type === 'container') {
      if (props.disabled) {
        return '#EEEEEE';
      }
      return props.bgColor ?? '#12C2E9';
    }

    if (type === 'title') {
      if (props.disabled) {
        return '#BBBBBB';
      }
      return props.titleColor ?? '#ffffff';
    }
  };
  return (
    <Pressable
      disabled={props.disabled}
      style={{
        ...styles.container,
        backgroundColor: getStyles('container'),
        ...(props.width && {width: props.width}),
      }}
      onPress={props.onPress}>
      <Text style={{...styles.title, color: getStyles('title')}}>
        {props.title}
      </Text>
    </Pressable>
  );
};
