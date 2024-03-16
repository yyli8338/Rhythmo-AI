import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from "react";

import colours from '../config/colours';
import Icon from 'react-native-vector-icons/AntDesign';

import { Dropdown } from 'react-native-element-dropdown';
import DashboardItem from '../components/DashboardItem';
import TransparentStyledButton from "../components/TransparentStyledButton";
import StyledButton from '../components/StyledButton';
import DropdownComponent from '../components/DropdownComponent';

const data = [
    { label: "Ankle", value: "Ankle" },
    { label: "Knee", value: "Knee" },
    { label: "Shin", value: "Shin" },
    { label: "Foot", value: "Foot" },
    { label: "Thigh", value: "Thigh" },
    { label: "Hand", value: "Hand" },
    { label: "Wrist", value: "Wrist" },
    { label: "Shoulder", value: "Shoulder" },
    { label: "Hip", value: "Hip" },
    { label: "Back", value: "Back" },
    { label: "Groin", value: "Groin" },
    { label: "Neck", value: "Neck" },
    { label: "Elbow", value: "Elbow" },
    { label: "Chest", value: "Chest" },
    { label: "Head", value: "Head" },
    { label: "Face", value: "Face" }
];

export default function InterviewScreen({ navigation }) {

    const handleNextQuestion = () => 
    {

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
                    <Text style={styles.title}>Rhythmo AI</Text>
                    <Text style={styles.instructionText}>Please answer the following questions to help us diagnose your injury.</Text>
                </View>
            </View>

            <View style={styles.bottomContainer}>
                <View style={{ width: "100%" }}>
                    <Text style={styles.questionText}>Which body part is injured? (1/16)</Text>

                    <DropdownComponent data={data} labelText={"Body Part"} />
                </View>
                
                <TransparentStyledButton
                    label="Next"
                    onPress={handleNextQuestion}
                    borderColour={colours.black}
                    textColour={colours.primary}
                /> 
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
        justifyContent: "space-between",
        gap: 20,
        paddingVertical: 30,
        paddingBottom: 80,
    },
    questionText: {
        fontSize: 20,
        fontWeight: "500",
        marginBottom: 20,
    },
});
