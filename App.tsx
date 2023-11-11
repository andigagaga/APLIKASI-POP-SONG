import React from "react";
import { View } from "react-native";
import Welcome from "./src/components/Home";

export default function App() {
  return (
    <View  style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Welcome/>
    </View>
  )
}
