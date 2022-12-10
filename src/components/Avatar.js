import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SizeClass} from '../utils/AppTheme';
import {ColorConst} from '../constants';

export default function Avatar({name, style, textStyle}) {
  return (
    <View style={[styles.container, style]}>
      <Text
        style={[
          {
            fontSize: SizeClass.scaleFont(40),
            fontWeight: '700',
            color: ColorConst.white,
          },
          textStyle,
        ]}>
        {name.charAt(0).toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: SizeClass.getScreenHeightFromPercentage(12),
    height: SizeClass.getScreenHeightFromPercentage(12),
    borderWidth: 2,
    borderRadius: SizeClass.getScreenHeightFromPercentage(25),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    backgroundColor: 'orange',
  },
});
