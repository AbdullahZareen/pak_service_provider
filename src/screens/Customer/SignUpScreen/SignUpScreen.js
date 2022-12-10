import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  ColorConst,
  ImageConst,
  ScreenConst,
  StringConst,
} from '../../../constants';
import {SizeClass} from '../../../utils/AppTheme';
import {Button, TextInput, Text} from '../../../components';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import DropDownPicker from 'react-native-dropdown-picker';
import {cityName} from '../../../utils/Utility';
export default function SignUpScreen(props) {
  const {
    name,
    email,
    password,
    number,
    setEmail,
    setName,
    setNumber,
    setPassword,
    onPressSignUp,
    city,
    setCity,
    open,
    setOpen,
  } = props;
  const navigation = useNavigation();
  const renderSignUpScreen = () => {
    return (
      <>
        <View style={{marginTop: -SizeClass.getScreenHeightFromPercentage(10)}}>
          {/* <View style={{alignSelf: 'flex-start'}}> */}
          <Text style={styles.heading}>Register</Text>
          {/* </View> */}

          <TextInput
            placeHolder="Full Name"
            onChange={setName}
            defaultValue={name}
            style={styles.text}
          />

          <TextInput
            placeHolder="Email"
            onChange={setEmail}
            defaultValue={email}
            style={styles.text}
          />
        </View>
        <View>
          <TextInput
            placeHolder="Mobile No"
            onChange={setNumber}
            defaultValue={number}
            style={styles.text}
          />
        </View>
        <View>
          <TextInput
            placeHolder="Password"
            onChange={setPassword}
            defaultValue={password}
            secureTextEntry={true}
            style={styles.text}
          />
        </View>
        <DropDownPicker
          open={open}
          value={city}
          items={cityName}
          setOpen={setOpen}
          setValue={setCity}
          style={{
            width: SizeClass.getScreenWidthFromPercentage(80),
            alignSelf: 'center',
            backgroundColor: ColorConst.textbackGround,
            marginTop: SizeClass.DEFAULT_MARGIN,
            borderColor: ColorConst.textbackGround,
          }}
          dropDownContainerStyle={{
            width: SizeClass.getScreenWidthFromPercentage(80),
            backgroundColor: ColorConst.textbackGround,
            alignSelf: 'center',
            borderColor: ColorConst.textbackGround,
          }}
          placeholder={'Select City'}
        />
        <View
          style={{
            margin: SizeClass.getScreenHeightFromPercentage(5),
            alignSelf: 'flex-end',
          }}>
          <Button
            title={StringConst.SignUp}
            style={{
              backgroundColor: '#488FB1',
              width: SizeClass.getScreenWidthFromPercentage(80),
              height: SizeClass.getScreenHeightFromPercentage(5),
            }}
            // textStyle={{color: 'black', fontSize: SizeClass.scaleFont(16)}}
            onPress={onPressSignUp}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: SizeClass.LARGE_MARGIN,
            alignSelf: 'center',
          }}>
          <Text>
            {'\n\n\n'}
            Already have an account ?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(ScreenConst.SIGNIN_SCREEN);
            }}>
            <Text style={{color: ColorConst.blue}}>
              {'\n\n\n ' + StringConst.SignIn}
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };
  return (
    <View style={styles.container}>
      <FastImage
        source={ImageConst.clientlogo}
        style={{
          width: SizeClass.getScreenWidthFromPercentage(35),
          height: SizeClass.getScreenHeightFromPercentage(25),
        }}
        resizeMode={'contain'}
      />
      {renderSignUpScreen()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  heading: {
    alignSelf: 'flex-start',
    paddingTop: SizeClass.getScreenHeightFromPercentage(6),
    fontSize: SizeClass.scaleFont(30),
    fontWeight: '900',
    color: ColorConst.black,
  },
  emailText: {
    paddingTop: SizeClass.getScreenHeightFromPercentage(2),
    fontSize: SizeClass.scaleFont(15),
    color: ColorConst.black,
    marginBottom: SizeClass.SMALL_MARGIN,
  },
  text: {
    marginTop: SizeClass.DEFAULT_MARGIN,
    borderRadius: SizeClass.LARGE_MARGIN * 2,
    paddingStart: SizeClass.LARGE_MARGIN,
  },
});
