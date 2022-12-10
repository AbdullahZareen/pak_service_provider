import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {Text, Toggle, Button} from '../../components';
import {SizeClass} from '../../utils/AppTheme';
import TextInput from '../../components/TextInput';
// import LinearGradient from 'react-native-linear-gradient';
import {
  ColorConst,
  ImageConst,
  ScreenConst,
  StringConst,
} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

export default function LoginScreen(props) {
  const [isOn, setIsOn] = useState(false);
  const navigation = useNavigation();
  const {
    onPressLogin,
    email,
    setEmail,
    password,
    setPassword,
    modalVisible,
    setModalVisible,
  } = props;
  const renderModalSignup = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              flex: 1,
            }}
            onPressOut={() => setModalVisible(false)}>
            <View style={styles.modalContainerView}>
              <Text style={{margin: SizeClass.LARGE_MARGIN, fontWeight: '700'}}>
                {StringConst.SignUp} as
              </Text>

              <View
                style={{
                  marginTop: SizeClass.DEFAULT_MARGIN,
                  alignItems: 'center',
                }}>
                <Button
                  title={'Customer'}
                  style={{
                    backgroundColor: ColorConst.button,
                    height: SizeClass.getScreenHeightFromPercentage(5),
                    borderRadius: SizeClass.DEFAULT_MARGIN,
                  }}
                  textStyle={{color: ColorConst.white}}
                  onPress={() => {
                    setModalVisible(false);
                    navigation.navigate(ScreenConst.SIGNUP_SCREEN);
                  }}
                />
                <Text>or</Text>
                <Button
                  title={'Mechanic'}
                  style={{
                    backgroundColor: ColorConst.button,
                    height: SizeClass.getScreenHeightFromPercentage(5),
                    borderRadius: SizeClass.DEFAULT_MARGIN,
                  }}
                  textStyle={{color: ColorConst.white}}
                  onPress={() => {
                    setModalVisible(false);
                    navigation.navigate(ScreenConst.SIGNUP_MECHANIC_SCREEN);
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  };

  const renderLoginScreen = () => {
    return (
      <>
        <View style={{marginTop: SizeClass.getScreenHeightFromPercentage(18)}}>
          <Text style={styles.heading}>Welcome Back</Text>

          <TextInput
            onChange={setEmail}
            defaultValue={email}
            style={{
              marginTop: SizeClass.LARGE_MARGIN,
              borderRadius: SizeClass.LARGE_MARGIN * 2,
              paddingStart: SizeClass.LARGE_MARGIN,
            }}
            placeHolder="Email"
          />

          <TextInput
            style={{
              marginTop: SizeClass.DEFAULT_MARGIN,
              borderRadius: SizeClass.LARGE_MARGIN * 2,
              paddingStart: SizeClass.LARGE_MARGIN,
            }}
            placeHolder="Password"
            onChange={setPassword}
            secureTextEntry={true}
            value={password}
          />

          <View
            style={{
              marginTop: SizeClass.getScreenHeightFromPercentage(5),
            }}>
            <Button
              title={StringConst.SignIn}
              style={{
                backgroundColor: '#488FB1',
                width: SizeClass.getScreenWidthFromPercentage(80),
                height: SizeClass.getScreenHeightFromPercentage(5),
              }}
              textStyle={{color: 'black', fontSize: SizeClass.scaleFont(16)}}
              onPress={onPressLogin}
            />
          </View>

          {renderModalSignup()}
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginBottom: SizeClass.LARGE_MARGIN,
              alignSelf: 'center',
            }}>
            <Text>Don't have account yet ?</Text>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(true);
              }}>
              <Text style={{color: ColorConst.blue}}>
                {' ' + StringConst.SignUp}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      {renderLoginScreen()}
      <FastImage
        source={ImageConst.homeLog}
        style={{
          width: SizeClass.getScreenWidthFromPercentage(40),
          height: SizeClass.getScreenHeightFromPercentage(30),
          position: 'absolute',
        }}
        resizeMode={'contain'}
      />
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
    paddingTop: SizeClass.getScreenHeightFromPercentage(10),
    fontSize: SizeClass.scaleFont(30),
    fontWeight: '900',
    color: ColorConst.black,
    alignSelf: 'center',
  },
  emailText: {
    paddingTop: SizeClass.getScreenHeightFromPercentage(4),
    fontSize: SizeClass.scaleFont(15),
    color: ColorConst.black,
  },
  modalContainerView: {
    position: 'absolute',
    borderRadius: SizeClass.LARGE_MARGIN,
    // alignItems: 'center',

    width: SizeClass.getScreenWidthFromPercentage(70),
    height: SizeClass.getScreenHeightFromPercentage(30),
    alignItems: 'center',
    borderWidth: 2,
    backgroundColor: ColorConst.textbackGround,
    top: SizeClass.getScreenHeightFromPercentage(35),
    alignSelf: 'center',
  },
});
