import { View, Text, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import FourImageCircle from "./FourImageCircle";

interface ChatHeaderProps {
  onMore: () => void;
  onBackPress: () => void;
  onEditPress: () => void;
}

const ChatHeader = ({
  onMore,
  onBackPress,
  onEditPress,
}: ChatHeaderProps) => {
  return (
    <View
      style={{
        paddingBottom: 16,
        paddingTop: 20,
        borderBottomWidth: 1,
        gap: 16,
        borderColor: "#E5E5E0",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
          borderColor: "green",
        }}
      >
        <Ionicons
          onPress={onBackPress}
          size={24}
          color={"black"}
          name="arrow-back"
        />
        <Text
          style={{
            fontFamily: "Mulish",
            fontSize: 24,
            fontWeight: "700",
            flex: 1,
          }}
        >
          Trip 1
        </Text>
        <Ionicons
          size={24}
          color={"black"}
          name="create-outline"
          onPress={onEditPress}
        />
      </View>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          gap: 16,
          borderColor: "blue",
        }}
      >
        <FourImageCircle/>
        <View
          style={{
            flex: 1,
          }}
        >
          <Text style={{ color: "##606060", fontSize: 16 }}>
            From{" "}
            <Text
              style={{
                fontFamily: "Mulish",
                fontWeight: "700",
                color: "black",
                fontSize: 18,
              }}
            >
              IGI Airport,T3
            </Text>
          </Text>
          <Text style={{ color: "##606060", fontSize: 16 }}>
            To{" "}
            <Text
              style={{
                fontFamily: "Mulish",
                fontWeight: "700",
                color: "black",
                fontSize: 18,
              }}
            >
              Sector 28
            </Text>
          </Text>
        </View>
        <Ionicons size={24} name="ellipsis-vertical" onPress={onMore} />
      </View>
    </View>
  );
};

export default ChatHeader;
