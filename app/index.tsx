import { Chat, getTexts } from "@/api/apiCalls";
import ChatBubble from "@/components/ChatBubble";
import ChatBubbleSelf from "@/components/ChatBubbleSelf";
import ChatHeader from "@/components/ChatHeader";
import ClipBubble from "@/components/ClipBubble";
import SvgReport from "@/components/SVGRender";
import SvgPaperClip from "@/components/SvgPaperClip";
import SvgSend from "@/components/SvgSend";
import { Ionicons } from "@expo/vector-icons";
import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  RefreshControl,
  SectionList,
  StyleSheet,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
  const [showMore, toggleMore] = useState(false);
  const [showClip, toggleClip] = useState(false);
  const [data, setData] = useState<Chat[]>([]);
  const [currentPage, setPage] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [scrollToBottom, setScroll] = useState(true);
  const sectionListRef = useRef<SectionList>(null);
  const [desiredIndex,setDesiredIndex]=useState('')
  const [visibleIndex, setVisibleIndex] = useState(null);
  const latestId = useRef(desiredIndex)

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
      const targetItem = viewableItems.find((item : any) => item.item.id === latestId.current);
      if (targetItem) {
        setVisibleIndex(targetItem.index);
        apiCall()
      }
  }).current;

  const groupMessagesByDate = (messages: Chat[]) => {
    const grouped = messages.reduce((acc: any[], message: Chat) => {
      const date = dayjs(message.time).format("MMMM DD, YYYY");
      const existingSection = acc.find((section) => section.title === date);
      if (existingSection) {
        existingSection.data.push(message);
      } else {
        acc.push({ title: date, data: [message] });
      }
      return acc;
    }, []);
    return grouped;
  };
  useEffect(() => {
    latestId.current = desiredIndex;
  }, [desiredIndex]);
  const groupedData = groupMessagesByDate(data);
  const apiCall = async () => {
    const chat = await getTexts(currentPage);
    if (chat) {
      setDesiredIndex(chat[0].id)

      setData((prev) => [...chat,...prev,]);

    }
  };
  useEffect(() => {
    apiCall().then(() => {
      setTimeout(()=>{setScroll(false)},500)
    });
  }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#FAF9F4",
        width: "100%",
        height: "100%",
        paddingHorizontal: 16,
      }}
    >
      {showClip && (
        <View
          style={{
            width: screenWidth / 3,
            position: "absolute",
            bottom: Platform.OS==='android' ? "5%" : '10%',
            right: 16,
            zIndex: 1,
          }}
        >
          <ClipBubble
            onCameraPress={() => {}}
            onDocumentPress={() => {}}
            onVideoCamPress={() => {}}
          />
        </View>
      )}
      {showMore && (
        <View
          style={{
            width: screenWidth / 2.2,
            position: "absolute",
            right: 16,
            top: Platform.OS === 'ios' ? "20%" : '12%',
            borderRadius: 8,
            backgroundColor: "white",
            zIndex: 1,
            shadowColor: "black",
            shadowOffset: { width: 0, height: 4 },
            shadowRadius: 8,
            shadowOpacity: 0.12,
            elevation:8
          }}
        >
          <TouchableOpacity
            style={{
              paddingHorizontal: 12,
              paddingVertical: 14,
              flexDirection: "row",
              gap: 12,
              alignItems: "center",
            }}
          >
            <Ionicons size={20} name="people-outline" />
            <Text
              style={{ fontFamily: "Mulish", fontWeight: "600", fontSize: 14 }}
            >
              Members
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingHorizontal: 12,
              paddingVertical: 14,
              flexDirection: "row",
              gap: 12,
              alignItems: "center",
            }}
          >
            <Ionicons size={20} name="call-outline" />
            <Text
              style={{ fontFamily: "Mulish", fontWeight: "600", fontSize: 14 }}
            >
              Share Number
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingHorizontal: 12,
              paddingVertical: 14,
              flexDirection: "row",
              gap: 12,
              alignItems: "center",
            }}
          >
            <SvgReport />
            <Text
              style={{ fontFamily: "Mulish", fontWeight: "600", fontSize: 14 }}
            >
              Report
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={{ flex: 1 }}>
        {data != undefined && (
          <ChatHeader
            onEditPress={() => {}}
            onBackPress={() => {}}
            onMore={() => {
              toggleMore(!showMore);
            }}
          />
        )}
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          keyboardVerticalOffset={60}
          behavior="padding"
        >
          {data && (
            <SectionList
            ref={sectionListRef}
            sections={groupedData}
            viewabilityConfig={{itemVisiblePercentThreshold:5}}
            onViewableItemsChanged={onViewableItemsChanged}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            renderItem={({ item }) => (
              item.sender.self ? <ChatBubbleSelf chat={item} /> : <ChatBubble chat={item} />
            )}
            renderSectionHeader={({ section: { title } }) => (
              <View style={{ alignItems: "center", gap: 2, flexDirection: "row" }}>
                <View style={{ borderWidth: StyleSheet.hairlineWidth, flex: 1, borderColor: "#B7B7B7", marginEnd: 12 }} />
                <Text style={{ fontWeight: "400", color: "#B7B7B7", fontFamily: "Mulish", lineHeight: 18 }}>{title}</Text>
                <View style={{ borderWidth: StyleSheet.hairlineWidth, flex: 1, borderColor: "#B7B7B7", marginStart: 12 }} />
              </View>
            )}
            getItemLayout={(data, index) => {
              return {
                length: 80,
                offset: (80 + 80) * index,
                index,
              };
            }}
            onScrollToIndexFailed={(info) => {
              console.warn("Scroll to index failed:", info);
              setTimeout(() => {
                sectionListRef.current?.scrollToLocation({
                  sectionIndex: info.highestMeasuredFrameIndex,
                  itemIndex: info.index,
                  // animated: false,
                  
                });
              }, 500);
            }}
            onContentSizeChange={() => {
              const lastSectionIndex = groupedData.length - 1;
              const lastItemIndex = groupedData[lastSectionIndex]?.data?.length - 1;
              if (lastSectionIndex >= 0 && lastItemIndex >= 0) {
               if(scrollToBottom){ 
                sectionListRef.current?.scrollToLocation({
                  sectionIndex: lastSectionIndex,
                  itemIndex: lastItemIndex,
                  animated: false,
                })}
              }
            }}

              contentContainerStyle={{
                paddingBottom: 16,
              }}
            />
          )}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 16,
              padding: 12,
              backgroundColor: "white",
              borderRadius: 8,
            }}
          >
            <TextInput
              placeholder="Reply to @Rohit Yadav"
              style={{ flex: 1 }}
            />
            <TouchableOpacity
              onPress={() => {
                toggleClip(!showClip);
              }}
            >
              <SvgPaperClip />
            </TouchableOpacity>
            <TouchableOpacity>
              <SvgSend />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}
