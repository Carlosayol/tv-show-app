import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { Octicons } from "@expo/vector-icons";

import Welcome from "./src/screens/Welcome";
import Home from "./src/screens/Home";
import Constants from "./src/utils/Constants";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Gilroy: require("./assets/fonts/Gilroy-Light.otf"),
    GilroyBold: require("./assets/fonts/Gilroy-ExtraBold.otf"),
  });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={headerStyle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const headerStyle = {
  headerStyle: { backgroundColor: Constants.secondaryColor },
  headerShadowVisible: false,
  headerTitleStyle: { color: "#FFFFFF", fontFamily: "Gilroy" },
  headerLeft: () => null,
  headerRight: () => (
    <Octicons
      name="gear"
      size={24}
      color={Constants.tertiaryColor}
      style={{ paddingRight: 20 }}
    />
  ),
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8e8e8",
    alignItems: "center",
    justifyContent: "center",
  },
});

