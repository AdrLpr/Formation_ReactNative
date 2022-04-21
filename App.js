import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { useState } from "react"
import Auth from './components/page/Auth/Auth';
import Profil from './components/page/Profil/Profil';
import HeaderMessageCard from './components/hoc/HeaderMessageCard/HeaderMessageCard';




export default function App() {

  const [user , setUser] = useState(null)

  return (
    <ScrollView style={styles.container}>
        {user ? <Profil /> : <Auth />}
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: 'rgba(30,0,30 ,0.99)',

  },
  text: {
    color:"red",
    fontSize:100,
  }
});
