import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const ImageCustom = ({gambar = 'ayam.png'}) => {
  return (
    <View style={{alignSelf: 'center'}}>
      <Image
        source={gambar}
        style={{width: 70, height: 70, borderRadius: 50}}
      />
    </View>
  );
};

export default ImageCustom;
