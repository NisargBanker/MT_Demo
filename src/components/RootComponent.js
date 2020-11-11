import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";

import Config from "../config/index";
import Module from "../module/index";

import CustomActivityIndicator from "../module/CustomActivityIndicator/CustomActivityIndicator";

console.disableYellowBox = true;

export default class RootComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={Config.Theme.COLOR_TRANSPARENT}
          barStyle={"dark-content"}
          translucent={true}
        />

        {this.props.children}

        <CustomActivityIndicator
          ref={(loaderRef) =>
            Module.CustomActivityIndicator.setLoaderRef(loaderRef)
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
