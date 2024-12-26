import React from 'react';
import { View, Text, Modal, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';

const FinchBuyPopup = ({ isVisible, onClose, productIcon, category, brand, priceRange, distance }) => {
  const router = useRouter();

  return (
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
              <TouchableOpacity className="absolute top-2 right-4" onPress={onClose}>
                <Text className="text-xl text-black">×</Text>
              </TouchableOpacity>

              {/* Product Icon */}
              <View className="mb-4">
                <Image source={productIcon} className="w-20 h-20" resizeMode="contain" />
              </View>

              {/* Details Section */}
              <View className="flex flex-row flex-wrap px-4 justify-between w-full mb-4">
                <View className="w-[48%] mb-4">
                  <Text className="text-[16px] font-semibold text-black">Category</Text>
                  <Text className="text-sm font-medium text-black">{category}</Text>
                </View>
                <View className="w-[48%] mb-4">
                  <Text className="text-base font-semibold text-black">Brand</Text>
                  <Text className="text-sm font-medium text-black">{brand}</Text>
                </View>
                <View className="w-[48%] mb-4">
                  <Text className="text-base font-semibold text-black">Price Range</Text>
                  <Text className="text-sm font-medium text-black">
                    ${priceRange[0]} - ${priceRange[1]}
                  </Text>
                </View>
                <View className="w-[48%] mb-4">
                  <Text className="text-base font-semibold text-black">Distance</Text>
                  <Text className="text-sm font-medium text-black">
                    {distance[0]} - {distance[1]} mi
                  </Text>
                </View>
              </View>

              {/* Cancel and Confirm Buttons */}
              <View className="flex flex-row justify-between w-full">
                <TouchableOpacity onPress={onClose} className="py-2 px-4">
                  <Text className="text-sm text-black underline">Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    onClose();
                    router.push('/screens/MainDashboard'); // Navigate back to the main dashboard
                  }}
                  className="py-2 px-4 bg-black rounded"
                >
                  <Text className="text-sm text-white font-semibold">Confirm</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </BlurView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 2,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
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
