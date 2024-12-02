import React from 'react';
import style from './style';
import {useSelector} from 'react-redux';
import {SafeAreaView, ScrollView} from 'react-native';
import globalstyle from '../../../assets/styles/globalStyle';
import BackButton from '../../../components/BackButton/BackButton';

const SingleDonationItem = ({navigation, route}) => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  console.log(donationItemInformation);
  return (
    <SafeAreaView style={[globalstyle.backgroundWhite, globalstyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.conatainer}>
        <BackButton onPress={() => navigation.goBack()} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
