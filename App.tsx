import React from "react";
import { View } from "react-native";
// import Welcome from "./src/components/Home";
// import Avatar_Page from "./src/components/Avatar_Page";
import Start_Game from "./src/components/Start_Game";

export default function App() {
  return (
    <View  style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <Welcome/> */}
      {/* <Avatar_Page/> */}
      <Start_Game/>
    </View>
  )
}
