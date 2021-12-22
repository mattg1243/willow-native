import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, TextInput, View } from 'react-native';

import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ClientPage from './components/ClientPage'
import { NativeBaseProvider } from 'native-base';
import { Appbar, Provider as PaperProvider } from 'react-native-paper';

export default function App() {

  const [authToken, setToken] = useState("");

  const getToken = (token) => {
    setToken(token);
  }
  
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <NativeBaseProvider>
          <PaperProvider>
            <Stack.Navigator initialRouteName="Home" >
              <Stack.Screen name="Home" component={Login} getToken={getToken} options={{ headerShown: false }}/>
              <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }}/>
              <Stack.Screen name="ClientPage" component={ClientPage} options={{ headerShown: false }}/>
            </Stack.Navigator>
          </PaperProvider>
        </NativeBaseProvider>  
    </NavigationContainer>
    
  );
}
