import {createStackNavigator} from '@react-navigation/stack'

import HomeScreen from "../screens/HomeScreen"
import ProfileScreen from "../screens/ProfileScreen"

// const Stack = createStackNavigator();
// Stack.Navigator e Stack.Screen
const { Navigator, Screen } = createStackNavigator();

export default function Stack() {
  return(
    <Navigator>
      <Screen name='home' component={HomeScreen}/>
      <Screen name= 'profile' component={ProfileScreen}/>
    </Navigator>
  )
}