import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    'CoveredByYourGrace': require('../assets/fonts/CoveredByYourGrace-Regular.ttf'),
  });
  
  if (!fontsLoaded) return null;

  const MyDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: "black",
      card: "black",
      text: "white",
    },
  };

  const MyDefaultTheme = {
    ...DefaultTheme, 
    colors: {
      ...DefaultTheme.colors,
      background: "black",
      card: "black",
      text: "white",
    }
  };

  return (
    <ThemeProvider value={colorScheme === 'dark' ? MyDarkTheme : MyDefaultTheme}>
      <View style={styles.container}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },

})