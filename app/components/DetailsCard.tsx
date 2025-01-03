import React from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';

interface DetailsCardProps {
  product: {
    icon: any;
    name: string;
    label: string;
    purchasedDate: string;
    warrantyStartDate: string;
    warrantyDuration: number; // in days
    warrantyStatus: 'active' | 'expiring' | 'expired';
  };
}

const DetailsCard: React.FC<DetailsCardProps> = ({ product }) => {
  const calculateRemainingWarranty = () => {
    const warrantyEndDate = new Date(product.warrantyStartDate);
    warrantyEndDate.setDate(warrantyEndDate.getDate() + product.warrantyDuration);
    const currentDate = new Date();
    const remainingTime = Math.max(0, warrantyEndDate.getTime() - currentDate.getTime());
    return remainingTime;
  };

  const remainingWarranty = calculateRemainingWarranty();
  const totalWarrantyTime = product.warrantyDuration * 24 * 60 * 60 * 1000; // converting days to milliseconds
  const progress = remainingWarranty / totalWarrantyTime;

  const renderWarrantyIcon = () => {
    if (product.warrantyStatus === 'active') {
      return (
        <View className="flex items-center justify-center">
          <Image source={require('@/app/assets/images/Warrnaty/active.png')} className='w-7 h-7' resizeMode='contain'/>
        </View>
      );
    } else if (product.warrantyStatus === 'expiring') {
      return (
        <View className="flex items-center justify-center">
          <Image source={require('@/app/assets/images/Warrnaty/expiring-soon.png')} className='w-8 h-8' resizeMode='contain'/>
        </View>
      );
    } else {
      return (
        <View className="flex items-center justify-center">
          <Image source={require('@/app/assets/images/Warrnaty/expired.png')} className='w-8 h-8' resizeMode='contain'/>
        </View>
      );
    }
  };

  const getProgressBarColor = () => {
    if (product.warrantyStatus === 'active') {
      return '#4CAF50'; // Green for active warranty
    } else if (product.warrantyStatus === 'expiring') {
      return '#FF862F'; // Orange for expiring warranty
    } else {
      return '#D3D3D3'; // Gray for expired warranty
    }
  };

  const getWarrantyStatus = () => {
    if (remainingWarranty <= 0) {
      return 'expired';
    }
    const daysLeft = remainingWarranty / (24 * 60 * 60 * 1000); // Convert remaining time to days
    if (daysLeft <= 7) {
      return 'expiring'; // If less than a week left, mark as expiring
    }
    return 'active'; // Otherwise, the warranty is still active
  };

  const warrantyStatus = getWarrantyStatus(); // Calculate warranty status dynamically

  return (
    <View className="bg-white p-6 shadow-md mb-4 flex-row items-center border-[1.5px] rounded-[2px] border-r-[3.5px] border-b-[3.5px] relative">
      {/* Left side: Icon */}
      <Image source={product.icon} className="w-16 h-16 mr-4" resizeMode='contain'/>

      {/* Right side: Texts */}
      <View className="flex-1">
        <Text className="font-[PoppinsSemiBold] text-[14px]">{product.name}</Text>
        <Text className="font-[PoppinsMedium] text-[12px]">
          <Text className="text-black">Label: </Text>
          <Text className="text-gray-500">{product.label}</Text>
        </Text>
        <Text className="font-[PoppinsMedium] text-[12px]">
          <Text className="text-black">Purchased: </Text>
          <Text className="text-gray-500">{product.purchasedDate}</Text>
        </Text>
        
        {/* Warranty Progress Bar */}
        <View className="mt-2 pr-8">
          <Progress.Bar 
            progress={progress} 
            width={null} 
            color={getProgressBarColor()} 
            height={8} 
            borderRadius={1}
            borderWidth={1.5} 
          />
        </View>
      </View>

      {/* Top Right: Warranty Status Icon */}
      <View className="absolute top-6 mt-1 right-4">
        {renderWarrantyIcon()}
      </View>
    </View>
  );
};

export default DetailsCard;
