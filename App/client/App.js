import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./pages/HomeScreen";

import LoginScreen from "./pages/LoginScreen";
import SignupScreen from "./pages/SignupScreen";

import DashboardScreen from "./pages/DashboardScreen";

import InterviewScreen from "./pages/InterviewScreen";

import DiagnosisScreen from "./pages/DiagnosisScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        // <NavigationContainer>
        //     <Stack.Navigator>
        //         <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />

        //         <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        //         <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />

        //         <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />

        //         <Stack.Screen name="Interview" component={InterviewScreen} options={{ headerShown: false }} />

        //         <Stack.Screen name="Diagnosis" component={DiagnosisScreen} options={{ headerShown: false }} />
        //     </Stack.Navigator>
        // </NavigationContainer>
        <InterviewScreen />
    );
}