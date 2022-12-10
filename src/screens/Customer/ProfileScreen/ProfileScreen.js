import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ColorConst} from '../../../constants';
import {Avatar} from '../../../components';
import {SizeClass} from '../../../utils/AppTheme';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
export default function ProfileScreen({onPressLogout}) {
  const {email, name} = useSelector(state => state.user);
  const renderProfileItem = (logo, text, icon) => {
    return (
      <TouchableOpacity onPress={onPressLogout}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            margin: SizeClass.DEFAULT_MARGIN,
          }}>
          <SimpleLineIcons name={logo} size={20} />
          <Text style={{marginLeft: SizeClass.DEFAULT_MARGIN}}>{text}</Text>
          <Feather
            name={icon}
            size={20}
            style={{position: 'absolute', right: SizeClass.DEFAULT_MARGIN}}
          />
        </View>
      </TouchableOpacity>
    );
  };
  const separator = () => {
    return (
      <View
        style={{
          width: SizeClass.getScreenWidthFromPercentage(73),
          height: 1,
          backgroundColor: ColorConst.grey,
          margin: SizeClass.DEFAULT_MARGIN,
        }}></View>
    );
  };
  const renderProfileExtraDetail = () => {
    return (
      <View
        style={{
          width: SizeClass.getScreenWidthFromPercentage(90),
          marginTop: SizeClass.DEFAULT_MARGIN,

          //  padding: SizeClass.DEFAULT_MARGIN,
          borderRadius: SizeClass.DEFAULT_MARGIN,
          borderWidth: 1,
          // shadowColor: ColorConst.grey,
          // shadowOpacity: 0.5,
          // shadowRadius: 2,
          // elevation: 12,
          // shadowOffset: {
          //   width: -1,
          //   height: 1,
          // },
        }}>
        {renderProfileItem('logout', 'Log out', 'chevron-right')}
        {/* {renderProfileItem('logout', 'Log out', 'chevron-right')} */}
        {/* {separator()} */}
      </View>
    );
  };
  const renderUserProfile = () => {
    return (
      <View>
        <View style={styles.blackBOx}>
          <Text
            style={{
              color: ColorConst.white,
              fontSize: SizeClass.scaleFont(14),
              marginTop: SizeClass.LARGE_MARGIN,
            }}>
            {name}
          </Text>
          <Text
            style={{
              color: ColorConst.white,
              fontSize: SizeClass.scaleFont(14),
            }}>
            {email}
          </Text>
        </View>
        <Avatar
          name={'ABDULLAH'}
          style={{alignSelf: 'center', position: 'absolute'}}
          textStyle={{}}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {renderUserProfile()}
      {renderProfileExtraDetail()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  justifyContent: 'center',
    //  alignItems: 'center',
    //  backgroundColor: ColorConst.white,
    alignItems: 'center',
    //margin: SizeClass.DEFAULT_MARGIN,
    backgroundColor: 'white',
  },
  blackBOx: {
    width: SizeClass.getScreenWidthFromPercentage(90),
    height: SizeClass.getScreenHeightFromPercentage(15),
    backgroundColor: 'black',
    borderRadius: SizeClass.DEFAULT_MARGIN,
    marginTop: SizeClass.LARGE_MARGIN * 2.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
