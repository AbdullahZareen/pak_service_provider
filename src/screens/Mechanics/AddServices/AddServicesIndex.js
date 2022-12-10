import {View, Text} from 'react-native';
import React, {useState} from 'react';
import AddServices from './AddServices';
import {addServiceById} from '../../../services/APIs/MechanicAPI';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {ScreenConst} from '../../../constants';
import {Loader} from '../../../components';

export default function AddServicesIndex() {
  const [serviceName, setServiceName] = useState(null);
  const [category, setCategory] = useState(null);
  const [price, setPrice] = useState(null);
  const [discountPrice, setDiscountPrice] = useState(null);
  const [qty, setQty] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {id} = useSelector(state => state.user);
  const navigation = useNavigation();
  const onPressSave = () => {
    if (
      serviceName == null ||
      category == null ||
      discountPrice == null ||
      price == null ||
      qty == null
    ) {
      alert('fill and pick the field properly');
      return;
    }
    setIsLoading(true);
    let param = {
      serviceName: serviceName,
      category: category,
      price: price,
      discount: discountPrice,
      unit: qty,
    };
    addServiceById(id, param)
      .then(res => {
        console.log('add services response', res?.data);
        if (res?.data?.message === 'added service') {
          navigation.navigate(ScreenConst.HOME_SCREEN);
        }
        setIsLoading(false);
      })

      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <AddServices
      serviceName={serviceName}
      category={category}
      price={price}
      discountPrice={discountPrice}
      qty={qty}
      setServiceName={setServiceName}
      setCategory={setCategory}
      setPrice={setPrice}
      setDiscountPrice={setDiscountPrice}
      setQty={setQty}
      onPressSave={onPressSave}
    />
  );
}
