import { useState, useEffect } from 'react';
import { Box, HStack, Modal } from 'native-base';
import { ScrollView, Text, StyleSheet, TextInput, View } from 'react-native';
import { Button, Appbar, DataTable } from 'react-native-paper';
import { clientList } from '../test-data/clientList';
import { ClientPage } from './ClientPage';
import AddClientForm, { AddClient } from './AddClientForm';
import * as SecureStore from 'expo-secure-store'
import axios from 'axios';

export default function Dashboard ({ navigation }) {
   
    const [clients, setClients] = useState([]);
    const [modalShown, setModalShown] = useState(false);

    const showModal = () => setModalShown(true);
    const hideModal = () => setModalShown(false);

    const getClients = async (userID) => {
        // this will eventually fetch from the api,
        // but for now it simply sets state to copied array
        setClients(clientList);
    }

    const testToken = async () => {
        const token = await SecureStore.getItemAsync('authToken')
        const headers = {Authorization: 'Bearer ' + token};
        const configObject = {
            method: "GET",
            url: "http://localhost:3000/login/native/secret",
            headers: headers,
        };
        const response = axios(configObject).then(console.log(response))
    }

    useEffect(() => { getClients() });

    return (
        <>
            <Appbar.Header style={styles.appbar}>
                <Appbar.BackAction color="#03b126" onPress={() => { navigation.navigate('Home'); }}/>
                <Appbar.Content title="Clients" color="#03b126" />
            </Appbar.Header>
            <Box style={styles.table}>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Client</DataTable.Title>
                    <DataTable.Title numeric >Balance</DataTable.Title>
                </DataTable.Header>
                
                {clients.map(
                    (client) => { 
                        return (
                            <DataTable.Row onPress={() => { navigation.navigate('ClientPage') }}>
                                <DataTable.Cell>{ `${client.fname} ${client.lname}` }</DataTable.Cell>
                                <DataTable.Cell numeric>{ `$${client.balance}` }</DataTable.Cell>
                            </DataTable.Row>
                            )
                        }) 
                    }
            </DataTable>
                <Button mode="outlined" style={styles.button} onPress={ showModal }>ADD</Button>
                <Modal isOpen={modalShown} onClose={() => { hideModal() }} contentContainerStyle={styles.modal}>
                    <Modal.Content maxWidth="400px">
                        <Modal.CloseButton />
                        <Modal.Header>New Client</Modal.Header>
                        <Modal.Body style={{ flex:1, justifyContent: 'center' }}>
                            <AddClientForm />
                        </Modal.Body>
                    </Modal.Content>
                </Modal>
            </Box>
            
            
        </>
        
    )   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    appbar: {
        backgroundColor: "white",
        color: "#03b126"
    },
    table: {
        flex: 1,
        padding: 25,

    },
    button: {
        height: 23,
        fontFamily: "Quicksand-Regular",
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%',
        height: '70%',
        backgroundColor: '#fff'
    }
  });