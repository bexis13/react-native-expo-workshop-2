import Expo, { AppLoading } from 'expo';
import React from 'react';
import cacheAssetsAsync from './utils/cacheAssetsAsync';
import GalleryStackNavigator from './navigators/GalleryStackNavigator';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { appIsReady: false };
  }

  componentWillMount() {
    this.loadAssetsAsync();
  }

  async loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [
          require('./assets/images/logo.png'),
        ],
        fonts: [
          { billabong: require('./assets/fonts/Billabong-Regular.ttf') },
        ],
      });
    } catch (e) {
      console.warn('There was an error caching assets (see: main.js), perhaps due to a network timeout, so we skipped caching. Reload the app to try again.');
    } finally {
      this.setState({ appIsReady: true });
    }
  }

  render() {
    if (this.state.appIsReady) {
      return (
        <GalleryStackNavigator />

        /**
          YOUR ASSIGNMENT:
          Our app now will have three tabs.
          The first one will contain out GalleryStackNavigator;
          the second one will have a new CameraStackNavigator
          and the last one will have a new ProfileStackNavigator.

          To accomplish this assignment You should use
          <MainTabsNavigator />
          instead of
          <GalleryStackNavigator />
        */
      );
    }

    return <AppLoading />;
  }
}

Expo.registerRootComponent(AppContainer);
