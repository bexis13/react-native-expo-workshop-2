import React, { PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationStyles } from '@exponent/ex-navigation';
import Colors from '../constants/Colors';
import Header from '../components/Header';
import Map from '../components/Map';
import PhotoGrid from '../components/PhotoGrid';

const MapScreen = props => (
  <View style={styles.container}>
    // TODO: Remove map and use placeholder View
    <Map
      latitude={props.route.params.latitude}
      longitude={props.route.params.longitude}
    />

    <PhotoGrid />
  </View>
);

MapScreen.route = {
  navigationBar: {
    visible: true,
    renderTitle: params => <Header headerText={params.params.locationName} />,
    backgroundColor: Colors.rmotrB,
    tintColor: Colors.rmotrC
  },
  styles: NavigationStyles.FloatHorizontal
};

MapScreen.propTypes = {
  route: PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  }
});

export default MapScreen;
