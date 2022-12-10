import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SignUpScreen from './SignUpScreen';
import {signupMechanic} from '../../../services/APIs/AuthAPI';
import {useNavigation} from '@react-navigation/native';
import {ScreenConst} from '../../../constants';

export default function SignUpScreenIndex() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [number, setNumber] = useState(null);
  const [password, setPassword] = useState(null);
  const [open, setOpen] = useState(false);
  const [city, setCity] = useState(null);
  const [conPassword, setConPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const onPressSignUp = () => {
    if (password != conPassword) {
      alert('pleas enter same password');
      return;
    } else if (
      name === null ||
      email === null ||
      number == null ||
      password == null ||
      city == null ||
      conPassword === null
    ) {
      alert('please fill the filed properly');
      return;
    }

    setIsLoading(true);

    let params = {
      name: name,
      email: email,
      phone_no: number,
      city: city,
      password: password,
      address: 'known',
    };
    signupMechanic(params)
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
        setIsLoading(false);
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
      open={open}
      city={city}
      setOpen={setOpen}
      setCity={setCity}
      conPassword={conPassword}
      setConPassword={setConPassword}
      onPressSignUp={onPressSignUp}
    />
  );
}
