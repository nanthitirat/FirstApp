import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { bounce } from 'react-native/Libraries/Animated/Easing';

export default function App() {
    return ( <
        View style = { styles.container } >
        <
        Text style = { styles.textbold } > Ms.Thitirat Maksaen < /Text>  <
        Text style = { styles.textbluebold } > Ms.Thitirat Maksaen < /Text>  <
        StatusBar style = "auto" / >
        <
        /View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textbold: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
    },
    textbluebold: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'blue'
    }
});