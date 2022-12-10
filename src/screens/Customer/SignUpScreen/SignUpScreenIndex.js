import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SignUpScreen from './SignUpScreen';
import {signupCustomer} from '../../../services/APIs/AuthAPI';
import {useNavigation} from '@react-navigation/native';
import {ScreenConst} from '../../../constants';

export default function SignUpScreenIndex() {
  const navigation = useNavigation();
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [number, setNumber] = useState(null);
  const [password, setPassword] = useState(null);
  const [city, setCity] = useState('Rwp');
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onPressSignUp = () => {
    if (
      name === null ||
      email === null ||
      number == null ||
      password == null ||
      city == null
    ) {
      alert('please fill the filed properly');
      return;
    }
    setIsLoading(true);
    setIsLoading;
    let params = {
      name: name,
      email: email,
      phone_no: number,
      city: city,
      password: password,
    };
    signupCustomer(params)
      .then(res => {
        console.log(res.data);
        if (res.status === 201) {
          navigation.navigate(ScreenConst.CONFIRMATION_SCREEN, {
            screenName: ScreenConst.SIGNIN_SCREEN,
            title: 'Your Changes have been save ',
          });
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        alert(error?.response?.data?.message);
      });
  };
  if (isLoading) {
    return (
      <View>
        <Text>isLoading...</Text>
      </View>
    );
  }
  return (
    <SignUpScreen
      name={name}
      email={email}
      number={number}
      password={password}
      setName={setName}
      setEmail={setEmail}
      setNumber={setNumber}
      setPassword={setPassword}
      onPressSignUp={onPressSignUp}
      city={city}
      setCity={setCity}
      open={open}
      setOpen={setOpen}
    />
  );
}
