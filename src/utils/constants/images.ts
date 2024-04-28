import {ImageProps} from 'react-native';

const logoBg = require('assets/images/screenImages/logobg.png');
const profile = require('assets/images/screenImages/profile.png');

interface ImagePaths {
  logoBg: ImageProps;
  profile: ImageProps;
}
const images: ImagePaths = {
  logoBg,
  profile,

  // ... Add other image properties with imported images
};

export default images;
