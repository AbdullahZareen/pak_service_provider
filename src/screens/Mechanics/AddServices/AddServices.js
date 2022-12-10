import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {ColorConst} from '../../../constants';
import {
  ACServicesCat,
  Cleaning,
  Electrician,
  Geyser,
  Home,
  Plumber,
  servicesName,
  unitQuantity,
} from '../../../utils/Utility';

import RNPickerSelect from 'react-native-picker-select';
import {SizeClass} from '../../../utils/AppTheme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DropDownPicker from 'react-native-dropdown-picker';
import {Button, TextInput} from '../../../components';
export default function AddServices({
  serviceName,
  category,
  price,
  discountPrice,
  qty,
  setServiceName,
  setCategory,
  setPrice,
  setDiscountPrice,
  setQty,
  onPressSave,
}) {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [value, setValue] = useState(null);

  const renderAllFields = () => {
    return (
      <View>
        <Text style={{margin: SizeClass.DEFAULT_MARGIN}}>
          Add Your Services first than the Client will Reach you
        </Text>
        <DropDownPicker
          open={open}
          value={serviceName}
          items={servicesName}
          setOpen={setOpen}
          setValue={setServiceName}
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownBox}
          placeholder={'Select Services'}
        />

        <DropDownPicker
          zIndex={3000}
          zIndexInverse={1000}
          disabled={serviceName ? false : true}
          open={open1}
          value={category}
          items={
            serviceName === 'Ac Services'
              ? ACServicesCat
              : serviceName === 'Cleaning'
              ? Cleaning
              : serviceName === 'Electrician'
              ? Electrician
              : serviceName === 'Geyser'
              ? Geyser
              : serviceName === 'Plumber'
              ? Plumber
              : serviceName === 'Home Appliance'
              ? Home
              : Home
          }
          setOpen={setOpen1}
          setValue={setCategory}
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdown}
          placeholder={'Select Category'}
        />

        <TextInput
          placeHolder="Price"
          onChange={setPrice}
          defaultValue={price}
          style={styles.text}
        />

        <TextInput
          placeHolder="Discounted Price"
          onChange={setDiscountPrice}
          defaultValue={discountPrice}
          style={styles.text}
        />
        <DropDownPicker
          open={open2}
          value={qty}
          items={unitQuantity}
          setOpen={setOpen2}
          setValue={setQty}
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownBox}
          placeholder={'Select unit'}
        />
        <Button
          title={'Save'}
          style={{
            backgroundColor: '#488FB1',
            width: SizeClass.getScreenWidthFromPercentage(80),
            height: SizeClass.getScreenHeightFromPercentage(5),
            alignSelf: 'center',
            marginTop: SizeClass.LARGE_MARGIN,
          }}
          // textStyle={{color: 'black', fontSize: SizeClass.scaleFont(16)}}
          onPress={onPressSave}
        />
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: ColorConst.white}}>
      {renderAllFields()}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: SizeClass.DEFAULT_MARGIN,
    borderRadius: SizeClass.LARGE_MARGIN * 2,
    paddingStart: SizeClass.LARGE_MARGIN,
    alignSelf: 'center',
  },
  dropdown: {
    width: SizeClass.getScreenWidthFromPercentage(80),
    alignSelf: 'center',
    backgroundColor: ColorConst.textbackGround,
    marginTop: SizeClass.DEFAULT_MARGIN,
    borderColor: ColorConst.textbackGround,
    paddingStart: SizeClass.LARGE_MARGIN,
  },
  dropdownBox: {
    width: SizeClass.getScreenWidthFromPercentage(80),
    backgroundColor: ColorConst.textbackGround,
    alignSelf: 'center',
    borderColor: ColorConst.textbackGround,
    padding: SizeClass.DEFAULT_MARGIN,
  },
});
