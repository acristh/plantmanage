import React from 'react';
import { 
  Text,
  StyleSheet 
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface EviromentButtonProps extends RectButtonProps{
  title: string;
  active?: boolean;
}

export function EnviromentButton({ 
    title, 
    active = false, 
    ...rest 
  } : EviromentButtonProps) {
  return (
    <RectButton
      style={[
        styles.container,
        active && styles.containerActive
      ]}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={[
        styles.text,
        active && styles.textActive
      ]}>
        {title}
      </Text>
    </RectButton>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    width: 76,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 5,
  },
  containerActive: {
    backgroundColor: colors.green_light,
  },
  textActive: {
    color: colors.green_dark,
    fontFamily: fonts.heading,
  },
  text: {
    color: colors.heading,
    fontFamily: fonts.text,
  },
});
