import { router } from 'expo-router';
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { auth } from "../firebaseConfig";



export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


const handleLogin = async () => {
    try {
        console.log("button works")
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Login successful!");
        router.replace("/(tabs)")
    } catch (error: any) {
        console.error("Error logging in", error.message);
    }
};

return (
    <View style={styles.loginContainer}>
    
    <Text style={ styles.text }>
        Welcome to
    </Text>
    
    <Text style={ styles.heading }>
        Pick Me Girl
    </Text>


    <View style={ styles.card }>

    <Text style={ styles.cardText }>
        Please Login
    </Text>
        <TextInput 
            placeholder="Email" 
            onChangeText={setEmail} 
            value={email} 
            autoCapitalize="none"
            style={ styles.input }
            />
        <TextInput
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
            style={ styles.input }
            />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        </View>
        <Text style={{ color: 'white' }}>{`Don't have an account?`}</Text>
        <TouchableOpacity onPress={() => router.replace('/register')}>
            <Text style={{ color: '#C5C8F9', marginTop: 10, fontSize: 15 }}>Register here!</Text>
        </TouchableOpacity>
    </View>
);


}

const styles = StyleSheet.create({
    loginContainer: {
      flex: 1,
      alignItems: 'center',
    //   justifyContent: 'center',
      margin: 30
    },
    input: {
      height: 50,
      width: '80%',
      backgroundColor: '#C5C8F9',
      margin: 10,
      color: 'black',
      borderRadius: 10,
      padding: 5,
    },
    button: {
        margin: 15,
        // backgroundColor: 'white',
        padding: 7,
        alignItems: 'center',
        fontWeight: 'bold',
        backgroundColor: '#3E4190',
        borderRadius: 10,
    },
    buttonText: {
        fontWeight: 600,
        color: 'white',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
    card: {
      flex: .6,
      backgroundColor: '#eee',
      padding: 20,
      borderRadius: 5,
      boxShadow: '4pcx 4px rgba(0,0,0,0.1)',
      fontSize: 20,
      margin: 20,
      width: '70%',
    //   justifyContent: 'center',
      alignItems: 'center'
    },
    cardText: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 15,
        color: '#3E4190',
    },
    heading: {
        fontFamily: 'CoveredByYourGrace',
        color: '#C5C8F9',
        fontSize: 50,
    },
    text: {
    //   fontFamily: 'CoveredByYourGrace',
      color: 'white',
      fontSize: 30,
    },
  }
);  