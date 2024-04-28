// import React from 'react';
// import {
//   ActivityIndicator,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
// } from 'react-native';
// import {
//   heightPercentageToDP as hp,
//   widthPercentageToDP,
// } from 'react-native-responsive-screen';
// import {colors} from '../utils/constants/colors';
// import {fonts} from '../utils/constants/fonts';

// interface ButtonProps {
//   title?: string;
//   onPress?: () => void;
//   icon?: React.ReactNode;
//   isLoading?: boolean;
// }

// const PrimaryButton: React.FC<ButtonProps> = ({
//   title,
//   onPress,
//   icon,
//   isLoading,
// }) => {
//   return (
//     <TouchableOpacity
//       style={[icon ? styles.iconButton : styles.button]}
//       onPress={onPress}>
//       {isLoading ? (
//         <ActivityIndicator color={colors.white} />
//       ) : (
//         <>
//           {icon && icon}
//           <Text style={styles.buttonText}>{title}</Text>
//         </>
//       )}
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: colors.orange,
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: hp(1.7),
//     minHeight: hp(2),
//     alignSelf: 'stretch',
//   },
//   iconButton: {
//     flexDirection: 'row',
//     backgroundColor: colors.orange,
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: hp(2),
//     minHeight: hp(4),
//     alignSelf: 'stretch',
//   },

//   buttonText: {
//     color: colors.white,
//     fontFamily: fonts['Inter-Bold'],
//     fontSize: widthPercentageToDP(3.8),
//     paddingHorizontal: 10,
//   },
// });

// export default PrimaryButton;

import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {colors} from '../utils/constants/colors';
import {fonts} from '../utils/constants/fonts';

interface ButtonProps {
  title?: string;
  onPress?: () => void;
  icon?: React.ReactNode;
  isLoading?: boolean;
}

const PrimaryButton: React.FC<ButtonProps> = ({
  title,
  onPress,
  icon,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      style={[icon ? styles.iconButton : styles.button]}
      onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <>
          {icon && icon}
          <Text style={styles.buttonText}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.orange,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: hp(1.7),
    minHeight: hp(2),
    alignSelf: 'stretch',
  },
  iconButton: {
    flexDirection: 'row',
    backgroundColor: colors.orange,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: hp(2),
    minHeight: hp(4),
    alignSelf: 'stretch',
  },

  buttonText: {
    color: colors.white,
    fontFamily: fonts['Inter-Bold'],
    fontSize: widthPercentageToDP(3.8),
    paddingHorizontal: 10,
  },
});

export default PrimaryButton;
