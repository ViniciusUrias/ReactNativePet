import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Pets(props) {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.Container}>
            <Image source={props.cover} style={styles.cover} />


        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    Container: {
        marginTop: 20,
        backgroundColor: "#FFF",
        height: 100,
        width: 100,
        margin: 10,
        borderRadius: 30,
        margin: 10,
        elevation: 20,

    },
    cover: {
        width: 100,
        height: 100,
        borderRadius: 20,


    }
})

