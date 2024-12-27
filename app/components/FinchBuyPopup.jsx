import React , { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { BlurView } from "expo-blur";
import  Popup  from "./Popup";

const FinchBuyPopup = ({
  isVisible,
  onClose,
  productIcon,
  category,
  brand,
  priceRange,
  distance,
}) => {
  const [showPopup, setShowPopup] = useState(false); 

  const handleConfirm = () => {
    onClose(); // Close the FinchBuyPopup modal
    setShowPopup(true); // Show the second Popup modal
  };

  return (
    <>
    <Modal
      transparent={true}
      animationType="fade"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <BlurView
          intensity={50}
          tint="systemChromeMaterialDark"
          experimentalBlurMethod="dimezisBlurView"
          style={StyleSheet.absoluteFill}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              {/* Close Icon */}
              <TouchableOpacity
                className="absolute top-2 right-4"
                onPress={onClose}
              >
                <Text className="text-xl text-black">×</Text>
              </TouchableOpacity>

              {/* Product Icon */}
              <View className="mb-4">
                <Image
                  source={productIcon}
                  className="w-20 h-20"
                  resizeMode="contain"
                />
              </View>

              {/* Details Section */}
              <View className="flex flex-row px-2 mb-4 justify-stretch gap-10 ">
                {/* Left Column */}
                <View className="">
                  <View className="mb-4 ">
                    <Text className="text-[16px] font-[PoppinsSemiBold] text-black">
                      Category
                    </Text>
                    <Text className="text-[12px] font-[PoppinsMedium] text-[#828282]">
                      {category}
                    </Text>
                  </View>
                  <View className="mb-4">
                    <Text className="text-[16px] font-[PoppinsSemiBold] text-black">
                      Price Range
                    </Text>
                    <Text className="text-[12px] font-[PoppinsMedium] text-[#828282]">
                      ${priceRange[0]} - ${priceRange[1]}
                    </Text>
                  </View>
                </View>

                {/* Right Column */}
                <View className="">
                  <View className="mb-4">
                    <Text className="text-[16px] font-[PoppinsSemiBold] text-black">
                      Brand
                    </Text>
                    <Text className="text-[12px] font-[PoppinsMedium] text-[#828282]">
                      {brand}
                    </Text>
                  </View>
                  <View className="mb-4">
                    <Text className="text-[16px] font-[PoppinsSemiBold] text-black">
                      Distance
                    </Text>
                    <Text className="text-[12px] font-[PoppinsMedium] text-[#828282]">
                      {distance[0]} - {distance[1]} mi
                    </Text>
                  </View>
                </View>
              </View>

              {/* Cancel and Confirm Buttons */}
              <View className="flex flex-row justify-between gap-4 p-2 w-full">
                  <TouchableOpacity onPress={onClose} className="py-2 px-4 flex-1">
                    <Text className="text-[13px] font-[PoppinsSemiBold] text-black underline text-center">Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={handleConfirm} // Trigger handleConfirm on press
                    className="py-3 px-3 bg-black rounded-[2px] border-[1.5px] flex-1 "
                  >
                    <Text className="text-[13px] text-white font-[PoppinsSemiBold] text-center">
                      Confirm
                    </Text>
                  </TouchableOpacity>
                </View>
            </View>
          </View>
        </BlurView>
      </View>
    </Modal>

      {/* Popup Modal */}
      <Popup
          isVisible={showPopup} // Pass the visibility state to Popup
          onClose={() => setShowPopup(false)} // Close the Popup when closed
        />
    </>
    
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 2,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 1.5,
    borderBottomWidth: 3.5,
    borderRightWidth: 3.5,
  },
});

export default FinchBuyPopup;
