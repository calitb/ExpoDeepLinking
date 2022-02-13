import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { Button, View } from "react-native";
import { Routes, SettingsProps } from "../types";
import HomeStack from "./HomeStack";

function SettingsScreen({ navigation }: SettingsProps) {
  return (
    <View>
      <Button
        title="Navigate to Details"
        onPress={() => navigation.navigate(Routes.Details, { id: "456" })}
      />
      <Button
        title="Open Modal"
        onPress={() => navigation.navigate(Routes.Modal)}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Demo4() {
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
