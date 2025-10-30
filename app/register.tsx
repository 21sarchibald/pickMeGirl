import { router } from 'expo-router';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { auth, db } from "../firebaseConfig";



export default function RegisterScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
const handleRegistration = async () => {
    
    
    try {
        console.log("button works")
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("Registration successful!");
        Alert.alert("Registration successful!");
        
        // Create user doc
        const userID = userCredential.user.uid;
        await setDoc(doc(db, "users", userID), {
            firstName: firstName,
            lastName: lastName,
            email: email,
            timestamp: serverTimestamp()
        })

        router.replace("/(tabs)");

    } catch (error: any) {
        console.error("Error registering new user", error.message);
        Alert.alert("Error registering new account", error.message);
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
        Create New Account
    </Text>
        <TextInput 
            placeholder="First name" 
            onChangeText={setFirstName} 
            value={firstName} 
            style={ styles.input }
            />
        <TextInput 
            placeholder="Last name" 
            onChangeText={setLastName} 
            value={lastName}
            style={ styles.input }
            />
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
        <TouchableOpacity style={styles.button} onPress={handleRegistration}>
                <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
        </View>
        <Text style={{ color: 'white' }}>Already have an account?</Text>
        <TouchableOpacity onPress={() => router.replace('/login')}>
            <Text style={{ color: '#C5C8F9', marginTop: 10, fontSize: 15 }}>Login here!</Text>
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