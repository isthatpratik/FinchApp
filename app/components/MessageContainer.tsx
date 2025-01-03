import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

interface MessageContainerProps {
  profileImage: string;
  name: string;
  lastMessage: string;
  unreadCount?: number;
  time?: string;
}

const MessageContainer: React.FC<MessageContainerProps> = ({
  profileImage,
  name,
  lastMessage,
  unreadCount = 0,
  time,
}) => {
  return (
    <TouchableOpacity className="flex-row py-6 px-10 border-[#E0E0E0] border-b-[1.5px]">
      <View className="flex-row items-center flex-1">
        <Image
          source={{ uri: profileImage }}
          className="w-12 h-12 rounded-full mr-3"
        />
        <View className="flex-1">
          <Text className="text-[14px] font-[PoppinsSemiBold] text-gray-900">
            {name}
          </Text>
          <Text className="text-[12px] font-[PoppinsMedium] text-gray-500 truncate">
            {lastMessage}
          </Text>
        </View>
      </View>
      

      <View className="flex flex-col items-end justify-between">

        <View className="flex flex-col items-end justify-end">
          {unreadCount > 0 && (
            <View className="bg-[#8FFF00] rounded-[2px] border-[1.5px] w-5 h-5 flex items-center justify-center mb-2">
              <Text className="text-[10px] font-[PoppinsSemiBold]">
                {unreadCount}
              </Text>
            </View>
          )}
        </View>
        
        <Text className="text-[12px] font-[PoppinsMedium] text-[#828282]">
          {time}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MessageContainer;
