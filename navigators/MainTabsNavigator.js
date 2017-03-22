import { TabNavigator } from 'react-navigation';
// import GalleryStackNavigator from './GalleryStackNavigator';
// import CameraStackNavigator from './CameraStackNavigator';
// import ProfileStackNavigator from './ProfileStackNavigator';
import Colors from '../constants/Colors';

/**
  YOUR ASSIGNMENT:
  Our app now will have three tabs.
  The first one will contain out GalleryStackNavigator;
  the second one will have a new CameraStackNavigator
  and the last one will have a new ProfileStackNavigator.
*/

const MainTabsNavigator = TabNavigator(
  {
    /*
    GalleryTab: {
      // add navigator as screen here
    },
    CameraTab: {
      // add navigator as screen here
    },
    ProfileTab: {
      // add navigator as screen here
    },
    */
  },
  {
    initialRouteName: 'GalleryTab',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: Colors.rmotrC,
      activeBackgroundColor: Colors.rmotrB,
      inactiveBackgroundColor: Colors.rmotrB,
      indicatorStyle: {
        backgroundColor: Colors.rmotrC,
      },
      style: {
        backgroundColor: Colors.rmotrB,
      },
    },
  },
);

export default MainTabsNavigator;
