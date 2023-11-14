import React from 'react';
import { StyleSheet, Text, View, Button } from "react-native";

export default function HomeScreen({ navigation }) 
{
    return <View style={styles.container}>
        <Text>Welcome to Rhythmo AI!</Text>
        <Button 
            title="Let's Go"
            onPress={() => navigation.navigate("Login")}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
