import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { Picker } from "@react-native-picker/picker";

// Assuming the path to your camera icon image

type Product = {
  id: string;
  icon: any;
  title: string;
  location: string;
  purchasedDate: string;
  expectedSP: string;
  warranty: {
    text: string;
    color: string;
  };
};

const products: Product[] = [
  {
    id: "1",
    icon: require("app/assets/images/icons/tv.png"),
    title: "Smart TV",
    location: "Living room",
    purchasedDate: "17 Aug 2020",
    expectedSP: "$1200",
    warranty: { text: "18 months", color: "#38A169" },
  },
  {
    id: "2",
    icon: require("app/assets/images/icons/tv.png"),
    title: "Refrigerator",
    location: "Kitchen",
    purchasedDate: "17 Aug 2020",
    expectedSP: "$450",
    warranty: { text: "a week", color: "#DD6B20" },
  },
  {
    id: "3",
    icon: require("app/assets/images/icons/tv.png"),
    title: "Microwave",
    location: "Living room",
    purchasedDate: "17 Aug 2020",
    expectedSP: "$320",
    warranty: { text: "Warranty expired", color: "#E53E3E" },
  },
  {
    id: "4",
    icon: require("app/assets/images/icons/tv.png"),
    title: "HP Printer",
    location: "Living room",
    purchasedDate: "17 Aug 2020",
    expectedSP: "$280",
    warranty: { text: "No warranty", color: "#4A5568" },
  },
];

const SellingCriteria = () => {
  const { productId } = useLocalSearchParams();
  const router = useRouter();

  const productData = products.find((p) => p.id === productId);

  const [productCondition, setProductCondition] = useState("Good");
  const [sellingPrice, setSellingPrice] = useState(
    productData?.expectedSP || "$0"
  );
  const [photoUrls, setPhotoUrls] = useState<string[]>([]);

  // Function to pick an image from gallery or camera
  const pickImage = async (index: number) => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access media library is required!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images", // Use MediaTypeOptions.Images
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets[0]?.uri) {
      const updatedUrls = [...photoUrls];
      updatedUrls[index] = result.assets[0].uri;
      setPhotoUrls(updatedUrls);
    }
  };

  // Function to delete an image
  const deleteImage = (index: number) => {
    const updatedUrls = [...photoUrls];
    updatedUrls.splice(index, 1); // Remove the image at the specified index
    setPhotoUrls(updatedUrls);
  };

  return (
    <View className="flex-1 bg-[#F5F5F5]">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-8 px-8 py-6 mt-6">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-[20px] font-[PoppinsSemiBold]">
          Selling Criteria
        </Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Scrollable Content */}
      <ScrollView className="px-8">
        {productData && (
          <View className="flex-row items-start bg-white rounded-[2px] border-[1.5px] border-r-[3.5px] border-b-[3.5px] p-5 mb-6 shadow-md">
            <Image
              source={productData.icon}
              className="w-14 h-14 mr-5"
              resizeMode="contain"
            />
            <View>
              <Text className="text-[14px] font-[PoppinsSemiBold]">
                {productData.title}
              </Text>
              <Text className="text-[12px] font-[PoppinsMedium]">
                {productData.location}
              </Text>
              <Text className="text-[12px] font-[PoppinsMedium]">
                Purchased:{" "}
                <Text className="text-[12px] text-[#828282]">
                  {productData.purchasedDate}
                </Text>
              </Text>
              <View className="flex-row items-center mt-2">
                <Text className="text-[12px] font-[PoppinsMedium]">
                  Warranty expires in{" "}
                </Text>
                <View
                  className="px-3 py-1 rounded-[2px] border-[1.5px]"
                  style={{ backgroundColor: productData.warranty.color }}
                >
                  <Text className="text-black text-[12px] font-[PoppinsMedium]">
                    {productData.warranty.text}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}

        {/* Add Product Photos */}
        <View className="mb-6">
          <View className="flex-row items-center justify-center mb-4 mt-1">
            <Image
              source={require("app/assets/images/camera-icon.png")}
              className="w-6 h-6 mr-2"
              resizeMode="contain"
            />
            <Text className="text-[16px] font-[PoppinsSemiBold] mt-1">
              Add Product photos
            </Text>
          </View>
          <View className="flex-row justify-between">
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <TouchableOpacity
                  key={index}
                  className={`w-24 h-24 border-[1.5px] items-center justify-center rounded-[1px] ${
                    photoUrls[index]
                      ? "border-black"
                      : "border-dashed border-[#BDBDBD]"
                  }`}
                  onPress={() =>
                    photoUrls[index]
                      ? Alert.alert("Choose Action", "Delete or Change?", [
                          { text: "Delete", onPress: () => deleteImage(index) },
                          { text: "Change", onPress: () => pickImage(index) },
                        ])
                      : pickImage(index)
                  }
                >
                  {photoUrls[index] ? (
                    <Image
                      source={{ uri: photoUrls[index] }}
                      className="w-full h-full rounded-[1px]"
                      resizeMode="cover"
                    />
                  ) : index === photoUrls.length ? (
                    <Text className="text-[24px] font-[PoppinsMedium] text-black">
                      +
                    </Text>
                  ) : null}
                </TouchableOpacity>
              ))}
          </View>
        </View>

        {/* Product Condition */}
        <View className="mb-6 mt-6">
          <Text className="text-[16px] font-[PoppinsMedium] mb-1">
            Product Condition
          </Text>
          <View className="border-[1.5px] rounded-[2px] shadow-sm">
            <Picker
              selectedValue={productCondition}
              onValueChange={(value) => setProductCondition(value)}
              mode="dropdown"
              style={{
                height: 60,
                paddingVertical: 4,
                fontFamily: "PoppinsSemiBold",
              }}
            >
              <Picker.Item label="Good" value="Good" />
              <Picker.Item label="Like New" value="Like New" />
              <Picker.Item label="Fair" value="Fair" />
            </Picker>
          </View>
        </View>

        {/* Expected Selling Price */}
        <View className="mb-6 mt-6">
          <Text className="text-[16px] font-[PoppinsMedium] mb-1">
            Expected Selling Price
          </Text>
          <View className="flex-row justify-between items-center border rounded-[2px] px-4 py-3">
            <TextInput
              value={sellingPrice}
              onChangeText={setSellingPrice}
              keyboardType="numeric"
              className="text-[16px] font-[PoppinsSemiBold] flex-1"
            />
            <TouchableOpacity>
              <Text className="text-[12px] font-[PoppinsMedium] underline">
                Change
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Continue Button */}
      <TouchableOpacity
        className="bg-black py-6 rounded-[2px] mt-2 mb-4 mx-8 shadow-md"
        onPress={() =>
          router.push({
            pathname: "/screens/Sell/Regular/AdditionalSellingCriteria",
            params: {
              id: productData?.id,
              title: productData?.title,
              location: productData?.location,
              purchasedDate: productData?.purchasedDate,
              expectedSP: productData?.expectedSP,
              warrantyText: productData?.warranty.text, // Pass warranty text
              warrantyColor: productData?.warranty.color,
              condition: productCondition,
              price: sellingPrice,
              photos: photoUrls,
              icon: productData?.icon,
            },
          })
        }
      >
        <Text className="text-white text-center font-[PoppinsSemiBold] text-[14px]">
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SellingCriteria;
