import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React, { useState } from "react";
import StyledButton from "../components/StyledButton";

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <Text>Login</Text>

            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Password"
                secureTextEntry={true}
            />

            <StyledButton
                label="Login"
                onPress={() => navigation.navigate("Diagnosis")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        width: "80%",
        borderBottomWidth: 1,
    },
});
