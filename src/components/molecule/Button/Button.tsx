import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';
import {ms, mvs} from 'react-native-size-matters';

import {Gap} from '../..';
import Font from '../../../theme/Font';
import Color from '../../../theme/Color';
import {widthResponsive} from '../../../utils';

interface ButtonProps {
  label: string;
  type?: string;
  borderColor?: string;
  containerStyles?: ViewStyle;
  textStyles?: TextStyle | undefined;
  disabled?: boolean;
  onPress?: () => void;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    type,
    label,
    borderColor,
    containerStyles,
    textStyles,
    disabled,
    onPress,
  } = props;

  const withBorder = type === 'border' && {
    borderWidth: ms(1),
    borderColor: borderColor ? borderColor : Color.Success[400],
    backgroundColor: 'transparent',
  };

  return (
    <TouchableOpacity
      style={[styles.root, withBorder, containerStyles]}
      disabled={disabled}
      testID={'ssu-button'}
      onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={[styles.labelStyle, textStyles]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    width: widthResponsive(279),
    height: undefined,
    aspectRatio: widthResponsive(279 / 40),
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.Success[400],
  },
  labelStyle: {
    fontSize: mvs(12),
    color: Color.Neutral[10],
    fontFamily: Font.InterMedium,
  },
});
