[![runs with Expo Go](https://img.shields.io/badge/Runs%20with%20Expo%20Go-000.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.io/client)

# Expo, ReactNavigation, and Deep Linking

## Installing Expo

```shell
npm install -g expo-cli
```

and follow the <b>Expo CLI Quickstart</b> guide [here](https://reactnative.dev/docs/environment-setup)

## Running the App in your device

### Start Expo

```shell
yarn start
```

### Android

1. Install the Expo Go app [Here](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=es&gl=US)
2. Open the Expo Go app and scan the QRCode shown in the terminal.

### iOS

1. Install the Expo Go app [Here](https://apps.apple.com/us/app/expo-go/id982107779)
2. Open the Camera app and scan the QRCode shown in the terminal.

## Running the App in your iOS Simulator / Android Emulator

Make sure to follow the <b>React Native CLI Quickstart</b> guide [here](https://reactnative.dev/docs/environment-setup) since you will need to configure Xcode and Android Studio for this.

### iOS Simulator

```shell
yarn ios
```

### Android Emulator

```shell
yarn android
```

## Trying Deep Linking

In `App.tsx` make sure to run the Demo4 or Demo5 and then try the following commands (switch to `--android` if needed)

```shell
# It will open the Details page
npx uri-scheme open "exp://127.0.0.1:19000/--/item/2" --ios

# It will open the Modal page
npx uri-scheme open "exp://127.0.0.1:19000/--/modal" --ios

# It will open the Settings page
npx uri-scheme open "exp://127.0.0.1:19000/--/settings" --ios

# It will open the Unknown page
npx uri-scheme open "exp://127.0.0.1:19000/--/unknown/4" --ios
```
