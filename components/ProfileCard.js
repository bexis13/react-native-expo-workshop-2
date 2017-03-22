import React, { PropTypes } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';
import Image from 'react-native-image-progress';
import Colors from '../constants/Colors';

const ProfileCard = props => (
  <ScrollView>

    {/*
      YOUR ASSIGNMENT:
        Set different LinearGradient colors depending on which OS
        is the user using.

        TIP: check out Platform module from react-native
        https://facebook.github.io/react-native/docs/platform-specific-code.html
    */}

    <LinearGradient
      colors={[Colors.rmotrB300, Colors.rmotrB100]}
      style={styles.viewStyle}
    >
      <Image
        style={styles.image}
        source={{ uri: props.picture || 'https://randomuser.me/api/portraits/lego/1.jpg' }}
        alt={'Image'}
      />

      <Text style={styles.username}>
        {props.name || 'Anonymous'}
      </Text>

      {/*
        YOUR ASSIGNMENT:
          Show a Text component with the OS that the device is using

          TIP: check out Platform module from react-native
          https://facebook.github.io/react-native/docs/platform-specific-code.html
      */}

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

  image: {
    height: 90,
    width: 90,
    borderRadius: 45,
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
