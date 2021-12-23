import { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { Box, FormControl, HStack, VStack } from 'native-base';
import { SecureStore } from 'expo-secure-store';
import axios from 'axios';

export default function AddClientForm() {

    // states for new client form
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const saveClient = async () => {
        // create client object from states
        const client = {
            fname: fname,
            lname: lname,
            phone: phone,
            email: email,
        }
        const token = await SecureStore.getItemAsync('authToken');
        const headers = {Authorization: 'Bearer ' + token};
        // create axios config object
        const configObj = {
            method: "POST",
            url: "http://localhost:3000/user/api/newclient",
            headers: headers,
            data: client,
        }
        // make the post request
        const response = await axios(configObj).catch(err => {console.error(err)})
    }

    return (
        <View style={{flex: 1, width: '100%', padding: 12}}>
            <Box >
                <FormControl style={{justifyContent: 'center', padding: 12}}>
                <TextInput mode="outlined" outlineColor="#fff" activeOutlineColor="#03b126" label="First Name" onChangeText={text => { setFname(text) }} />
                <TextInput mode="outlined" outlineColor="#fff" activeOutlineColor="#03b126" label="Last Name" onChangeText={text => { setLname(text) }} />
                <TextInput mode="outlined" outlineColor="#fff" activeOutlineColor="#03b126" label="Phone Number" onChangeText={text => { setPhone(text) }} />
                <TextInput mode="outlined" outlineColor="#fff" activeOutlineColor="#03b126" label="Email" onChangeText={text => { setEmail(text) }} />
                <HStack style={{flex: 1, align: 'center', justifyContent: 'center', marginTop: 20}}>
                    <Button color="#03b126" mode="contained" width='45%' onPress={() => { saveClient() }}>Save</Button>
                </HStack>
                </FormControl>
            </Box>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#03b126',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

