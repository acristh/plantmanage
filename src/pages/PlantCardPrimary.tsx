import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';
import { SvgFromUri } from 'react-native-svg';

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

interface PlantProps extends RectButtonProps{
  data:{
    photo: string;
    name: string;
  }
}

export const PlantCardPrimary = ({ data, ...rest}: PlantProps) => {
  return (
    <RectButton 
      style={styles.container}
      {...rest}
    >
      <SvgFromUri 
        uri={data.photo}
        width={73}
        height={89}
      />
      <Text style={styles.text}>{data.name}</Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '45%',
    height: 154,
    backgroundColor: colors.shape,
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,

  },
  text: {
    color: colors.green_dark,
    fontSize: 13,
    fontFamily: fonts.heading,
    marginVertical: 16,
    textAlign: 'center',
    lineHeight: 23,
  },
})