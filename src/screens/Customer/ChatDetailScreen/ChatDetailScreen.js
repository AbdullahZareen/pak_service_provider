import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SizeClass} from '../../../utils/AppTheme';
import {ColorConst} from '../../../constants';
import {Button, TextInput} from '../../../components';
import {getTime} from '../../../utils/Utility';
export default function ChatDetailScreen({
  onPressButton,
  setMessage,
  message,
  data,
}) {
  const [reference, setReference] = useState(null);
  const renderAllChatHistory = () => {
    return (
      <>
        <View
          style={
            {
              // borderWidth: 1,
              // // position: 'absolute',
              // width: SizeClass.SCREEN_WIDTH,
              // bottom: SizeClass.DEFAULT_MARGIN,
            }
          }>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            style={{marginBottom: SizeClass.LARGE_MARGIN * 3}}
            ref={ref => {
              setReference(ref);
            }}
            onContentSizeChange={() =>
              data.length >= 7 && reference.scrollToEnd()
            }
          />
        </View>
      </>
    );
  };
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          width: SizeClass.getScreenWidthFromPercentage(75),
          // height: SizeClass.getScreenWidthFromPercentage(13),
          padding: SizeClass.SMALL_MARGIN,
          borderWidth: 1,
          marginStart:
            item?.sender == 'customer' ? SizeClass.DEFAULT_MARGIN : 0,
          marginEnd: item?.sender == 'customer' ? SizeClass.DEFAULT_MARGIN : 0,
          borderRadius: SizeClass.SMALL_MARGIN,
          marginBottom: SizeClass.SMALL_MARGIN / 1.7,
          backgroundColor:
            item?.sender == 'customer'
              ? ColorConst.button
              : ColorConst.textbackGround,
          alignSelf: item?.sender == 'customer' ? 'flex-end' : 'flex-start',
        }}>
        <Text
          style={{
            color:
              item?.sender == 'customer' ? ColorConst.white : ColorConst.black,
          }}>
          {item?.text}
        </Text>
        <Text
          style={{
            textAlign: 'right',
            color:
              item?.sender === 'customer' ? ColorConst.white : ColorConst.black,
            marginBottom: -SizeClass.SMALL_MARGIN,
          }}>
          {getTime(item?.timeStamp)}
        </Text>
      </View>
    );
  };
  const renderMessageTextInput = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: SizeClass.SMALL_MARGIN,
        }}>
        <TextInput
          placeHolder="Message"
          onChange={setMessage}
          defaultValue={message}
          multiline={true}
          numberOfLines={2}
          onPress={data.length >= 7 && reference.scrollToEnd()}
        />
        <Button
          title="Send"
          style={{
            width: SizeClass.getScreenWidthFromPercentage(18),
            marginStart: SizeClass.SMALL_MARGIN / 2,
            borderRadius: 10,
            backgroundColor: 'grey',
            alignSelf: 'flex-end',
          }}
          textStyle={{color: ColorConst.white}}
          onPress={onPressButton}></Button>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* <GiftedChat
        messages={data}
        onSend={messages => onSend(messages)}
        onInputTextChanged={setMessage}
      /> */}
      {renderAllChatHistory()}

      {renderMessageTextInput()}
    </View>
  );
}

const styles = StyleSheet.create({});
