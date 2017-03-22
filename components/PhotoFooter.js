import React, { PropTypes } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import Colors from '../constants/Colors';

class PhotoFooter extends React.Component {
  constructor(props) {
    super(props);

    this.goToComments = this.goToComments.bind(this);
  }

  goToComments() {
    this.props.navigation.navigate('Comments');
  }

  render() {
    return (
      <View style={styles.footer}>
        <View style={styles.footerTop}>
          <TouchableOpacity>
            <Ionicons
              style={styles.footerIcon}
              name={this.props.isLiked ? 'ios-heart' : 'ios-heart-outline'}
              color={this.props.isLiked ? Colors.danger : '#555'}
              onPress={this.props.likePhoto}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons
              style={styles.footerIcon}
              name="ios-chatboxes-outline"
              color="#555"
              onPress={this.goToComments}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.footerMiddle}>
          <Ionicons
            name="ios-heart"
            size={12}
            color={Colors.rmotrB}
          />

          <Text style={styles.likesText}>
            {this.props.isLiked ? this.props.likes + 1 : this.props.likes}
            {this.props.likes === 1 || (this.props.likes === 0 && this.props.isLiked) ? ' Like' : ' Likes'}
          </Text>
        </View>

        <View style={styles.footerBottom}>
          <Text style={styles.footerText}>
            {this.props.username}
          </Text>

          <Text style={styles.photoCaption}>
            {this.props.photoCaption}
          </Text>
        </View>

        <View>
          <Text style={styles.footerHour}>
            {moment(this.props.creationDate).fromNow().toUpperCase()}
          </Text>
        </View>
      </View>
    );
  }
}

PhotoFooter.propTypes = {
  username: PropTypes.string,
  photoCaption: PropTypes.string,
  creationDate: PropTypes.string,
  likes: PropTypes.number,
  isLiked: PropTypes.bool,
  likePhoto: PropTypes.func.isRequired,
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'column',
    padding: 5,
    paddingLeft: 7,
  },

  footerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },

  footerIcon: {
    fontSize: 26,
    padding: 4,
    paddingRight: 10,
  },

  footerMiddle: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  likesText: {
    color: Colors.rmotrB,
    fontSize: 13,
    fontWeight: '700',
    marginLeft: 5,
  },

  footerBottom: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 5,
  },

  footerText: {
    color: Colors.rmotrB,
    fontSize: 13,
    fontWeight: '700',
  },

  photoCaption: {
    color: Colors.rmotrB,
    fontSize: 13,
    fontWeight: '400',
    paddingLeft: 3,
  },

  footerHour: {
    color: '#AAA',
    fontSize: 10,
    fontWeight: '400',
    paddingTop: 5,
  },
});

export default withNavigation(PhotoFooter);
