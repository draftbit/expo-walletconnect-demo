import * as React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useWalletConnect } from "@walletconnect/react-native-dapp";

const shortenAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(
    address.length - 4,
    address.length
  )}`;
};

function Button({ onPress, label }: any) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

export default function WalletConnectExperience() {
  const connector = useWalletConnect();

  const connectWallet = React.useCallback(() => {
    return connector.connect();
  }, [connector]);

  const killSession = React.useCallback(() => {
    return connector.killSession();
  }, [connector]);

  return (
    <>
      {!connector.connected ? (
        <Button onPress={connectWallet} label="Connect a wallet" />
      ) : (
        <>
          <Text>{shortenAddress(connector.accounts[0])}</Text>
          <Button onPress={killSession} label="Log out" />
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#5A45FF",
    color: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
