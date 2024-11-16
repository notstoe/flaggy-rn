import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import Colors from "./constants/Colors";
import { Pressable } from "react-native-gesture-handler";

export default function Index() {
  return (
    <View style={styles.pageContainer}>
      <Text>Welcome to the best flag game ever made ?</Text>
      <Pressable style={styles.btn} onPress={() => router.replace({ pathname: "/(tabs)" })}>
        <Text>Start</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
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
