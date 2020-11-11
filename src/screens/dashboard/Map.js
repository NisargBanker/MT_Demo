import React, {useState, useEffect, useCallback} from 'react';

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
import MapView, {Marker} from 'react-native-maps';

const Map = (props) => {
  const restaurantData = props.route.params.data;

  const mapRegion = {
    latitude: parseFloat(restaurantData.lat),
    longitude: parseFloat(restaurantData.long),
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  let markerCoordinates = {
    latitude: restaurantData ? parseFloat(restaurantData.lat) : 37.78,
    longitude: restaurantData ? parseFloat(restaurantData.long) : -122.43,
  };

  return (
    <MapView initialRegion={mapRegion} style={{flex: 1}}>
      <Marker title={restaurantData.title} coordinate={markerCoordinates} />
    </MapView>
  );
};

export default Map;
