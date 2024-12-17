import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import { BubbleProps } from "./ChatBubble";

const ChatBubbleSelf: React.FC<BubbleProps> = ({ chat }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        minHeight: 40,
        alignItems: "center",
        gap: 8,
        marginVertical:20
      }}
    >
      <Text
        style={{
          backgroundColor: "#1C63D5",
          flex: 1,
          borderRadius: 12,
          padding: 8,
          borderBottomRightRadius: 0,
          shadowColor:'black',
          shadowOpacity:.2,
          shadowOffset:{width:0,height:4},
          shadowRadius:5,
          elevation:8,
          marginStart:52,
          color:'white',
          fontFamily:'Mulish',
          fontWeight:'600',
          lineHeight:18,
        }}
      >
        {chat.message}
      </Text>
    </View>
  );
};

export default ChatBubbleSelf;
