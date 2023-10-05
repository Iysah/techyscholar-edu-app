import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import theme from '../styles/theme'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'

export default function Login() {
    // Build Credentials NiZkGnO4cV
    // 796981680451-htjdf4221lja0n7q3gc2es0l2mtqvpfv.apps.googleusercontent.com

    WebBrowser.maybeCompleteAuthSession();
    const [request, response, prompAsync] = Google.useAuthRequest({
        androidClientId: '796981680451-htjdf4221lja0n7q3gc2es0l2mtqvpfv.apps.googleusercontent.com',
        expoClientId: '796981680451-cnra2eodnk09h0i32e4m6lnhmr3mrs4a.apps.googleusercontent.com', 
    });

  return (
    <View>
        <Image source={require('./../assets/image.png')} />
        <View style={styles.card}>
            <Text style={styles.welcomeText}>Welcome to TechyScholar!</Text>
            <Text style={styles.loginText}>Login/Signup</Text>

            <TouchableOpacity onPress={() => prompAsync()} style={styles.button}>
                <Ionicons name="logo-google" size={24} color="#fff" />
                <Text style={{ color: theme.white }}>Signin With Google</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        paddingTop: 40,
        marginTop: -25,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    welcomeText: {
        fontSize: 38, 
        textAlign: 'center', 
        fontWeight: 'bold',
    },
    loginText: {
        textAlign: 'center',
        fontSize: 18,
        marginTop: 80
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        backgroundColor: theme.primary,
        textAlign: 'center',
        padding: 10,
        margin: 30,
        color:'#fff',
        borderRadius: 6,
    }
})