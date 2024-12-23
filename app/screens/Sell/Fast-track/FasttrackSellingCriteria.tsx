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
import { Slider } from "@miblanchard/react-native-slider";

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

const FasttrackSellingCriteria = () => {
  const { productId } = useLocalSearchParams();
  const router = useRouter();

  const productData = products.find((p) => p.id === productId);

  const [productCondition, setProductCondition] = useState("Good");
  const [sellingPrice, setSellingPrice] = useState(
    productData?.expectedSP || "$0"
  );
  const [photoUrls, setPhotoUrls] = useState<string[]>([]);
  const [discount, setDiscount] = useState(30);
  const [sliderValue, setSliderValue] = useState(30);

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

  const handleSliderChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setDiscount(Math.round(value[0]));
    } else {
      setDiscount(Math.round(value));
    }
  };

  return (
    <View className="flex-1 bg-[#F5F5F5]">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-3 px-8 py-6 mt-6">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => router.dismissTo("/screens/MainDashboard")}
        >
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Scrollable Content */}
      <ScrollView className="px-8">
        {productData && (
          <View className="flex-row items-start bg-white rounded-[2px] border-[1.5px] border-r-[3.5px] border-b-[3.5px] p-5 mb-4 shadow-md">
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
        <View className="mb-4 mt-1">
          <View className="flex-row items-center justify-center mb-2 mt-1">
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
        <View className="mb-4 mt-1">
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

        <View className="mb-4 mt-1 flex-row justify-between">
          <Text className="text-[14px] font-[PoppinsMedium] mb-1 flex-1">
            Recommended Price:
          </Text>
          <Text className="text-[16px] font-[PoppinsSemiBold] text-right">
            {productData?.expectedSP}
          </Text>
        </View>

        <View className="mb-3 mt-1">
          <Text className="text-[14px] font-[PoppinsMedium] mb-1">
            Discount %
          </Text>
          <Slider
            value={sliderValue}
            minimumValue={30}
            maximumValue={100}
            step={1}
            onValueChange={handleSliderChange}
            minimumTrackTintColor="#8FFF00"
            maximumTrackTintColor="#BDBDBD"
            trackStyle={styles.trackStyle}
            thumbStyle={styles.thumbStyle}
            animateTransitions={true}
            animationType="spring"
            renderBelowThumbComponent={() => (
              <View style={styles.thumbLabel}>
                <Text style={styles.thumbLabelText}>{discount}</Text>
              </View>
            )}
          />
          <View className="flex-row justify-between mt-1">
            <Text className="text-[12px] font-[PoppinsMedium]" style={{ color: "#828282" }}>
              30
            </Text>
            <Text className="text-[12px] font-[PoppinsMedium]" style={{ color: "#828282" }}>
              100
            </Text>
          </View>
        </View>

        <View className="mb-4 mt-1">
          <Text className="text-[14px] font-[PoppinsMedium] mb-1">
            Selling Price
          </Text>
          <TextInput
            className="text-[16px] border-[1.5px] rounded-[2px] p-4 bg-white"
            style={{ fontFamily: "PoppinsMedium" }}
            
            onChangeText={setSellingPrice}
            keyboardType="numeric"
          />
        </View>
      </ScrollView>

      {/* Continue Button */}
      <TouchableOpacity
        className="bg-black py-6 rounded-[2px] mt-2 mb-4 mx-8 shadow-md"
        onPress={() =>
          router.push({
            pathname: "/screens/Sell/Fast-track/FasttrackAdditionalSellingCriteria",
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

const styles = {
  trackStyle: {
    height: 12,
    borderRadius: 0,
    borderWidth: 1.5,
    backgroundColor: "#BDBDBD",
  },

  thumbStyle: {
    height: 20,
    width: 20,
    backgroundColor: "white",
    borderRadius: 1,
    borderWidth: 1.5,
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 2,
  },

  thumbLabel: {
    position: 'absolute' as 'absolute',
    
    left: -10,
    backgroundColor: 'trasnparent',
    padding: 2,
  },

  thumbLabelText: {
    fontSize: 12,
    fontFamily: 'PoppinsMedium',
    color: 'black',
  },
};

export default FasttrackSellingCriteria;