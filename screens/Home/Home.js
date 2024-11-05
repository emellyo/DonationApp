import React from 'react';
import style from './style';
import Header from '../../components/Header/Header';
import {Image, Pressable, SafeAreaView, Text, View} from 'react-native';
import globalstyle from '../../assets/styles/globalStyle';
import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';
import Badge from '../../components/Badge/Badge';
import Search from '../../components/Search/Search';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import {horizontalScale} from '../../assets/styles/scaling';
import {useSelector, useDispatch} from 'react-redux';
import {resetToInitialState, updateFirstName} from '../../redux/reducers/User';
import {ScrollView} from 'react-native-gesture-handler';

const Home = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  //dispatch(resetToInitialState());

  return (
    <SafeAreaView style={(globalstyle.backgroundWhite, globalstyle.flex)}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <View>
            <Text style={style.headerIntroText}>Hello, </Text>
            <View style={style.username}>
              <Header title={user.firstName + ' ' + user.lastName[0] + '.👋'} />
            </View>
          </View>
          <Image
            source={{uri: user.profileImage}}
            style={style.profileImage}
            resizeMode={'contain'}
          />
        </View>
        <View style={style.searchBox}>
          <Search />
        </View>
        <Pressable style={style.highlitedImageContainer}>
          <Image
            style={style.highlitedImage}
            source={require('../../assets/images/highlighted_image.png')}
            resizeMode={'contain'}
          />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
