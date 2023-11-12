import React, { useEffect, useState } from "react";
import {
  Animated,
  Easing,
  Image,
  ImageBackground,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Avatar_Page() {
  const [animatedValue] = useState(new Animated.Value(0));

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 2,
          duration: 5500,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 5500,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ]),
      { iterations: -1 } // -1 untuk membuat animasi berulang terus menerus
    ).start();
  };

  useEffect(() => {
    startAnimation();
  }, []);

  const interpolatedValue = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const rotateStyle = {
    transform: [{ rotate: interpolatedValue }],
  };

  return (
    <>
      <ImageBackground
        source={require("../../assets/Background.png")}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <View style={{ marginTop: 80 }}>
          <StatusBar barStyle="light-content" backgroundColor="transparent" />
          {/* <TouchableOpacity
          style={{ borderRadius: 150, overflow: "hidden", padding: 10 }}
        > */}
          <Animated.Image
            source={require("../../assets/ButtonGaminhg.png")}
            resizeMode="cover"
            style={{
              width: 150,
              height: 100,
              backgroundColor: "#E0F4FF",
              borderRadius: 150,
              ...rotateStyle,
            }}
          />
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <View
            style={{ marginTop: 80, display: "flex", flexDirection: "row" }}
          >
            <TouchableOpacity>
              <Image
                source={require("../../assets/AVATAR/Avatar.png")}
                style={{ width: 60, height: 60, borderRadius: 150 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../../assets/AVATAR/Avatar.png")}
                style={{
                  width: 60,
                  height: 60,
                  marginHorizontal: 15,
                  borderRadius: 150,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../../assets/AVATAR/Avatar1.png")}
                style={{ width: 60, height: 60, borderRadius: 150 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../../assets/AVATAR/Avatar2.png")}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 150,
                  marginLeft: 15,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{ marginTop: 25, display: "flex", flexDirection: "row" }}
          >
            <TouchableOpacity>
              <Image
                source={require("../../assets/AVATAR/Avatar3.png")}
                style={{ width: 60, height: 60, borderRadius: 150 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../../assets/AVATAR/Avatar4.png")}
                style={{
                  width: 60,
                  height: 60,
                  marginHorizontal: 15,
                  borderRadius: 150,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../../assets/AVATAR/Avatar5.png")}
                style={{ width: 60, height: 60, borderRadius: 150 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../../assets/AVATAR/Avatar3.png")}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 150,
                  marginLeft: 15,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{ marginTop: 25, display: "flex", flexDirection: "row" }}
          >
            <TouchableOpacity>
              <Image
                source={require("../../assets/AVATAR/Avatar3.png")}
                style={{ width: 60, height: 60, borderRadius: 150 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../../assets/AVATAR/Avatar4.png")}
                style={{
                  width: 60,
                  height: 60,
                  marginHorizontal: 15,
                  borderRadius: 150,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../../assets/AVATAR/Avatar5.png")}
                style={{ width: 60, height: 60, borderRadius: 150 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../../assets/AVATAR/Avatar3.png")}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 150,
                  marginLeft: 15,
                }}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TextInput
              style={{
                marginTop: 20,
                width: 300,
                backgroundColor: "white",
                borderRadius: 10,
                padding: 10,
              }}
              placeholder="Enter your name"
            ></TextInput>
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "green",
                borderRadius: 10,
                padding: 10,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}
