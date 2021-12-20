import { useState, useEffect } from 'react';
import { Button, ScrollView, Text, StyleSheet, TextInput, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Box } from 'native-base';
import { DataTable } from 'react-native-paper';
import { eventsList } from '../test-data/eventList';

export default function ClientPage({ navigation }) {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        setEvents(eventsList);
    })

    return (
        <>
            <Appbar.Header style={styles.appbar}>
                <Appbar.BackAction color="#03b126" onPress={() => { navigation.navigate('Dashboard'); }}/>
                <Appbar.Content title="ClientName" color="#03b126" />
            </Appbar.Header>

            <Box style={styles.table}>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Date</DataTable.Title>
                    <DataTable.Title>Type</DataTable.Title>
                    <DataTable.Title numeric >Amount</DataTable.Title>
                </DataTable.Header>
                {events.map( (event) => { 
                    return (
                        <DataTable.Row>
                            <DataTable.Cell>{ `${new Date(event.date).toLocaleDateString()}` }</DataTable.Cell>
                            <DataTable.Cell>{ `${event.type}` }</DataTable.Cell>
                            <DataTable.Cell numeric>{ `$${event.amount}` }</DataTable.Cell>
                        </DataTable.Row>
                        )
                    }) 
                }
            </DataTable>
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

    }
  });
