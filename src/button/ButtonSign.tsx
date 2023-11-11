import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function ButtonSign() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          borderRadius: 10,
          padding: 10,
          marginTop: 30,
          flexDirection: "row", // Menggunakan flexDirection untuk menyusun gambar dan teks secara horizontal
          alignItems: "center", // Agar gambar dan teks berada di tengah secara vertikal
          width: 330,
        }}
      >
        <Image
          source={require("../../assets/LogoGoogle.png")}
          style={{ width: 30, height: 45, marginLeft: 10 }}
        />
        <Text
          style={{
            color: "black",
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 10,
          }}
        >
          Login With Googles
        </Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Text style={{ color: "white", fontWeight: "bold",fontSize: 15 }}>
          Belum punya akun?{" "}
        </Text>
        <Text style={{ color: "green", fontWeight: "bold" }}>Registrasi</Text>
      </View>
      <Text style={{ color: "green", marginTop: 20 , fontWeight: "bold"}}>
        Lupa Password?
      </Text>
    </View>
  );
}
