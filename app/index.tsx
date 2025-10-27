import { router } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../hooks/useAuth';

export default function SplashScreen() {
  const { user, loading } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (user) {
        router.replace('/(tabs)');
      } else {
        router.replace('/login');
      }
    }, 2000);
  
  return () => clearTimeout(timer);
}, [user, loading]);

  
return  (
  <View style={styles.screen}>
    <Text style={styles.text}>
        Pick Me Girl
    </Text>
  </View>
 ) 
}

const styles = StyleSheet.create({
    screen: {
    //   backgroundColor: '',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        fontFamily: 'CoveredByYourGrace',
        color: '#C5C8F9',
        fontSize: 50,
    }
  }
  )