import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colours from '../config/colours';

export default function StyledButton(props) 
{
    const { label, onPress } = props;

    return <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
}; 

const styles = StyleSheet.create({
    container: {
        borderWidth: 1.5,
        borderColor: colours.white,
        width: 290,
        height: 68,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "100%",
    },
    text: {
        color: colours.white,
        fontSize: 20,
        fontWeight: "700",
        fontFamily: "Helvetica Neue",
    },
});
