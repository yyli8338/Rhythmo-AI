import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React, { useState } from "react";

import StyledButton from "../components/StyledButton";
import DiagnosisItem from "../components/DiagnosisItem";

export default function DiagnosisScreen({ navigation }) {
    const DUMMY_DATA = [
        {
            id: "1",
            name: "Ankle Tendonitis",
            description: "Ankle tendonitis is inflammation of the tendons surrounding the ankle joint. It can be caused by injury or excessive strain, and can lead to pain and swelling.",
            severity: 5,
        },
        {
            id: "2",
            name: "Lateral Ankle Sprain",
            description: "A lateral ankle sprain is an injury to the ligaments on the outside of the ankle. It is a common injury among athletes and can be caused by a sudden twist or turn of the ankle.",
            severity: 8,
        },
        {
            id: "3",
            name: "Ankle Ligament Tear",
            description: "An ankle ligament tear is a tear in one of the ligaments surrounding the ankle joint. It can be caused by a sudden twist or turn of the ankle, and can lead to pain and swelling.",
            severity: 10,
        }
    ]

    return (
        <View style={styles.container}>
            <Text>Diagnosis</Text>
            <Text>Based on your inputs, here are the possible diagnoses:</Text>

            <View style={styles.itemContainer}>
                { DUMMY_DATA.map((item) => (
                    <DiagnosisItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        severity={item.severity}
                        onPress={() => console.log("Pressed")}
                    />
                )) }
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
    itemContainer: {
        flex: 1,
        width: "85%",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
    }
});
