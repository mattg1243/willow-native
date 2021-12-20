import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, ScrollView, StyleSheet, View, ActivityIndicator, Linking } from 'react-native';
import { Input, Box, FormControl, HStack, VStack } from 'native-base';
import * as Font from 'expo-font';
import { Button, TextInput } from 'react-native-paper';

export default function Login({ navigation }) {
    
    // create state variable for asset loading
    const [assetsLoaded, setAssetsLoaded] = useState(false);
    // create states for the text inputs
    const [username, setUsername] = useState("");    
    const [password, setPassword] = useState(""); 
    // load custom fonts
    useEffect(async () => {
        await Font.loadAsync({
            "Pacifico-Regular": require('../assets/fonts/Pacifico-Regular.ttf'),
            "Quicksand-Regular": require('../assets/fonts/Quicksand-Regular.ttf')
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
                        <TextInput mode="outlined" outlineColor="#fff" dense="true" label="Username" onChange={(e) => { setUsername(e.target.value) }}/>
                    </FormControl>
                    <FormControl style={styles.loginForm}>
                        <TextInput mode="outlined" outlineColor="#fff" dense="true" label="Password" type="password" onChange={(e) => { setPassword(e.target.value) }}/>
                    </FormControl>
                    <VStack>
                        <HStack>
                            <Button color="#fff" mode="text" onPress={() => { navigation.navigate('Dashboard') }}>Login</Button>
                            <Button color="#fff" mode="text" onPress={() => { Linking.openURL('https://willowapp-dev.herokuapp.com/user/register').catch(err => {console.console.error("Error");}) }}>Register</Button>
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
      backgroundColor: '#03b126',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
        fontFamily: "Pacifico-Regular",
        fontSize: 60,
        color: "#fff",
        padding: 25,
    },
    appbar: {
        backgroundColor: "white",
        color: "#03b126"
    },
    loginForm: {
        paddingBottom: 7,
    },
    regText: {
        fontFamily: "Quicksand-Regular",
        fontSize: 16,
        color: "#fff",
    },
    button: {
        color: "white",
    }
  });
