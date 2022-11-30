import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Detail } from './src/pages/Detail'
import { Home } from './src/pages/Home'
import { Clients } from './src/pages/Clients'
import { RegistrationClient } from './src/pages/RegistrationClient'
import { AddProduct } from './src/pages/AddProduct'

const App = () => {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#191919'} barStyle={'dark-content'} />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Detail} />
        <Stack.Screen name="Clients" component={Clients} />
        <Stack.Screen
          name="RegistrationClient"
          component={RegistrationClient}
        />
        <Stack.Screen name="AddProducts" component={AddProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
