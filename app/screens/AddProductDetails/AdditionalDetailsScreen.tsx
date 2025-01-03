import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Slider } from "@miblanchard/react-native-slider";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Checkbox } from "expo-checkbox";
import AddProductPopup from '@/app/components/AddProductPopup';

const AdditionalDetailsScreen: React.FC = () => {
  const router = useRouter();

  const [isModalVisible, setModalVisible] = useState(false);

  const [additionalDetails, setAdditionalDetails] = useState({
    storeName: "",
    purchaseDate: "",
    warrantyDuration: 18,
    additionalWarranty: false,
    additionalWarrantyDuration: "",
    warrantyProvider: "",
    label: "",
    warrantyOption: "noWarranty",
    additionalWarrantyOption: false,
  });

  const handleInputChange = (key: string, value: any) => {
    setAdditionalDetails({ ...additionalDetails, [key]: value });
  };

  const handleDateChange = (date: Date) => {
    setAdditionalDetails({
      ...additionalDetails,
      purchaseDate: date.toLocaleDateString(),
    });
  };

  const handleDatePickerConfirm = (date: Date) => {
    handleDateChange(date);
    setDatePickerVisible(false);
  };

  const handleDatePickerCancel = () => {
    setDatePickerVisible(false);
  };

  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const handleWarrantyOptionChange = (option: string) => {
    setAdditionalDetails({
      ...additionalDetails,
      warrantyOption: option,
    });
  };

  const [minSliderValue, setMinSliderValue] = useState(12);
  const [maxSliderValue, setMaxSliderValue] = useState(36);
  const [sliderValue, setSliderValue] = useState(18);

  useEffect(() => {
    setSliderValue(additionalDetails.warrantyDuration);
  }, [additionalDetails.warrantyDuration]);

  const handleSliderChange = (value: number | number[]) => {
    const updatedValue = Array.isArray(value) ? value[0] : value;
    setSliderValue(updatedValue);
    handleInputChange("warrantyDuration", updatedValue);
  };

  // Check if all required fields are filled
  const isFormValid = () => {
    const { storeName, purchaseDate, warrantyOption, warrantyProvider, label } = additionalDetails;
    return storeName && purchaseDate && warrantyOption && warrantyProvider && label;
  };

  const isAdditionalWarrantyValid = () => {
    return additionalDetails.additionalWarrantyOption
      ? additionalDetails.additionalWarrantyDuration
      : true;
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      {/* Header */}
      <LinearGradient
        colors={["#00F0FF", "#FFEE00"]}
        className="py-2 border-b-2"
        start={{ x: 0.5, y: 0.9 }}
      >
        <View className="flex flex-row justify-between items-center px-8 py-6 mt-2">
          <Ionicons
            name="arrow-back-sharp"
            size={25}
            color="#000"
            onPress={() =>
              router.push("/screens/AddProductDetails/AddProductDetailsScreen")
            }
          />
          <Text className="font-[PoppinsSemiBold] text-[18px] text-center">
            Product Details
          </Text>
          <Ionicons
            name="close-sharp"
            size={25}
            color="#000"
            onPress={() => router.dismissTo("/screens/MainDashboard")}
          />
        </View>
      </LinearGradient>

      {/* Scrollable Form */}
      <ScrollView>
        <View className="flex flex-col w-full px-10 mt-8">
          <Text className="text-[12px] font-[PoppinsSemiBold] mb-2">
            Which store did you buy it from?
          </Text>
          <View className="flex-row items-center border-2 border-black rounded-[2px] mb-4 bg-white">
            <TextInput
              className="flex-1 border-none px-4 py-4 text-[14px] font-[Poppins-Medium]"
              placeholder="Laptop store"
              value={additionalDetails.storeName}
              onChangeText={(text) => handleInputChange("storeName", text)}
            />
            <MaterialIcons name="edit" size={18} color="#BDBDBD" className="mr-5"/>
          </View>
          
          <Text className="text-[12px] font-[PoppinsSemiBold] mb-2">Purchase date</Text>
          <TouchableOpacity onPress={() => setDatePickerVisible(true)}>
            <View className="flex-row items-center border-[1.5px] p-4 mb-4 bg-white rounded-[2px]">
              <Ionicons name="calendar" size={18} color="#BDBDBD" />
              <TextInput
                className="flex-1 border-none px-4 text-[14px] font-[PoppinsMedium]"
                placeholder="Select Date"
                value={additionalDetails.purchaseDate}
                editable={false}
              />
            </View>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            date={new Date()}
            onConfirm={handleDatePickerConfirm}
            onCancel={handleDatePickerCancel}
          />

          {/* Warranty Option */}
          <View className="flex flex-row mt-2 justify-between mb-4 gap-4">
            <TouchableOpacity
              className={`flex-1 p-4 items-center rounded-[2px] justify-center border-[1.5px] ${
                additionalDetails.warrantyOption === "inWarranty"
                  ? "bg-white border-black"
                  : "border-[#BDBDBD]"
              }`}
              onPress={() => handleWarrantyOptionChange("inWarranty")}
            >
              <Text className="text-[14px] font-[PoppinsMedium]">In Warranty</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className={`flex-1 p-4 items-center rounded-[2px] justify-center border-[1.5px] ${
                additionalDetails.warrantyOption === "noWarranty"
                  ? "bg-white border-black"
                  : "border-[#BDBDBD]"
              }`}
              onPress={() => handleWarrantyOptionChange("noWarranty")}
            >
              <Text className="text-[14px] font-[PoppinsMedium]">No Warranty</Text>
            </TouchableOpacity>
          </View>

          {/* Warranty Duration */}
          {additionalDetails.warrantyOption === "inWarranty" && (
            <>
              <Text className="text-[12px] font-[PoppinsSemiBold] mb-2 mt-2">
                Warranty Duration (months)
              </Text>
              <Slider
                value={sliderValue}
                minimumValue={12}
                maximumValue={36}
                step={2}
                onValueChange={handleSliderChange}
                minimumTrackTintColor="#8FFF00"
                maximumTrackTintColor="#BDBDBD"
                trackStyle={{ height: 12, borderRadius: 1, borderWidth: 1.5, }}
                thumbStyle={{
                  height: 20,
                  width: 20,
                  backgroundColor: "white",
                  borderRadius: 1,
                  borderWidth: 1.5,
                }}
                animateTransitions
                animationType="spring"
              />
              <View className="flex flex-row justify-between mb-4">
                <Text className="text-[12px] font-[PoppinsMedium] text-[#828282]">{minSliderValue}</Text>
                <Text className="text-[12px] font-[PoppinsMedium]">{sliderValue}</Text>
                <Text className="text-[12px] font-[PoppinsMedium] text-[#828282]">{maxSliderValue}</Text>
              </View>
            </>
          )}

          {/* Additional Warranty */}
          <Text className="text-[12px] font-[PoppinsSemiBold] mb-2">
            Any additional warranty for the product?
          </Text>
          <View className="flex flex-row justify-between mb-4">
            <View className="flex-row px-2 justify-between gap-4">
              <View className="flex flex-row pr-4 items-center">
                <Checkbox
                  value={additionalDetails.additionalWarrantyOption === false}
                  onValueChange={() =>
                    handleInputChange("additionalWarrantyOption", false)
                  }
                  color="black"
                />
                <Text className="ml-2 text-[12px] font-[PoppinsSemiBold]">No</Text>
              </View>

              <View className="flex mx-2 flex-row items-center">
                <Checkbox
                  value={additionalDetails.additionalWarrantyOption === true}
                  onValueChange={() =>
                    handleInputChange("additionalWarrantyOption", true)
                  }
                  color="black"
                />
                <Text className="ml-2 text-[12px] font-[PoppinsSemiBold]">Yes</Text>
              </View>
            </View>
            
            <View className="flex-[0.85]">
              <TextInput
                className={`border-[1.5px] rounded-[2px] p-4 bg-white text-[14px] font-[PoppinsMedium] ${
                  additionalDetails.additionalWarrantyOption ? "" : "bg-[#BDBDBD] opacity-50"
                }`}
                placeholder="Duration"
                value={additionalDetails.additionalWarrantyDuration}
                onChangeText={(text) =>
                  handleInputChange("additionalWarrantyDuration", text)
                }
                editable={additionalDetails.additionalWarrantyOption}
              />
            </View>
          </View>

          {/* Warranty Provider */}
          <Text className="text-[12px] font-[PoppinsSemiBold] mb-2">Warranty Provider</Text>
          <TextInput
            className="text-[14px] font-[PoppinsMedium] border-[1.5px] rounded-[2px] p-4 mb-4 bg-white"
            placeholder="Lorem Ipsum"
            value={additionalDetails.warrantyProvider}
            onChangeText={(text) => handleInputChange("warrantyProvider", text)}
          />

          {/* Label */}
          <Text className="text-[12px] font-[PoppinsSemiBold] mb-2">Add Label</Text>
          <TextInput
            className="text-[14px] font-[PoppinsMedium] border-[1.5px] rounded-[2px] p-4 mb-4 bg-white"
            placeholder="e.g., Lounge/Bedroom"
            value={additionalDetails.label}
            onChangeText={(text) => handleInputChange("label", text)}
          />
        </View>
      </ScrollView>

      {/* Confirm Button */}
      <View className="flex px-10 py-4 mt-1 mb-1">
        <TouchableOpacity
          className={`px-8 py-4 border-[1.5px] rounded-[2px] ${isFormValid() && isAdditionalWarrantyValid() ? 'bg-[#0F0F0F]' : 'bg-gray-700 opacity-50'}`}
          onPress={() => setModalVisible(true)}
          disabled={!isFormValid() || !isAdditionalWarrantyValid()}
        >
          <Text className="text-center text-white font-[PoppinsSemiBold] text-[13px]">
            Confirm
          </Text>
        </TouchableOpacity>
      </View>

      {/* Modal Popup */}
      <AddProductPopup
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

export default AdditionalDetailsScreen;
