import React from "react";
import { Tabs } from "expo-router";
import { StyleSheet, useColorScheme } from "react-native";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Play",
          tabBarIcon: ({ color }) => <Ionicons name="game-controller" size={32} color={color} />,
          tabBarLabelStyle: styles.label,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <Ionicons name="cog-sharp" size={32} color={color} />,
          tabBarLabelStyle: styles.label,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  label: {
    marginTop: 4,
    fontSize: 12,
  },
});
