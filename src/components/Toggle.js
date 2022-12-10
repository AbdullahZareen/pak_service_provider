import * as React from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Toggle({
  isOn,
  onColor = 'orange',
  offColor = 'grey',
  style,
  onToggle,
  labelStyle,
  label,
}) {
  let animatedValue = new Animated.Value(0);
  const color = isOn ? onColor : offColor;
  animatedValue.setValue(isOn ? 0 : 1);
  const moveToggle = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 20],
  });
  Animated.timing(animatedValue, {
    toValue: isOn ? 1 : 0,
    duration: 200,
    useNativeDriver: false,
    easing: Easing.linear,
  }).start();

  return (
    <View style={styles.container}>
      {/* {!!label && <Text style={[styles.label, labelStyle]}>{label}</Text>} */}

      <TouchableOpacity
        onPress={() => {
          typeof onToggle === 'function' && onToggle();
        }}>
        <View style={[styles.toggleContainer, style, {backgroundColor: color}]}>
          <Animated.View
            style={[
              styles.toggleWheelStyle,
              {
                marginLeft: moveToggle,
              },
            ]}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleContainer: {
    width: 50,
    height: 30,
    marginLeft: 3,
    borderRadius: 15,
    justifyContent: 'center',
  },
  label: {
    marginRight: 2,
  },
  toggleWheelStyle: {
    width: 25,
    height: 25,
    backgroundColor: 'white',
    borderRadius: 12.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 1.5,
    paddingStart: 5,
  },
});
