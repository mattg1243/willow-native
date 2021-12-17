import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import {
  HStack,
  VStack,
  Text
} from 'native-base';
import { useNavigationContainerRef } from '@react-navigation/native';

export default function Login({ navigation }) {
    
    const navigationRef = useNavigationContainerRef();

    return (
        <View style={styles.container}>
            <Text>Willow</Text>
          <StatusBar style="auto" />
          <Text>Username</Text>
          <TextInput 
          style={{
            height: 40,
            width: 200,
            borderColor: 'gray',
            borderWidth: 1
          }} 
          />
          <Text>Password</Text>
          <TextInput 
          style={{
            height: 40,
            width: 200,
            borderColor: 'gray',
            borderWidth: 1
          }} 
          />
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
  });
