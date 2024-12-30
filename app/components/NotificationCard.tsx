import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

interface NotificationCardProps {
  notificationType: 'sell' | 'buy' | 'alert'; // dynamic type for different notifications
  onButtonPress: () => void;
}

const NotificationCard: React.FC<NotificationCardProps> = ({ notificationType, onButtonPress }) => {
  // Placeholder data for notifications
  const notifications = {
    sell: {
      text: "Someone’s looking for the product that you own. Wanna sell?",
      icon: require('../assets/images/icons/bingo-icon.png'),
      buttonText: 'Sell',
      title: 'Bingo!',
    },
    buy: {
      text: "You’ve received an interest for a product you want",
      icon: require('../assets/images/icons/bravo-icon.png'),
      buttonText: 'Buy',
      title: 'Bravo!',
    },
    alert: {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: require('../assets/images/icons/alert-icon.png'),
      buttonText: 'Done',
      title: 'Alert!',
    },
  };

  const { text, icon, buttonText, title } = notifications[notificationType];

  return (
    <View className="w-[90%] bg-white py-5 px-5 rounded-[2px] border-[1.5px] border-r-[3.5px] border-b-[3.5px] mb-4">
      <View className="flex-row items-center justify-between">
        {/* Icon */}
        <Image source={icon} className="w-12 h-12" resizeMode='contain' />
        {/* Button */}
        <TouchableOpacity onPress={onButtonPress} className="p-3 flex-[0.5] bg-black rounded-[2px]">
          <Text className="text-white text-[12px] font-[PoppinsSemiBold] text-center">{buttonText}</Text>
        </TouchableOpacity>
      </View>

      <Text className="text-sm font-[PoppinsSemiBold] px-1 mt-3 mb-1">{title}</Text>
      <Text className="text-xs font-[PoppinsMedium] px-1 text-[#828282]">{text}</Text>
    </View>
  );
};

export default NotificationCard;
