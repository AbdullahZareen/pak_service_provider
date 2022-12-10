import {View, Text} from 'react-native';
import React, {useState} from 'react';
import RatingScreen from './RatingScreen';
import {useSelector} from 'react-redux';
import {addRating} from '../../../services/APIs/CustomerAPI';
import {useNavigation} from '@react-navigation/native';

export default function RatingScreenIndex(props) {
  const [rating, setRating] = useState(3);
  const [description, setDescription] = useState(null);
  console.log('rating=======', rating);
  console.log('rating=======', description);
  const {mechanic_id} = props.route.params;
  const navigation = useNavigation();
  const {id} = useSelector(state => state.user);
  const onPressPublish = () => {
    let param = {
      mechanic_id: mechanic_id,
      customer_id: id,
      rating: rating,
      feedback: description ? description : 'Null Description',
    };
    addRating(param)
      .then(res => {
        if (res?.data?.success) {
          navigation.goBack();
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <RatingScreen
      rating={rating}
      setRating={setRating}
      description={description}
      setDescription={setDescription}
      onPressPublish={onPressPublish}
    />
  );
}
