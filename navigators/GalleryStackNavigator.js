import { StackNavigator } from 'react-navigation';
import PhotoGalleryScreen from '../screens/PhotoGalleryScreen';
// import PhotoCommentsScreen from '../screens/PhotoCommentsScreen';
// import MapScreen from '../screens/MapScreen';


/**
YOUR ASSIGNMENT:
  Add two new routes on this navigator that contains
  PhotoCommentsScreen and MapScreen.
*/

const FeedStackNavigator = StackNavigator(
  {
    Gallery: {
      screen: PhotoGalleryScreen,
    },
    /*
    Comments: {
      // add screen here
    },
    Map: {
      // add screen here
    },
    */
  },
  {
    initialRouteName: 'Gallery',
  },
);

export default FeedStackNavigator;
