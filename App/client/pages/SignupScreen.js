import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from "react";
import TransparentStyledButton from "../components/TransparentStyledButton";
import colours from '../config/colours';
import Icon from 'react-native-vector-icons/AntDesign';

export default function SignupScreen({ navigation }) 
{
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleLogin = async() => {
        if (username.length === 0) {
            alert("Please enter a username");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
            return;
        }

        if (password.length < 8) {
            alert("Password must be at least 8 characters long");
            return;
        }

        if (password === password.toLowerCase()) {
            alert("Password must include at least one capital letter");
            return;
        }

        const hasNumber = /\d/;
        if (!hasNumber.test(password)) {
            alert("Password must include at least one number");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const response = await fetch("http://127.0.0.1:3001/api/user/new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, email, password }),
        });

        const data = await response.json();

        if (data.status === "SUCCESS") {
            alert("Success!");
            navigation.navigate("Diagnosis");
        }
        else {
            alert(data.message);
        }
    }

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
                    <Text style={styles.title}>Sign Up</Text>
                    <Text style={styles.instructionText}>Please register to continue</Text>
                </View>
            </View>

            <View style={styles.bottomContainer}>
                <View style={styles.inputContainer}>
                    <Icon name="user" size={24} color={colours.grey2} style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        onChangeText={setUsername}
                        value={username}
                        placeholder="Username"
                    />
                </View>

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

                <View style={styles.inputContainer}>
                    <Icon name="key" size={24} color={colours.grey2} style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        onChangeText={setConfirmPassword}
                        value={confirmPassword}
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                    />
                </View>

                <TransparentStyledButton
                    label="Sign Up"
                    onPress={handleLogin}
                    borderColour={colours.black}
                    textColour={colours.primary}
                /> 

                <Text style={styles.loginText}>Already have an account? <Text style={styles.linkText} onPress={() => navigation.navigate ("Login")}>Log in</Text></Text>
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
        paddingVertical: 50,
        gap: 5,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        height: 60,
        width: "100%",
        backgroundColor: colours.grey1,
        borderRadius: 100,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: colours.grey2,
        marginBottom: 20,
    },
    inputIcon: {
        marginRight: 15,
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
    loginText: {
        color: colours.secondary2,
        fontSize: 15,
        fontWeight: "500",
        fontFamily: "Helvetica Neue",
        marginTop: 10,
    },
});
