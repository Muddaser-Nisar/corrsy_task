import React from 'react';
import {ActivityIndicator, Modal, View} from 'react-native';
import {colors} from '../utils/constants/colors';

const Loader = () => {
  return (
    <Modal transparent>
      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.3)',
        }}>
        <ActivityIndicator size={30} color={colors.activeColor} />
      </View>
    </Modal>
  );
};

export default Loader;
