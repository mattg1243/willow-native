import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { useNavigationContainerRef } from '@react-navigation/native';
import { Input, Box, FormControl, HStack, VStack } from 'native-base';
import * as Font from 'expo-font';

export default function Login({ navigation }) {
    
    // load custom fonts
    useEffect(() => {
        Font.loadAsync({
            "Pacifico-Regular": require('../assets/fonts/Pacifico-Regular.ttf')
        })
    })

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Willow</Text>
            <StatusBar style="auto" />
            <Box  w={{
                base: "70%",
                md: "25%",
            }}>
                <FormControl>
                    <FormControl.Label>Username</FormControl.Label>
                    <Input type="text" />
                    <FormControl.Label>Password</FormControl.Label>
                    <Input type="password" />
                </FormControl>
                <VStack>
                    <HStack>
                        <Button title="Login" />
                        <Button title="Register" />
                    </HStack>
                    <HStack>
                        <Button title="Dashboard" onPress={() => { navigation.navigate('Dashboard') } } />
                        <Button title="Client Page" onPress={() => { navigation.navigate('ClientPage') } }/>
                    </HStack>
                </VStack>  
            </Box>
            
        </View>
    )
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
        color: "green"
    }
  });
