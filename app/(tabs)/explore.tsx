import Colors from "@/constants/Colors";
import { StackActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { Pressable } from "react-native-gesture-handler";

export default function TabTwoScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    Alert.alert("hey welcome to the app my friend!!!!!! ");
  }, []);

  return (
    <View style={styles.container}>
      <Text>This is the profile/explore tab</Text>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.dispatch(StackActions.replace("index", { screen: "index" }))}>
        <Text>Go To Landing Page</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  btn: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: Colors.light.btn,
    borderRadius: 8,
  },
});
