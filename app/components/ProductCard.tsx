import React from 'react';
import { View, Text, Image } from 'react-native';

interface ProductCardProps {
  image: any;
  title: string;
  location: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, location, price }) => {
  return (
    <View className="border-[1.5px] border-black rounded-[2px] m-2 p-2 overflow-hidden border-r-[3.5px] border-b-[3.5px]">
      {/* Image section */}
      <View className="p-2 flex items-center justify-center">
        <Image
          source={image} // Handles both require() and remote URIs
          className="w-full"
          resizeMode="cover"  // Ensures the image covers the space
        />
      </View>

      {/* Text content */}
      <View className="p-2">
        <Text className="text-[12px] font-[PoppinsSemiBold]">{title}</Text>
        <Text className="text-[12px] text-[#BDBDBD] my-1 font-[PoppinsMedium]">{location}</Text>
        <Text className="text-[20px] font-[PoppinsSemiBold]">${price}</Text>
      </View>
    </View>
  );
};

export default ProductCard;
    