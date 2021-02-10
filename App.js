import 'react-native-gesture-handler';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import React from 'react';
import Router from './src/routes'
import AppLoading from 'expo-app-loading'
export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <Router />
    </>
  );
}



