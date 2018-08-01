import { Navigation } from 'react-native-navigation'
import Provider from './provider'
import Welcome from '../screen/Welcome'

export default () => {
  Navigation.registerComponent('page.Welcome', () => Provider(Welcome));
}

export const beforlogin = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'page.Welcome',
      title: 'Welcome'
    }
  })
}