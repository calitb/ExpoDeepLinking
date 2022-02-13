import { LinkingOptions, NavigationContainer } from "@react-navigation/native";
import * as Linking from "expo-linking";
import React from "react";
import { Text } from "react-native";
import Demo5 from "./demos/05-links/Demo5";
import { Routes } from "./demos/types";

const prefix = Linking.createURL("/");

export default function App() {
  const linking: LinkingOptions<{}> = {
    prefixes: [prefix],
    config: {
      screens: {
        [Routes.HomesTab]: {
          initialRouteName: Routes.Home,
          screens: {
            [Routes.Unknown]: "*",
            [Routes.Details]: "item/:id",
            [Routes.Modal]: "modal",
          },
        },
        [Routes.SettingsTab]: "settings",
      },
    },
  };

  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Demo5 />
    </NavigationContainer>
  );
}
