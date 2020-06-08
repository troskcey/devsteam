import 'react-native-gesture-handler';
import React from 'react';

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./redux/reducers";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const store = createStore(reducers, applyMiddleware(ReduxThunk));

const Stack = createStackNavigator();

import HomeScreen from "./views/HomeScreen";
import ImageScreen from "./views/ImageScreen";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="HomeScreen" 
            component={HomeScreen}
            options={{
              title: "devsteam.mobi"
            }}
          />
          <Stack.Screen 
            name="ImageScreen" 
            component={ImageScreen}
            options={({ route }) => ({ title: route.params.pageTitle })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}