import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from "react";

import colours from '../config/colours';
import Icon from 'react-native-vector-icons/AntDesign';

import { Dropdown } from 'react-native-element-dropdown';
import DashboardItem from '../components/DashboardItem';
import TransparentStyledButton from "../components/TransparentStyledButton";
import StyledButton from '../components/StyledButton';
import DropdownComponent from '../components/DropdownComponent';

const questionData = [
    {
        questionNum: 1,
        questionText: "Which body part is injured?",
        type: "dropdown",
        options: ["Ankle", "Knee", "Shin", "Foot", "Thigh", "Hand", "Wrist", "Shoulder", "Hip", "Back", "Groin", "Neck", "Elbow", "Chest", "Head", "Face"]
    },
    {
        questionNum: 2,
        questionText: "What does the pain feel like?",
        type: "dropdown",
        options: ["Sore", "Stabbing", "Aching", "Burning", "Catching", "Tearing", "Grinding", "Throbbing", "Sharp", "Dull", "Numb", "Tingling", "Pins and Needles"]
    },
    {
        questionNum: 3,
        questionText: "How often do you feel the pain?",
        type: "dropdown",
        options: ["Consistently", "Every 1-2 hours", "Every 1-2 days", "Every 1 week", "Greater than 1 week intervals"]
    },
    {
        questionNum: 4,
        questionText: "Is there a particular time of day the pain is more intense?",
        type: "dropdownWithOther",
        options: ["Yes", "No"],
        otherText: "Yes", // if "Yes" is selected, show text input
        otherPrompt: "When is the pain more intense OR what triggers the pain?"
    },
    {
        questionNum: 5,
        questionText: "For how long does the pain bother you?",
        type: "dropdown",
        options: ["Around 5-10 minutes", "Around 30 minutes", "Around 1-2 hours", "Greater than 2 hours", "Constantly"]
    },
    {
        questionNum: 6,
        questionText: "On a scale of 1 to 10, how bad does the injury hurt?",
        type: "slider",
        // for slider, option text will be shown when the number will selected
        // numbers on slider will be 1 to length of options
        options: ["Pain is barely noticeable and is often forgotten about", "Pain is minor, though there are occasional moments of stronger pain", "Pain is noticeable and can be distracting, but not disruptive", "Pain is moderate and can affect athletic activities", "Pain is very distracting, but can be managed to continue to participate in some activities", "Pain is starting to intefere with daily activities and may result in difficutly concentrating", "Pain is severe, significantly limits daily life, and can affect sleep", "Pain is intense and physical activity is very limited", "Pain is excruciating, physical activity is impossible, and nearly every movment hurts", "Pain is unspeakable. Likely bedridden and delirious. This is a rare case."]
    },
    {
        questionNum: 7,
        questionText: "What are the symptoms you're experiencing? (Select all that apply)",
        type: "multiSelectWithOther",
        options: ["Sudden, severe pain", "Swelling or bruising", "Not being able to place weight on a leg, knee, ankle, or foot", "A bone or joint is visibly out of place", "Weakness of an injured limb", "Not being able to move a joint normally", "Other"],
        otherText: "Other", // if "Other" is selected, show text input
        otherPrompt: "What other symptoms are you experiencing? (include all that apply)"
    },
    {
        questionNum: 8,
        questionText: "Are there any movements here that you can't do?",
        type: "multiSelectWithOther",
        options: ["Bending", "Twisting", "Lifting", "Carrying", "Sleeping", "Jumping", "Stair climbing", "Sit to stand", "Rolling over", "Walking", "Squatting", "Lunging", "Kicking", "Other"],
        otherText: "Other", // if "Other" is selected, show text input
        otherPrompt: "What other movements can't you do?"
    },
    {
        questionNum: 9,
        questionText: "Did you hear any sound such as a tear, rip, snap, or pop?",
        type: "dropdownWithOther",
        options: ["Yes", "No"],
        otherText: "Yes", // if "Yes" is selected, show text input
        otherPrompt: "What sound did you hear?"
    },
    {
        questionNum: 10,
        questionText: "Are you experiencing any tingling or numbness anywhere in your body?",
        type: "dropdownWithOther",
        options: ["Yes", "No"],
        otherText: "Yes", // if "Yes" is selected, show text input
        otherPrompt: "Where are you experiencing the tingling or numbness?"
    },
    {
        questionNum: 11,
        questionText: "Does it just hurt to touch?",
        type: "dropdown",
        options: ["Yes", "No"]
    },
    {
        questionNum: 12,
        questionText: "Please describe the situation in which the injury was caused AND/OR when the pain started. Include any relevant details. More information will help us diagnose your injury with greater accuracy.",
        type: "textInput"
    },
]

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
