import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colours from '../config/colours';

export default function StyledButton(props) 
{
    const { label, onPress } = props;

    return <TouchableOpacity onPress={onPress}>
        <View style={styles.container} >
            <Text style={styles.text}>{label}</Text>
        </View>
    </TouchableOpacity>
}; 

const styles = StyleSheet.create({
    container: {
        width: 120, 
        height: 40, 
        backgroundColor: colours.primary,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    text: 
    {
        fontSize: 16,
        color: 'white',
    }
});
