import React, {useState} from 'react';
import {ActivityIndicator, View} from 'react-native';

import FastImage from 'react-native-fast-image';
import {ColorConst, ImageConst} from '../constants';

export default function CustomFastImage(props) {
  const [isLoading, setIsLoading] = useState(true);

  const renderImage = source => {
    if (source?.uri === null || source?.uri === '') {
      return ImageConst.placeHolder;
    } else {
      return source;
    }
  };
  return (
    <>
      <FastImage
        style={{width: 200, height: 200, borderWidth: 1}}
        resizeMode={props.resizeMode}
        {...props}
        source={renderImage(props?.source)}
        onLoadStart={() => {
          setIsLoading(true);
        }}
        onLoadEnd={() => {
          setIsLoading(false);
        }}>
        {props.showLoader && isLoading && (
          <View style={{flex: 1}}>
            <Text>Loading....</Text>

            {/* <ActivityIndicator
              style={props.style}
              size="large"
              color={ColorConst.theme}
            /> */}
          </View>
        )}
      </FastImage>
    </>
  );
}
