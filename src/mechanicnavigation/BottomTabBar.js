import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { FastImage } from "../components";

import {Text} from '../components';
import {ColorConst} from '../constants';
import {SizeClass} from '../utils/AppTheme';

export default function BottomTabBar({
  state,
  descriptors,
  navigation,
  ...props
}) {
  return (
    <View
      style={{
        backgroundColor: 'white',
        height: SizeClass.SCREEN_HEIGHT * 0.1,
        paddingHorizontal: SizeClass.DEFAULT_MARGIN,
        justifyContent: 'center',
        paddingBottom: SizeClass.SMALL_MARGIN,
      }}
      {...props}>
      <View
        style={{
          height: 0.5,
          width: SizeClass.SCREEN_WIDTH,
          backgroundColor: 'gray',
          position: 'absolute',
          top: 0,
        }}></View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          paddingVertical: SizeClass.SCREEN_HEIGHT * 0.01,
        }}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const {nameIcon} = route.params;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              activeOpacity={1}
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={route.params.testID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                backgroundColor: null,
                justifyContent: 'center',
                alignItems: 'center',
                height: SizeClass.SCREEN_HEIGHT * 0.05,
              }}>
              <View
                style={[
                  {
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                ]}>
                {/* <View> */}
                {/* <FastImage
                    style={{
                      width: SizeClass.SCREEN_WIDTH / 11,
                      height: SizeClass.SCREEN_WIDTH / 11,
                    }}
                    source={isFocused ? activeIcon : inactiveIcon}
                  ></FastImage> */}

                <MaterialCommunityIcons
                  name={nameIcon}
                  size={30}
                  style={{color: isFocused ? ColorConst.button : '#222'}}
                />
                <Text style={{color: isFocused ? ColorConst.button : '#222'}}>
                  {label}
                </Text>
                {/* </View> */}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
