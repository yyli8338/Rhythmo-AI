import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colours from '../config/colours';

export default function DiagnosisItem(props) 
{
    const { id, name, description, severity, onPress } = props;

    return <TouchableOpacity onPress={onPress}>
        <View style={styles.container} >
            <Text numberOfLines={2} style={styles.text}>{id}. {name} - {severity}</Text>
            <Text numberOfLines={2} style={styles.text}>{description}</Text>
        </View>
    </TouchableOpacity>
}; 

const styles = StyleSheet.create({
    container: {
        width: "100%", 
        height: 80, 
        padding: 20,
        backgroundColor: colours.primary,
        // alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    text: 
    {
        fontSize: 16,
        color: 'white',
    }
});
