import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
import DiagnosisScreen from "./pages/DiagnosisScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Diagnosis" component={DiagnosisScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}