import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#333' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontFamily: 'nunito-bold' },
    }}
  >
    <Stack.Screen name="Home" component={Home} options={{ title: 'HomePage' }} />
    <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={{ title: 'Review' }} />
  </Stack.Navigator>
);

export default HomeStack;
