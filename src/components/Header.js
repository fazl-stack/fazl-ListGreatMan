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

const Header = ({
  title = 'editable',
  color = 'white',
  icons = 'log-out-outline',
  icons2 = 'log-out-outline',
  icons3 = 'log-out-outline',
  icons4 = 'log-out-outline',
  size = 30,
  width = '50%',
  textMuncul = true,
}) => {
  return (
    <View
      style={{
        backgroundColor: 'black',
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        height: 90,
        alignItems: 'center',
        width: '100%',
      }}>
      {textMuncul && (
        <Text
          style={{
            color: color,
            fontSize: 25,
            fontWeight: '250',
            textAlign: 'center',

            marginHorizontal: 50,
          }}>
          {title}
        </Text>
      )}
      <View
        style={{
          flexDirection: 'row',
          width: width,
          justifyContent: 'space-between',
          paddingHorizontal: 15,
        }}>
        <TouchableOpacity>
          <Icon name={icons} color="grey" size={size} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon name={icons2} size={size} color="grey" />
        </TouchableOpacity>

        <PopModal icons={icons3} color="grey" size={size} />
        <TouchableOpacity>
          <Icon name={icons4} color="grey" size={size} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
