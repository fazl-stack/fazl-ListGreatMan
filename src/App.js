import React, {useState} from 'react';
import {Text, View, Button, Modal, ScrollView, Linking} from 'react-native';
import PopModal from './screen/PopModal';
import Susunan from './screen/Susunan';
import Header from './components/Header';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'dark'}}>
      <ScrollView>
        <Header
          title="WhatsApp"
          icons4=""
          icons="camera-outline"
          icons2="search-outline"
          icons3="ellipsis-vertical-outline"
        />
        <Susunan
          gambar={require('./assets/yoda.jpg')}
          title1="Yoda"
          title2='"May the Force be with you"'
        />
        <Susunan
          gambar={require('./assets/ayam.png')}
          title1="Darth Vader"
          title2='"Hey, I am your father"'
        />
        <Susunan
          gambar={require('./assets/deathStar.png')}
          title1="Death Star"
          title2='"I find your lack of faith disturbing"'
        />
        <Susunan
          gambar={require('./assets/barca.jpeg')}
          title1="Barcelona"
          title2='"Fight Me!!" '
        />
        <Susunan
          gambar={require('./assets/madrid.png')}
          title1="Real Madrid"
          title2='"Wanna Join?"'
        />
        <Susunan
          gambar={require('./assets/elon.png')}
          title1="Elon Musk"
          title2='"We Wait For Your Sign!"'
        />
        <Susunan
          gambar={require('./assets/billGates.png')}
          title1="Bill Gates"
          title2='"Can I Join Microsoft Team?"'
        />
        <Susunan
          gambar={require('./assets/mark.png')}
          title1="Mark Zuckerberg"
          title2='"Would ya Join Meta?"'
        />
        <Susunan
          gambar={require('./assets/isaacNewton.jpeg')}
          title1="Isaac Newton"
          title2='"I am a Scientist BTW"'
        />
        <Susunan
          gambar={require('./assets/Confucius.jpg')}
          title1="Confucius"
          title2='"Less meaning in ma life"'
        />
      </ScrollView>
      <Header
        icons="chatbubble-ellipses-outline"
        textMuncul={false}
        icons2="repeat-outline"
        icons3="people-outline"
        icons4="call-outline"
        size={30}
        width="100%"
      />
    </View>
  );
};

export default App;
