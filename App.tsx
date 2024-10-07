import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './src/screens/Home/Home';
import {AddCard} from './src/screens/AddCard/AddCard';
import {store} from './src/state/store';
import {Provider} from 'react-redux';
import {ShowCard} from './src/screens/ShowCard/ShowCard';
import {AnimatedScreen} from './src/screens/AnimatedScreen/AnimatedScreen';
import {CardsList} from './src/screens/CardsList/CardsList';
import {HeaderLeft} from './src/components/HeaderLeft/HeaderLeft';
import {HeaderRight} from './src/components/HeaderRight/HeaderRight';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AddCard"
            component={AddCard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ShowCard"
            component={ShowCard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AnimatedScreen"
            component={AnimatedScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CardsList"
            component={CardsList}
            options={{
              headerShown: true,
              headerLeft: HeaderLeft,
              headerRight: HeaderRight,
              headerTitleAlign: 'center',
              headerTintColor: '#142995',
              headerTitle: 'Wallet Test',
              headerTitleStyle: {fontFamily: 'PTSans-Regular', fontSize: 22},
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
