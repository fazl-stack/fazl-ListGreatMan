import React, {useState} from 'react';
import {View, Text, Modal, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const PopModal = ({icons = 'log-out-outline', color = 'red', size = 35}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      {/* Modal */}
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        animationType="fade"
        transparent={true}>
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
            paddingTop: 90,
          }}>
          <View
            style={{
              height: '60%',
              width: '60%',
              backgroundColor: 'black',
              borderColor: 'grey',
              borderWidth: 0.5,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  padding: 10,
                  borderBottomColor: 'grey',
                  borderBottomWidth: 0.5,
                }}>
                Grup Baru
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  padding: 10,
                  borderBottomColor: 'grey',
                  borderBottomWidth: 0.5,
                }}>
                Siaran Baru
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  padding: 10,
                  borderBottomColor: 'grey',
                  borderBottomWidth: 0.5,
                }}>
                Perangkat Tertaut
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  padding: 10,
                  borderBottomColor: 'grey',
                  borderBottomWidth: 0.5,
                }}>
                Pesan Berbintang
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  padding: 10,
                }}>
                Setelan
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Button */}
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Icon name={icons} size={size} color={color} />
      </TouchableOpacity>
    </View>
  );
};

export default PopModal;
