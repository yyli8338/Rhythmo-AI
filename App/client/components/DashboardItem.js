import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colours from '../config/colours';
import Icon from 'react-native-vector-icons/AntDesign';

export default function DashboardItem(props) 
{
    const { id, name, date, onPress } = props;

    const containerStyle = id % 2 === 0 ? [styles.container, { backgroundColor: colours.secondary2 }] : [styles.container, { backgroundColor: colours.secondary1 }];

    return <TouchableOpacity onPress={onPress}>
        <View style={containerStyle} >
            <View style={styles.leftContainer}>
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.dateText}>{date}</Text>
            </View>
            <View style={styles.rightContainer}>
                <Icon name="right" size={30} color={colours.grey2} />
            </View>
        </View>
    </TouchableOpacity>
}; 

const styles = StyleSheet.create({
    container: {
        width: "100%", 
        height: 80, 
        padding: 20,
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        marginBottom: 5,
    },
    leftContainer: {
        width: "90%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    rightContainer: {
        width: "10%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    nameText: {
        fontSize: 25,
        color: colours.white,
        fontWeight: "700",
    },
    dateText: {
        fontSize: 15,
        color: colours.primary,
        fontWeight: "500",
    }
});
