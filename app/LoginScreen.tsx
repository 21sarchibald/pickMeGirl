import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";



export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


const handleLogin = async () => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Login successful!");
    } catch (error) {
        console.error("Error logging in");
    }
};

return (
    <View>
        <TextInput 
            placeholder="Email" 
            onChangeText={setEmail} 
            value={email} 
            autoCapitalize="none"
        />
        <TextInput
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
        />
        <Button title="Login" onPress={handleLogin} />
    </View>
);

}