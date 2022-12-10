import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SizeClass} from '../utils/AppTheme';
import {ColorConst} from '../constants';

export default function TextComponent(props) {
  const {font, fontFamily, style} = props;
  return <Text {...props} style={[styles.text, style]}></Text>;
}

const styles = StyleSheet.create({
  text: {fontSize: SizeClass.scaleFont(14), fontWeight: '500', color: 'black'},
});
