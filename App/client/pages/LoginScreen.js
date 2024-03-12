import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from "react";
import TransparentStyledButton from "../components/TransparentStyledButton";
import colours from '../config/colours';
import Icon from 'react-native-vector-icons/AntDesign';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <View
                style={styles.topContainer}
            >
                <Image
                    source={require("../assets/gradient.png")}
                    style={styles.backgroundImage}
                />
                <Text style={styles.logo}>R</Text>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Login</Text>
                    <Text style={styles.instructionText}>Please sign in to continue</Text>
                </View>
            </View>

            <View style={styles.bottomContainer}>
                <View style={styles.inputContainer}>
                    <Icon name="mail" size={24} color={colours.grey2} style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Icon name="key" size={24} color={colours.grey2} style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                </View>

                <TouchableOpacity style={styles.forgotPasswordContainer}>
                    <Text style={styles.linkText}>Forgot Password?</Text>
                </TouchableOpacity>

                <TransparentStyledButton
                    label="Login"
                    onPress={() => navigation.navigate("Diagnosis")}
                    borderColour={colours.black}
                    textColour={colours.primary}
                /> 

                <Text style={styles.signupText}>Don't have an account? <Text style={styles.linkText}>Sign up</Text></Text>
            </View>
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
    topContainer: {
        backgroundColor: colours.primary,
        // background image from ../assets/background.png

        width: "100%",
        height: "40%",
        display: "flex",
        alignItems: "start",
        justifyContent: "flex-end",
    },
    titleContainer: {
        paddingHorizontal: 30,
        paddingVertical: 50,
    },
    backgroundImage: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: "100%",
    },
    title: {
        color: colours.white,
        fontSize: 45,
        fontWeight: "700",
        fontFamily: "Helvetica Neue",
    },
    instructionText: {
        color: colours.secondary1,
        fontSize: 20,
        fontWeight: "500",
        fontFamily: "Helvetica Neue",
        marginTop: 10,
    },
    logo: {
        color: colours.white,
        fontSize: 50,
        fontWeight: "700",
        fontFamily: "Helvetica Neue",
        position: "absolute",
        top: "20%",
        right: "10%",
    },
    bottomContainer: {
        backgroundColor: colours.white,
        width: "80%",
        height: "60%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        paddingVertical: 50,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        height: 70,
        width: "100%",
        backgroundColor: colours.grey1,
        borderRadius: 100,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: colours.grey2,
        marginBottom: 20,
    },
    inputIcon: {
        marginRight: 10,
    },
    input: {
        fontFamily: "Helvetica Neue",
        fontSize: 20,
        fontWeight: "700",
        color: colours.grey2,
        flex: 1,
    },
    forgotPasswordContainer: {
        width: "100%",
    },
    linkText: {
        color: colours.primary,
        textAlign: "right",
        marginBottom: 20,
        textDecorationLine: "underline",
        fontSize: 15,
        fontWeight: "500",
    },
    signupText: {
        color: colours.secondary2,
        fontSize: 15,
        fontWeight: "500",
        fontFamily: "Helvetica Neue",
    },
});
