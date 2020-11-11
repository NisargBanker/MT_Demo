import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native';

import Config from '../../config/index';

export default class CustomActivityIndicator extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
      loaderColor: Config.Theme.COLOR_TEXT_PINK,
    }
  }

  showLoader = (show, loaderColor) => {
    this.setState({
      isVisible: show,
      loaderColor: loaderColor != undefined ? loaderColor : Config.Theme.COLOR_TEXT_PINK,
    })
  }

  render() {
    if (!this.state.isVisible) {
      return null
    }

    return (
      <View style={styles.containerView}>
        <ActivityIndicator size="large" color={this.state.loaderColor} />
      </View>
    )

  }
}

const styles = StyleSheet.create({
  containerView: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Config.Theme.COLOR_TRANSPARENT,
    elevation: 10
  },

})
