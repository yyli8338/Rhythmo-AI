import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colours from '../config/colours';

export default function StyledButton(props) {
    const { label, onPress, textColour, borderColour } = props;

    return (
        <TouchableOpacity 
            onPress={onPress} 
            style={[
                styles.container, 
                { borderColor: borderColour || colours.white } // Use borderColour if provided, otherwise default to colours.white
            ]}
        >
            <Text 
                style={[
                    styles.text, 
                    { color: textColour || colours.white } // Use textColour if provided, otherwise default to colours.white
                ]}
            >
                {label}
            </Text>
        </TouchableOpacity>
    );
}; 

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        width: 250,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100, // Changed from "100%" to 100 for React Native compatibility
    },
    text: {
        // color removed from here and applied inline
        fontSize: 20,
        fontWeight: "700",
        fontFamily: "Helvetica Neue",
    },
});
