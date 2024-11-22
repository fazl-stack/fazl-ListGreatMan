import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Modal,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PopModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const requestCloseModal = () => {
    setIsVisible(false);
  };

  const openModal = () => {
    setIsVisible(true);
  };
  return (
    <View style={{flex: 1}}>
      <Modal
        visible={isVisible}
        animationType="fade"
        onRequestClose={() => requestCloseModal()}
        transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: '30%',
              width: '90%',
              backgroundColor: 'white',
            }}></View>
        </View>
      </Modal>
    </View>
  );
};
export default PopModal;
