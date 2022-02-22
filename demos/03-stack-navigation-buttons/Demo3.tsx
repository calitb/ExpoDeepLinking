import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Button, Platform, ScrollView, Text, View } from "react-native";
import { DetailsProps, HomeProps, ModalProps, Routes } from "../types";

function HomeScreen({ navigation, route }: HomeProps) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.navigate(Routes.Modal)} title="Open Modal" />
      ),
    });
  }, [navigation]);

  React.useEffect(()=>{
    if (route.params) {
      alert("New params: " + JSON.stringify(route.params))
    }
  },[route.params])
  
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View>
        <Button
          title="Navigate to Details"
          onPress={() => navigation.navigate(Routes.Details, { id: "123" })}
        />
      </View>
    </ScrollView>
  );
}

function DetailScreen({ navigation, route }: DetailsProps) {
  return (
    <View>
      <Text>Detail Screen for id: {route.params.id}</Text>
      <Button onPress={() => navigation.goBack()} title="Go Back" />
      <Button
        onPress={() =>
          navigation.navigate(Routes.Home, { msg: "This is a message" })
        }
        title="Send params back"
      />
      <Button
        title="Push to Details"
        onPress={() => navigation.push(Routes.Details, { id: "456" })}
      />
      <Button onPress={() => navigation.popToTop()} title="Go To Top" />
    </View>
  );
}

function ModalScreen({ navigation }: ModalProps) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: Platform.OS==='ios' ? () => (
        <Button onPress={() => navigation.goBack()} title="Go Back" />
      ) : undefined,
    });
  }, [navigation]);
  
  return (
    <View />
  );
}

const Stack = createNativeStackNavigator();

export default function Demo3() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.Home} component={HomeScreen} options={{ headerLargeTitle: true }}/>
      <Stack.Screen name={Routes.Details} component={DetailScreen} options={{headerBackTitle:'Back'}}/>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name={Routes.Modal} component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
