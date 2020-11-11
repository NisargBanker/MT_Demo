import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Colors from './../../config/Theme';
import Metrics from '../../config/Metrics';
import {useDispatch} from 'react-redux';
import Config from '../../config/index';
import Utils from '../../utils/index';

import {
  getRestaurantList,
  loadRestaurant,
} from '../../store/actions/restaurant';

const DashboardScreen = (props) => {
  const dispatch = useDispatch();

  const [availableUsers, setAvailableUsers] = useState([]);

  useEffect(async () => {
    const isData = await Utils.MethodUtils.Storage.getData(
      Config.String.RESTAURANT_DATA,
    );
    if (isData) {
      dispatch(loadRestaurant()).then((data) => {
        setAvailableUsers(data);
      });
    } else {
      dispatch(getRestaurantList()).then((data) => {
        setAvailableUsers(data);
      });
    }
  }, []);

  const onRastaurantHandler = (index) => {
    props.navigation.navigate(Config.Route.RestaurantDetails, {
      data: availableUsers[index],
    });
  };

  const onMapHandler = (index) => {
    props.navigation.navigate(Config.Route.Map, {
      data: availableUsers[index],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Restaurants</Text>
      <View style={styles.lessonBody}>
        <FlatList
          data={availableUsers}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={styles.rowItem}
              onPress={() => {
                onRastaurantHandler(index);
              }}>
              <View style={styles.lessonBody}>
                <Text style={styles.lessonName}>{item.title}</Text>
                <Text style={styles.lessonSubtext}>
                  {'Contact ' + item.phone_no}
                </Text>
              </View>
              <TouchableOpacity
                style={{paddingVertical: 15, paddingLeft: 15}}
                onPress={() => {
                  onMapHandler(index);
                }}>
                <Text>Location</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: (Metrics.screenWidth * 25) / 375,
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontFamily: Config.Theme.LARSSEIT_BOLD,
    fontSize: 25,
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    padding: (Metrics.screenWidth * 15) / 375,
    marginBottom: 10,
  },
  lessonBody: {
    flex: 1,
  },
  lessonName: {
    fontFamily: Config.Theme.LARSSEIT_BOLD,
    fontSize: 20,
  },
  lessonSubtext: {
    fontFamily: Config.Theme.LARSSEIT_LIGHT,
    marginTop: 5,
  },
});

export default DashboardScreen;
