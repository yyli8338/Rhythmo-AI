import React from "react";
import StyledButton from "../components/StyledButton";
import TransparentStyledButton from "../components/TransparentStyledButton";
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
} from "react-native";
import colours from "../config/colours";

export default function HomeScreen({ navigation }) {
    return (
        <ImageBackground
            source={require("../assets/background.png")}
            style={styles.container}
        >
            <View style={styles.buttonContainer}>
                <StyledButton
                    label="Login"
                    onPress={() => navigation.navigate("Login")}
                />
                <TransparentStyledButton
                    label="Create Account"
                    onPress={() => navigation.navigate("Signup")}
                />
            </View>
            <Text style={styles.title}>Rhythmo</Text>
            <Text style={styles.slogan}>Reveal, Repair, Reignite.</Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonContainer: {
        position: "absolute",
        bottom: 100,
        gap: 25,
    },
    title: {
        color: colours.white,
        fontSize: 80,
        fontWeight: "700",
        fontFamily: "Helvetica Neue",
        position: "absolute",
        top: "27%",
    },
    slogan: {
        color: colours.white,
        fontSize: 20,
        fontWeight: "700",
        fontFamily: "Helvetica Neue",
        position: "absolute",
        top: "40%",
    },
});
