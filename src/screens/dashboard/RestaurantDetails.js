import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import Colors from './../../config/Theme';
import Metrics from '../../config/Metrics';
import {useDispatch} from 'react-redux';
import Config from '../../config/index';
import Utils from '../../utils/index';

import {
  getRestaurantList,
  loadRestaurant,
} from '../../store/actions/restaurant';
import {ScrollView} from 'react-native-gesture-handler';

const RestaurantDetails = (props) => {
  const restaurantData = props.route.params.data;
  const [array, setArray] = useState(restaurantData.img);
  const [position, setPosition] = useState(0);

  const onPageSelected = (e) => {
    setPosition(e.nativeEvent.position);
  };

  const numberOfPages = 3;
  const min = 0;
  const max = position + numberOfPages;

  const items = array
    .slice(min, max)
    .map((item, index) => (
      <View key={item}>
        {index < position + numberOfPages &&
        index > position - numberOfPages ? (
          <Image source={{uri: item.image}} style={styles.pagerImage} />
        ) : null}
      </View>
    ));

  const onChatHandler = () => {
    props.navigation.navigate(Config.Route.Chat);
  };

  return (
    <View style={styles.container}>
      <ViewPager
        style={styles.viewPager}
        initialPage={0}
        onPageSelected={onPageSelected}>
        {items}
      </ViewPager>

      <ScrollView style={styles.detailsContainer}>
        <View style={styles.detailsView}>
          <Text style={styles.detailsTitleText}>{'Title : '}</Text>
          <Text style={styles.detailsText}>{restaurantData.title}</Text>
        </View>
        <View style={styles.detailsView}>
          <Text style={styles.detailsTitleText}>{'Contact : '}</Text>
          <Text style={styles.detailsText}>{restaurantData.phone_no}</Text>
        </View>
        <View style={styles.detailsView}>
          <Text style={styles.detailsTitleText}>{'Description : '}</Text>
          <Text style={styles.detailsText}>{restaurantData.description}</Text>
        </View>
        <View style={styles.detailsView}>
          <Text style={styles.detailsTitleText}>{'Address : '}</Text>
          <Text style={styles.detailsText}>{restaurantData.address}</Text>
        </View>
        <View style={styles.detailsView}>
          <Text style={styles.detailsTitleText}>{'Rating : '}</Text>
          <Text style={styles.detailsText}>{restaurantData.rating}</Text>
        </View>

        <Button
          title={'CHAT'}
          style={styles.buttonChat}
          onPress={() => {
            onChatHandler();
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewPager: {
    height: 200,
  },
  pagerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 16,
  },
  detailsView: {
    flex: 1,
    flexDirection: 'row',
  },
  detailsTitleText: {
    fontSize: 18,
    fontFamily: Config.Theme.LARSSEIT_MEDIUM,
    marginBottom: 15,
  },
  detailsText: {
    fontSize: 16,
    fontFamily: Config.Theme.LARSSEIT_LIGHT,
    marginBottom: 15,
    flex: 1,
  },
  buttonChat: {
    marginTop: 30,
  },
});

export default RestaurantDetails;
