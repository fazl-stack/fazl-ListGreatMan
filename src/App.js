import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Linking,
} from 'react-native';
import Header from './components/Header';
import Susunan from './screen/Susunan';
import Icon from 'react-native-vector-icons/Ionicons';
import PopModal from './screen/PopModal';
const App = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'dark',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ScrollView>
        <Header onPress={handleShow} ganti={show} />
        {show && (
          <>
            <Susunan
              title1="Muhammad SAW"
              title2="Islam Prophet"
              gambar={require('./assets/kalirafiMuhammad.jpg')}
              linker={() =>
                Linking.openURL('https://id.wikipedia.org/wiki/Muhammad/')
              }
            />
            <Susunan
              title1="Isaac Newton"
              title2="Scientist"
              gambar={require('./assets/isaacNewton.jpeg')}
              linker={() =>
                Linking.openURL('https://id.wikipedia.org/wiki/Isaac_Newton')
              }
            />
            <Susunan
              title1="Isa Almasih A.S"
              title2="Islam Prophet"
              gambar={require('./assets/isaAS2.png')}
              linker={() =>
                Linking.openURL('https://id.wikipedia.org/wiki/Isa_Almasih_A.S')
              }
            />
            <Susunan
              title1="Gautama Buddha"
              title2="Spiritual Leader"
              gambar={require('./assets/budha.png')}
              linker={() =>
                Linking.openURL('https://id.wikipedia.org/wiki/Gautama_Buddha')
              }
            />
            <Susunan
              title1="Confucius"
              title2="Philosopher"
              gambar={require('./assets/Confucius.jpg')}
              linker={() =>
                Linking.openURL('https://id.wikipedia.org/wiki/Confucius')
              }
            />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default App;
