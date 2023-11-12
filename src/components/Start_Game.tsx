import React, { useEffect, useState } from "react";
import {
  Animated,
  Easing,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
export default function Start_Game() {
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
          width: "100%",
          height: "100%",
        }}
      >
        <View>
          <View>
            <Animated.Image
              source={require("../../assets/ButtonGaminhg.png")}
              resizeMode="cover"
              style={{
                width: 70,
                height: 70,
                backgroundColor: "#E0F4FF",
                borderRadius: 150,
                marginLeft: 25,
                marginTop: 25,
                ...rotateStyle,
              }}
            />
            <TouchableOpacity
              style={{
                position: "absolute",
                top: 40,
                right: 20,
                backgroundColor: "#22092C",
                borderRadius: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 15,
              }}
            >
              <Image
                source={require("../../assets/AVATAR/image_diamond.png")}
                style={{ width: 30, height: 30, marginRight: 5 }}
              />
              <Text style={{ color: "white", marginRight: 5 }}>21</Text>
              <FontAwesome name="plus" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 50,
            }}
          >
            <View>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/AVATAR/Avatar5.png")}
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: 150,
                    borderColor: "black",
                    borderWidth: 2,
                  }}
                />
                <MaterialIcons
                  name="edit"
                  size={20}
                  color="white"
                  style={{
                    position: "absolute",
                    top: 60,
                    left: 70,
                    backgroundColor: "blue",
                    borderRadius: 100,
                    padding: 3,
                    borderColor: "white",
                    borderWidth: 2,
                  }}
                />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                color: "white",
                marginTop: 20,
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Molusca_Bertulang
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 50,
            }}
          >
            <Image
              source={require("../../assets/AVATAR/image_start_game.png")}
              style={{ width: 170, height: 170 }}
            ></Image>
            <TouchableOpacity
              style={{
                width: 200,
                backgroundColor: "green",
                borderRadius: 10,
                padding: 10,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                START GAME
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}
