import React, { useState, useEffect } from "react";
import ButtonSign from "../button/ButtonSign";


import {
  Animated,
  Easing,
  ImageBackground,
  View,
  StatusBar,
} from "react-native";

export default function Welcome() {
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

  const startBlinkingAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ]),
      { iterations: -1 }
    ).start();
  };

  useEffect(() => {
    startBlinkingAnimation();
  }, []);

  const blinkStyle = {
    opacity: animatedValue,
  };

  return (
    <>
      <ImageBackground
        source={require("../../assets/background.jpg")}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
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
        {/* </TouchableOpacity> */}

        <Animated.Text
          style={{
            ...blinkStyle,
            fontSize: 20,
            color: "black",
            fontWeight: "bold",
            marginTop: 40,
          }}
        >
          WELCOME!, Login to Start Game
        </Animated.Text>
        <View style={{ marginTop:90 }}>
          <ButtonSign />
        </View>
      </ImageBackground>
    </>
  );
}
