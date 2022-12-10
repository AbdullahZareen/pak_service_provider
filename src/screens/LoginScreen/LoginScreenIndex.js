import React, {useState} from 'react';
import LoginScreen from './LoginScreen';
import {useNavigation} from '@react-navigation/native';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {userLoggedIn, userLoggedOut} from '../../redux/User/UserSlice';
import {cartAdd, cartDelete} from '../../redux/User/CartSlice';
import {loginUser} from '../../services/APIs/AuthAPI';
import {Loader} from '../../components';

export default function LoginScreenIndex() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState(null);

  const dispatch = useDispatch();

  const onLoginPress = () => {
    setIsLoading(true);
    let loginParam = {
      email,
      password,
    };
    loginUser(loginParam)
      .then(res => {
        console.log('here is your response', res);
        dispatch(userLoggedIn(res.data));

        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        console.log(error);
        alert(error?.response?.data?.message);
      });
  };

  if (isLoading) {
    return (
      <View>
        <Loader />
      </View>
    );
  }
  return (
    <LoginScreen
      onPressLogin={onLoginPress}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      co
    />
  );
}
