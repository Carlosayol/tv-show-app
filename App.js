import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/screens/Welcome';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    Gilroy: require("./assets/fonts/Gilroy-Light.otf"),
    GilroyBold: require("./assets/fonts/Gilroy-ExtraBold.otf")
  })

  if (!fontsLoaded) return null

  return (
    <View style={styles.container}>
      <Welcome/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
