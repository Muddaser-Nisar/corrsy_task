import lock from 'assets/images/icons/Lock.svg';
import backButton from 'assets/images/icons/backButton.svg';
import closeEye from 'assets/images/icons/closeEye.svg';
import homeTab from 'assets/images/icons/homeTab.svg';
import openEye from 'assets/images/icons/openEye.svg';
import phoneNumber from 'assets/images/icons/phoneNumber.svg';
import progressTab from 'assets/images/icons/progressTab.svg';
import profileTab from 'assets/images/icons/tabProfile.svg';

interface IconPaths {
  homeTab?: string;
  progressTab?: string;
  profileTab?: string;
  openEye?: string;
  closeEye?: string;
  lock?: string;
  phoneNumber?: string;
  backButton?: string;
}
const icons: IconPaths = {
  homeTab,
  progressTab,
  profileTab,
  openEye,
  closeEye,
  lock,
  phoneNumber,
  backButton,

  // ... Add other icons properties with imported icons
};

export default icons;
