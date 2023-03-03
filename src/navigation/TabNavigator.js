import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Octicons, MaterialIcons } from "@expo/vector-icons";

import Home from "../screens/Home";
import Recents from "../screens/Recents";
import Favorites from "../screens/Favorites";
import Constants from "../utils/Constants";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const SearchButton = () => {
    return null;
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Constants.primaryColor,
        tabBarStyle: { backgroundColor: Constants.secondaryColor },
      }}
    >
      <Tab.Screen
        name="Home "
        component={Home}
        options={{
          tabBarIcon: () => <Octicons name="home" size={24} color={Constants.primaryText} />,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: () => <Octicons name="heart" size={24} color={Constants.primaryText} />,
        }}
      />
      <Tab.Screen
        name="Recent"
        component={Recents}
        options={{
          tabBarIcon: () => <MaterialIcons name="access-time" size={24} color={Constants.primaryText} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchButton}
        options={{
          tabBarIcon: () => <Octicons name="search" size={24} color={Constants.primaryText} />,
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault(); // — > the main part
          },
        }}
      />
    </Tab.Navigator>
  );
};

const headerStyle = {
  headerStyle: { backgroundColor: Constants.secondaryColor },
  headerShadowVisible: false,
  headerTitleStyle: { color: "#FFFFFF", fontFamily: "Gilroy" },
};

export default TabNavigator;
