import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Link } from '@react-navigation/native';
import * as React from "react";
import { View } from "react-native";
import { Routes, SettingsProps } from "../types";
import HomeStack from "./HomeStack";
import LinkButton from './LinkButton';

function SettingsScreen({ navigation }: SettingsProps) {
  return (
    <View>
      <Link to={{ screen: Routes.Details, params: { id: "jane" } }}>
        Navigate to Details
      </Link>

      <LinkButton to="/modal">Open Modal</LinkButton>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Demo5() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName: React.ComponentProps<typeof Ionicons>['name'] = 'home';
        if (route.name === Routes.HomesTab) {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === Routes.SettingsTab) {
          iconName = focused ? 'settings' : 'settings-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name={Routes.HomesTab} component={HomeStack} options={{ headerShown: false }} />
      <Tab.Screen name={Routes.SettingsTab} component={SettingsScreen} options={{title:'Settings'}} />
    </Tab.Navigator>
  );
}
