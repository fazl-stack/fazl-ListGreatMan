import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
  muncul,
  kepala,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PopModal from '../screen/PopModal';

const Header = ({title = 'Greatest Man Alive', color = 'white', onPress}) => {
  return (
    <View
      style={{
        borderColor: 'black',
        borderBottomWidth: 1,
        flexDirection: 'row',
        padding: 20,
        height: 150,
        alignItems: 'center',
        width: '100%',
      }}>
      <TouchableOpacity onPress={onPress} style={{width: 34, height: 34}}>
        <Icon name="menu-outline" size={35} color="white" />
      </TouchableOpacity>
      <Text
        style={{
          color: color,
          fontSize: 25,
          fontWeight: '250',
          textAlign: 'center',

          marginHorizontal: 25,
        }}>
        {title}
      </Text>

      <TouchableOpacity>
        <Icon name="log-out-outline" size={35} color="red" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
