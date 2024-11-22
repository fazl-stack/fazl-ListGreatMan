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

const Susunan = ({
  title1 = 'editable',
  title2 = 'editable',
  describe = 'editable',
  color = 'black',
  gambar = gambar,
  PopModal,
  linker,
}) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10,
        width: 300,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginTop: 20,
      }}>
      <ImageCustom gambar={gambar} style={{width: 50, height: 50}} />
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          width: 150,
        }}>
        <Text style={{fontSize: 20, textAlign: 'center'}}>{title1}</Text>
        <Text style={{fontSize: 10, textAlign: 'center'}}>{title2}</Text>
        <TouchableOpacity
          style={{
            borderColor: 'black',

            padding: 10,

            justifyContent: 'center',
          }}>
          <Icon
            name="caret-down-outline"
            size={40}
            color="grey"
            onPress={linker}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Susunan;
