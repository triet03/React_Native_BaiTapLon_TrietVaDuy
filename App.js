import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FreshFruitsScreen from './components/ScreenFreshFruits';
import FruitDetailScreen from './components/DetailedFruitsScreen'; 
import ReviewScreen from './components/ReviewScreen'; 
import CartScreen from './components/CartScreen'; 
import HomeScreen from './components/HomeScreen';
import UserScreen from './components/UserScreen';
import ElectronicScreen from './components/ElectronicScreen';
import BeautyScreen from './components/BeautyScreen';
import FasionScreen from './components/FasionScreen';
import PaymentScreen from './components/PaymentScreen'
import PaymentCheck from './components/PaymentCheck'


import { CartProvider } from './components/CartContext';



const Stack = createStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="User">
          <Stack.Screen name="User" component={UserScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Electronic" component={ElectronicScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Beauty" component={BeautyScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Fasion" component={FasionScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="FreshFruits" component={FreshFruitsScreen} />
          <Stack.Screen name="FruitDetail" component={FruitDetailScreen} />
          <Stack.Screen name="ReviewScreen" component={ReviewScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
          <Stack.Screen name="PaymentCheck" component={PaymentCheck} />


        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
