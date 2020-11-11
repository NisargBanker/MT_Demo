import {Dimensions, Platform} from 'react-native';

const API_BASE_URL = 'http://192.249.121.94/~mobile/interview/public/api';

export default Constant = {
  // screen dimension
  SCREEN_WIDTH: Dimensions.get('window').width,
  SCREEN_HEIGHT: Dimensions.get('window').height,

  // static paths
  API_BASE_URL,
};
