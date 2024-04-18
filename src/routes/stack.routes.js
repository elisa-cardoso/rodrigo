import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from "../screens/HomeScreen"
import ProfileScreen from "../screens/ProfileScreen"
import ListaScreen from '../screens/ListaScreen';


// const Stack = createStackNavigator();
// Stack.Navigator e Stack.Screen
const { Navigator, Screen } = createStackNavigator();

export default function Stack() {
  return (
    // <Navigator initialRouteName='profile'> Para escolher que screen aparece primeiro.
    <Navigator initialRouteName='HomeScreen'>
      <Screen name='home' component={HomeScreen}
        options={{ title: "Página Inicial", headerTintColor: "blue", headerShown: true }} />
      <Screen name='profile' component={ProfileScreen} />
      <Screen name='lista' component={ListaScreen} />
    </Navigator>
  )
}