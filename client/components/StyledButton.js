import React from 'react';
import { StyleSheet, View } from "react-native";

export default function StyledButton(props) 
{
    const { label } = props;

    return <View style={styles.container}>
        <Text>{label}</Text>
    </View>
}