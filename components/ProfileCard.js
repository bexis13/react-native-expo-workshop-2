import React, { PropTypes } from 'react';
import { ScrollView, Text, Platform, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';
import Image from 'react-native-image-progress';
import Colors from '../constants/Colors';

const ProfileCard = props => (
  <ScrollView>
    <LinearGradient
      colors={Platform.OS === 'ios' ? [Colors.rmotrB300, Colors.rmotrB100] : [Colors.rmotrC, Colors.rmotrA]}
      style={styles.viewStyle}
    >
      <Image
        style={Platform.OS === 'ios' ? styles.imageIOS : styles.imageANDROID}
        source={{ uri: props.picture || 'https://randomuser.me/api/portraits/lego/1.jpg' }}
        alt={'Image'}
      />

      <Text style={styles.username}>
        {props.name || 'Anonymous'}
      </Text>

      { Platform.OS === 'ios' && <Text>(using IOS app)</Text> }
      { Platform.OS === 'android' && <Text>(using ANDROID app)</Text> }

      <Text style={styles.email}>
        {props.email || 'anonymous@rmotr.com'}
      </Text>
    </LinearGradient>
  </ScrollView>
);

ProfileCard.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  picture: PropTypes.string,
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageIOS: {
    height: 90,
    width: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: '#FFF',
    marginBottom: 10,
  },

  imageANDROID: {
    height: 90,
    width: 90,
    borderWidth: 3,
    borderColor: '#FFF',
    marginBottom: 10,
  },

  username: {
    color: '#FFF',
    backgroundColor: 'transparent',
    fontSize: 16,
    fontWeight: '700',
  },

  email: {
    color: '#EEE',
    backgroundColor: 'transparent',
    fontSize: 12,
  },
});

export default ProfileCard;
