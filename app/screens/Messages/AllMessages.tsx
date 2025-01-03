import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MessageContainer from "@/app/components/MessageContainer";

interface Message {
  id: number;
  profileImage: string;
  name: string;
  lastMessage: string;
  unreadCount?: number;
  time: string;
}

const AllMessages: React.FC = () => {
  const router = useRouter();

  // Example Dynamic Data
  const messages: Message[] = [
    {
      id: 1,
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "John Doe",
      lastMessage: "Hey, how are you doing?",
      unreadCount: 2,
      time: "3:59 PM", // Time of the message
    },
    {
      id: 2,
      profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Jane Smith",
      lastMessage: "Can you send me the report?",
      unreadCount: 0,
      time: "Yesterday", // Example of relative time
    },
    {
      id: 3,
      profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Alex Johnson",
      lastMessage: "Let’s catch up tomorrow.",
      unreadCount: 5,
      time: "28/12/2044", // Example of absolute time
    },
  ];

  return (
    <View className="flex overflow-hidden flex-col w-full h-full bg-[#EDEDED]">
      {/* Gradient Header */}
      <LinearGradient
        colors={["#8FFF00", "#00F0FF"]}
        start={{ x: 0.5, y: 0.92 }}
        className="py-2 border-b-2"
      >
        <View className="flex flex-row justify-between items-center px-8 py-6 mt-2">
          {/* Back Button */}
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-[18px] text-center font-[PoppinsSemiBold] text-black">
            Messages
          </Text>
          {/* Close Button */}
          <TouchableOpacity>
            <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Messages List */}
      <ScrollView className="flex-1">
        {messages.map((message) => (
          <MessageContainer
            key={message.id}
            profileImage={message.profileImage}
            name={message.name}
            lastMessage={message.lastMessage}
            unreadCount={message.unreadCount}
            time={message.time}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default AllMessages;
