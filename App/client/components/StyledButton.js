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
        backgroundColor: "rgba(255, 255, 255, 1)",
        width: 250,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "100%",
    },
    text: {
        color: colours.primary,
        fontSize: 20,
        fontWeight: "700",
        fontFamily: "Helvetica Neue",
    },
});
