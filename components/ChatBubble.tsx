import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import SvgVerified from "@/components/SvgVerified";
import { Chat } from "@/api/apiCalls";

export interface BubbleProps {
    chat: Chat; 
  }

const ChatBubble : React.FC<BubbleProps> = ({ chat }) => {
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
      <View style={{alignSelf:'flex-start'}}>
        <Image
          resizeMode="cover"
          style={{ width: 24, height: 24, borderRadius: 50,}}
          source={{
            uri: chat.sender.image,
          }}
        />
        {chat.sender.is_kyc_verified &&
        <View style={{ position: "absolute", bottom: 0, right: 0 }}>
          <SvgVerified />
        </View>
        }
      </View>
      <Text
        style={{
          backgroundColor: "white",
          flex: 1,
          borderRadius: 12,
          padding: 8,
          borderTopLeftRadius: 0,
          shadowColor:'black',
          shadowOpacity:.2,
          shadowOffset:{width:0,height:4},
          shadowRadius:5,
          elevation:8,
          marginEnd:20,
          color:'#606060',
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

export default ChatBubble;
