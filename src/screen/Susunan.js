import React from 'react';
import {
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImageCustom from './ImageCustom';
import PopModal from './PopModal';

const Susunan = ({
  title1 = 'editable',
  title2 = 'editable',
  describe = 'editable',
  color = 'grey',
  gambar = gambar,
  PopModal,
}) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'black',
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
          padding: 10,
        }}>
        <ImageCustom gambar={gambar} />
        <View
          style={{
            marginHorizontal: 20,
          }}>
          <Text style={{fontSize: 25, color: color, fontWeight: 200}}>
            {title1}
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: color,
              marginTop: 10,
              fontWeight: 500,
            }}>
            {title2}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Susunan;
