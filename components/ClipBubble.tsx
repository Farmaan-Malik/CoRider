import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import SvgDocument from "./SvgDocument";

interface ClipBubbleProps{
    onCameraPress:()=>void
    onVideoCamPress:()=>void
    onDocumentPress:()=>void
}

const ClipBubble = ({onCameraPress,onVideoCamPress,onDocumentPress}:ClipBubbleProps) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 12,
        backgroundColor: "#008000",
        borderRadius:100
      }}
    >
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <Ionicons onPress={onCameraPress} color={"white"} size={20} name="camera-outline" />
        <Ionicons onPress={onVideoCamPress} color={"white"} size={20} name="videocam-outline" />
        <TouchableOpacity onPress={onDocumentPress}>
            <SvgDocument/>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 8,
          width: 8,
          transform: [{ rotate: "45deg" }],
          position: "absolute",
          bottom: -4,
          backgroundColor: "#008000",
        }}
      ></View>
    </View>
  );
};

export default ClipBubble;
