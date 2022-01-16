import "./global";

import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Platform } from "react-native";
import WalletConnectProvider from "@walletconnect/react-native-dapp";
import AsyncStorage from "@react-native-async-storage/async-storage";

import WalletConnectExperience from "./WalletConnectExperience";

const SCHEME_FROM_APP_JSON = "walletconnect-example";

export default function App() {
  return (
    <WalletConnectProvider
      redirectUrl={
        Platform.OS === "web"
          ? window.location.origin
          : `${SCHEME_FROM_APP_JSON}://`
      }
      storageOptions={{
        asyncStorage: AsyncStorage,
      }}
    >
      <View style={styles.container}>
        <WalletConnectExperience />
        <StatusBar style="auto" />
      </View>
    </WalletConnectProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
