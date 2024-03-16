import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from "react";

import colours from '../config/colours';
import Icon from 'react-native-vector-icons/AntDesign';

import DashboardItem from '../components/DashboardItem';
import TransparentStyledButton from "../components/TransparentStyledButton";
import StyledButton from '../components/StyledButton';

export default function DashboardScreen({ navigation, route }) {
    const { username } = route.params;

    const handleNewInjury = () => 
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
                    <Text style={styles.instructionText}>Welcome, {username}!</Text>
                </View>
            </View>

            <View style={styles.bottomContainer}>
                <ScrollView style={styles.scrollView}>
                    <DashboardItem
                        id={0}
                        name="In Progress"
                        date="16/3/24"
                        onPress={() => {}}
                    />
                    <DashboardItem
                        id={1}
                        name="Ankle Pain"
                        date="14/3/24"
                        onPress={() => {}}
                    />
                    <DashboardItem
                        id={2}
                        name="Ankle Pain"
                        date="14/3/24"
                        onPress={() => {}}
                    />
                    <DashboardItem
                        id={3}
                        name="Ankle Pain"
                        date="14/3/24"
                        onPress={() => {}}
                    />
                    <DashboardItem
                        id={4}
                        name="Ankle Pain"
                        date="14/3/24"
                        onPress={() => {}}
                    />
                    <DashboardItem
                        id={5}
                        name="Ankle Pain"
                        date="14/3/24"
                        onPress={() => {}}
                    />
                    <DashboardItem
                        id={6}
                        name="Ankle Pain"
                        date="14/3/24"
                        onPress={() => {}}
                    />
                    <DashboardItem
                        id={7}
                        name="Ankle Pain"
                        date="14/3/24"
                        onPress={() => {}}
                    />
                </ScrollView>

                <TransparentStyledButton
                    label="New Injury"
                    onPress={handleNewInjury}
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
        justifyContent: "flex-start",
        gap: 20,
        paddingVertical: 30,
    },
    scrollView: {
        backgroundColor: colours.grey1,
        borderRadius: 10,
    }
});
