import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import {SizeClass} from '../../../utils/AppTheme';
import {Rating} from 'react-native-ratings';
import {ColorConst} from '../../../constants';
import {Button} from '../../../components';

export default function RatingScreen({
  rating,
  description,
  setDescription,
  setRating,
  onPressPublish,
}) {
  const renderRatingElements = () => {
    return (
      <>
        <View>
          <Text style={styles.heading}>Give Feedback</Text>
          <Text
            style={{
              marginStart: SizeClass.DEFAULT_MARGIN,
              fontSize: SizeClass.scaleFont(15),
            }}>
            How did we do?
          </Text>
          <Rating
            defaultRating={3}
            onFinishRating={setRating}
            style={{alignSelf: 'center', padding: SizeClass.LARGE_MARGIN}}
            ratingCount={5}
          />
          <Text
            style={{
              marginStart: SizeClass.DEFAULT_MARGIN,
              fontSize: SizeClass.scaleFont(15),
            }}>
            Detail Feedback
          </Text>
          <TextInput
            onChangeText={setDescription}
            style={{
              borderWidth: 1,
              marginStart: SizeClass.DEFAULT_MARGIN,
              width: SizeClass.getScreenWidthFromPercentage(92),
              justifyContent: 'flex-start',
              textAlignVertical: 'top',
              padding: SizeClass.SMALL_MARGIN,
              borderRadius: SizeClass.SMALL_MARGIN,
              fontSize: SizeClass.scaleFont(15),
              fontWeight: '600',
            }}
            value={description}
            multiline={true}
            numberOfLines={4}
          />

          <Button
            style={{
              width: SizeClass.getScreenWidthFromPercentage(92),
              height: SizeClass.getScreenWidthFromPercentage(10),
              backgroundColor: ColorConst.button,
              borderRadius: 10,
              alignSelf: 'center',
              marginTop: SizeClass.LARGE_MARGIN * 2,
            }}
            textStyle={{color: ColorConst.white}}
            title="PUBLISH FEEDBACK"
            onPress={onPressPublish}
          />
        </View>
      </>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {renderRatingElements()}
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: SizeClass.scaleFont(30),
    fontWeight: '700',
    marginStart: SizeClass.DEFAULT_MARGIN,
  },
});
