import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const ProductWarrantyDetails = () => {
  const router = useRouter();
  const params = useLocalSearchParams(); // Receive product data as route parameters
  const [liked, setLiked] = useState<boolean | null>(null); // To track like/dislike status
  const { width, height } = useWindowDimensions(); // Get the screen width and height

  const handleLike = () => setLiked(true);
  const handleDislike = () => setLiked(false);

  const isSmallScreen = width < 400 || height < 600; // Check for smaller screens
  const cardWidth = isSmallScreen ? "44%" : "44%"; // Adjust card width for smaller screens
  const cardPadding = isSmallScreen ? 4 : 6; // Adjust card padding for smaller screens
  const sectionPadding = isSmallScreen ? 6 : 10; // Adjust padding for the section 

  return (
    <View className="flex-1 bg-[#EDEDED]">
      {/* Product Details */}
      <View className="px-10 py-6 mt-6">
        <View className="flex-row items-center justify-between mb-1">
          <Text className="text-[20px] font-[PoppinsSemiBold]">
            {params.name}
          </Text>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="close-sharp" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <Text className="text-[14px] font-[PoppinsMedium] text-[#828282] mb-2">
          {params.label}
        </Text>

        <View className="flex-row justify-between mr-2">
          <View className="flex-1">
            <View className="flex flex-row mb-3">
              <Text className="text-[12px] font-[PoppinsMedium]">
                Warranty expires in{" "}
              </Text>
              <Text className="font-[PoppinsMedium] text-[12px] text-center bg-[#8FFF00] px-1 border-[1.5px]">
                18 months
              </Text>
            </View>

            <View className="flex-row justify-between items-start">
              <View className="flex-row gap-6">
                <View>
                  <Text className="text-[12px] font-[PoppinsMedium] mb-1">
                    Model No:
                  </Text>
                  <Text className="text-[14px] text-[#828282] font-[PoppinsMedium]">
                    1856SKNS00
                  </Text>
                </View>
                <View>
                  <Text className="text-[12px] font-[PoppinsMedium] mb-1">
                    Serial No:
                  </Text>
                  <Text className="text-[14px] text-[#828282] font-[PoppinsMedium] mb-2">
                    505145663
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View className="items-center">
            <Text className="text-[10px] mb-2 font-[PoppinsMedium]">
              Like this product?
            </Text>
            <View className="flex-row justify-between gap-8">
              <TouchableOpacity onPress={handleLike}>
                <AntDesign
                  name="like1"
                  size={20}
                  color={liked === true ? "#000" : "#BDBDBD"}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleDislike}>
                <AntDesign
                  name="dislike1"
                  size={20}
                  color={liked === false ? "#000" : "#BDBDBD"}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View className="overflow-hidden">
        <Image
          source={require("@/app/assets/images/Warrnaty/valuation.png")}
          className="w-full h-[235px] mt-2"
          resizeMode="contain"
        />
      </View>

      <View className="bg-[#00F0FF] flex-1 border-t-[1.5px]">
        <View className={`px-10 py-${sectionPadding}`}>
          {/* Cards container with flex-wrap */}
          <View className="flex-row flex-wrap justify-between">
            <TouchableOpacity
              className={`bg-white p-${cardPadding} m-2 rounded-[2px] border-[1.5px] border-b-[3.5px] border-r-[3.5px]`}
              style={{ width: cardWidth }}
              onPress={() =>
                router.push("/screens/ExtendWarranty/ExtendWarrantyScreen")
              }
            >
              <Image
                source={require("@/app/assets/images/icons/warranty.png")}
                className="w-8 h-8 mb-2"
                resizeMode="contain"
              />
              <Text className="text-start mt-1 max-w-20 text-[14px] font-[PoppinsMedium]">
                Extend Warranty
              </Text>
            </TouchableOpacity>

            <View
              className={`bg-white p-${cardPadding} m-2 rounded-[2px] border-[1.5px] border-b-[3.5px] border-r-[3.5px]`}
              style={{ width: cardWidth }}
            >
              <Image
                source={require("@/app/assets/images/icons/$.png")}
                className="w-8 h-8 mb-2"
                resizeMode="contain"
              />
              <Text className="text-start mt-1 max-w-20 text-[14px] font-[PoppinsMedium]">
                Sell this Product
              </Text>
            </View>

            <View
              className={`bg-white p-${cardPadding} m-2 rounded-[2px] border-[1.5px] border-b-[3.5px] border-r-[3.5px]`}
              style={{ width: cardWidth }}
            >
              <Image
                source={require("@/app/assets/images/icons/receipt.png")}
                className="w-8 h-8 mb-2"
                resizeMode="contain"
              />
              <Text className="text-start mt-1 max-w-20 text-[14px] font-[PoppinsMedium]">
                View Receipt
              </Text>
            </View>

            <View
              className={`bg-white p-${cardPadding} m-2 rounded-[2px] border-[1.5px] border-b-[3.5px] border-r-[3.5px]`}
              style={{ width: cardWidth }}
            >
              <Image
                source={require("@/app/assets/images/icons/repair.png")}
                className="w-8 h-8 mb-2"
                resizeMode="contain"
              />
              <Text className="text-start mt-1 max-w-20 text-[14px] font-[PoppinsMedium]">
                Repairs & Service
              </Text>
            </View>
          </View>
        </View>
        <View
          className={`bg-[#00F0FF] flex-row items-center justify-center px-6 absolute left-0 right-0 bottom-5 h-[10%]`}
        >
          <TouchableOpacity className="px-1">
            <MaterialCommunityIcons name="delete" size={24} color="black" />
          </TouchableOpacity>
          <Text className="font-[PoppinsMedium] text-[14px] mt-1">
            Delete this product
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductWarrantyDetails;
