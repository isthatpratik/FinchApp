import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import DetailsCard from '../components/DetailsCard';
import SearchFilter from '../components/SearchFilter'; // Importing the SearchFilter component

const MyProducts = () => {
  const router = useRouter();
  const [isFilterVisible, setIsFilterVisible] = useState(false); // State for modal visibility

  const product = {
    icon: require("@/app/assets/images/icons/tv.png"), // Replace with your product icon URL
    name: "Smart TV",
    label: "Electronics",
    purchasedDate: "2024-11-01",
    warrantyStartDate: "2023-11-01",
    warrantyDuration: 365, // Warranty in days
    warrantyStatus: "active" as "active" | "expiring" | "expired",
  };

  // Function to handle filter icon click and open modal
  const handleFilterClick = () => {
    setIsFilterVisible(true);
  };

  // Function to close modal
  const handleCloseFilter = () => {
    setIsFilterVisible(false);
  };

  return (
    <View className="flex-1 bg-[#EDEDED] p-4">
      {/* Header */}
      <View className="flex-row px-8 py-6 mt-2 items-center justify-between mb-2">
        {/* Back Arrow */}
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back-sharp" size={24} color="#000" />
        </TouchableOpacity>

        <View className="flex-row gap-6">
          <TouchableOpacity>
            <Ionicons name="search" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFilterClick}>
            <Ionicons name="filter" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <Text className="text-[20px] font-[PoppinsSemiBold] text-center mb-8">My Products</Text>

      <View className="px-8">
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: '/screens/ProductWarrantyDetails',
              params: { ...product }, // Passing product details
            })
          }
        >
          <DetailsCard product={product} />
        </TouchableOpacity>
      </View>

      {/* Filter Modal */}
      <SearchFilter
        visible={isFilterVisible}
        onClose={handleCloseFilter}
      />
    </View>
  );
};

export default MyProducts;
