import { useState, useEffect } from 'react';
import { Box, HStack } from 'native-base';
import { ScrollView, Text, StyleSheet, TextInput, View } from 'react-native';
import { Button, Appbar } from 'react-native-paper';
import { DataTable } from 'react-native-paper';
import { clientList } from '../test-data/clientList';
import { ClientPage } from './ClientPage';

export default function Dashboard ({ navigation }) {
   
    const [clients, setClients] = useState([]);

    const getClients = async (userID) => {
        // this will eventually fetch from the api,
        // but for now it simply sets state to copied array
        setClients(clientList);
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
            <HStack>
                <Button mode="outlined" style={styles.button}>ADD</Button>
            </HStack>
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


    }
  });