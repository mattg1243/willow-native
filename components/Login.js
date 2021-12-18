import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, ScrollView, StyleSheet, TextInput, View, ActivityIndicator, Linking } from 'react-native';
import { Input, Box, FormControl, HStack, VStack } from 'native-base';
import * as Font from 'expo-font';

export default function Login({ navigation }) {
    
    // create state variable for asset loading
    const [assetsLoaded, setAssetsLoaded] = useState(false);
    // create states for the text inputs
    const [username, setUsername] = useState("");    
    const [password, setPassword] = useState(""); 
    // load custom fonts
    useEffect(async () => {
        await Font.loadAsync({
            "Pacifico-Regular": require('../assets/fonts/Pacifico-Regular.ttf')
        })
        setAssetsLoaded(true);
    })

    if (assetsLoaded) {
        return (
            <>
            <View style={styles.container}>
                <Text style={styles.logo}>Willow</Text>
                <StatusBar style="auto" />
                <Box  w={{
                    base: "70%",
                    md: "25%",
                }}>
                    <FormControl style={styles.loginForm}>
                        <FormControl.Label>Username</FormControl.Label>
                        <Input type="text" onChange={(e) => { setUsername(e.target.value) }}/>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input type="password" onChange={(e) => { setPassword(e.target.value) }}/>
                    </FormControl>
                    <VStack>
                        <HStack>
                            <Button title="Login" onPress={() => { navigation.navigate('Dashboard') }}/>
                            <Button title="Register" onPress={() => { Linking.openURL('https://willowapp-dev.herokuapp.com/user/register').catch(err => {console.console.error("Error");}) }} />
                        </HStack>
                    </VStack>  
                </Box>
            </View>
            </>
        )
    }
    else {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
        fontFamily: "Pacifico-Regular",
        fontSize: 60,
        color: "#03b126",
        padding: 25
    },
    appbar: {
        backgroundColor: "white",
        color: "#03b126"
    },
    loginForm: {
        paddingBottom: 15
    }
  });
