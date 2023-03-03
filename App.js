import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { useFonts } from "expo-font";
import { Octicons } from "@expo/vector-icons";

import Welcome from "./src/screens/Welcome";
import Show from "./src/screens/Show";
import ShowDetail from "./src/screens/ShowDetail";
import RecentDetail from "./src/screens/RecentDetail";
import Constants from "./src/utils/Constants";
import TabNavigator from "./src/navigation/TabNavigator";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Gilroy: require("./assets/fonts/Gilroy-Light.otf"),
    GilroyBold: require("./assets/fonts/Gilroy-ExtraBold.otf"),
  });

  const getHeaderTitle = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "Home"

    switch (routeName) {
      case "Home":
        return "Home";
      case "Favorites":
        return "Favorites";
      case "Recent":
        return "Recent";
    }
  };

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: "center", headerTintColor: Constants.primaryText }}>
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={({ route }) => ({
            ...headerStyle,
            headerLeft: () => null,
            headerRight: () => (
              <Octicons name="gear" size={24} color={Constants.tertiaryColor} style={{ paddingRight: 20 }} />
            ),
            headerTitle: getHeaderTitle(route),
          })}
        />
        <Stack.Screen
          name="Show"
          component={Show}
          options={{
            ...headerStyle,
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="ShowDetail"
          component={ShowDetail}
          options={{
            ...headerStyle,
            headerTitle: "",
            headerRight: () => (
              <Octicons name="heart" size={24} color={Constants.tertiaryColor} style={{ paddingRight: 20 }} />
            ),
          }}
        />
        <Stack.Screen
          name="RecentDetail"
          component={RecentDetail}
          options={{
            ...headerStyle,
            headerTitle: "",
            headerRight: () => (
              <Octicons name="gear" size={24} color={Constants.tertiaryColor} style={{ paddingRight: 20 }} />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const headerStyle = {
  headerStyle: { backgroundColor: Constants.secondaryColor },
  headerShadowVisible: false,
  headerTitleStyle: { color: Constants.primaryText, fontFamily: "Gilroy" },
};

