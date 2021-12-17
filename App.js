import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, TextInput, View } from 'react-native';

import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ClientPage from './components/ClientPage'
import { NativeBaseProvider } from 'native-base';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <NativeBaseProvider>
          <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen name="Home" component={Login} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="ClientPage" component={ClientPage} />
          </Stack.Navigator>
        </NativeBaseProvider>  
    </NavigationContainer>
    
  );
}
