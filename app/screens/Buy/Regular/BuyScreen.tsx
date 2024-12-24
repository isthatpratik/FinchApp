import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import ProductCard from '@/app/components/ProductCard';
import { Ionicons } from '@expo/vector-icons'; // For icons (requires Expo or install react-native-vector-icons)
import { useRouter } from 'expo-router'; // Importing useRouter from expo-router
import BuyFilter from '@/app/components/BuyFilter'; // Importing BuyFilter component

// Importing local images
const TV1 = require('@/app/assets/images/ProductImages/TV.png');
const TV2 = require('@/app/assets/images/ProductImages/TV 2.png');
const TV3 = require('@/app/assets/images/ProductImages/TV 3.png');
const TV4 = require('@/app/assets/images/ProductImages/TV 4.png');
const TV5 = require('@/app/assets/images/ProductImages/TV 5.png');

// Defining types for product data
interface Product {
  id: string;
  image: any; // You can replace 'any' with a specific type if you know the image format
  title: string;
  location: string;
  price: number;
}

const BuyScreen = () => {
  const router = useRouter(); // Using useRouter hook
  const [isFilterModalVisible, setFilterModalVisible] = useState(false); // State to manage modal visibility

  // Mocked data with local images
  const products: Product[] = [
    { id: '1', image: TV1, title: 'Smart TV', location: 'Connecticut Ave', price: 2200 },
    { id: '2', image: TV2, title: 'Smart TV', location: 'Connecticut Ave', price: 2000 },
    { id: '3', image: TV3, title: 'Smart TV', location: 'Connecticut Ave', price: 1800 },
    { id: '4', image: TV4, title: 'Smart TV', location: 'Connecticut Ave', price: 1950 },
    { id: '5', image: TV5, title: 'Smart TV', location: 'Connecticut Ave', price: 2120 },
    { id: '6', image: TV1, title: 'Smart TV', location: 'Connecticut Ave', price: 1820 },
  ];

  return (
    <View className="flex-1 bg-[#F5F5F5]">
      {/* Top Header with Icons */}
      <View className="flex-row justify-between items-center px-8 py-6 mt-6 bg-transparent">
        {/* Back Arrow */}
        <TouchableOpacity onPress={() => router.dismissTo('/screens/MainDashboard')}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        {/* Right-side Icons */}
        <View className="flex-row gap-6">
          <TouchableOpacity>
            <Ionicons name="search" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setFilterModalVisible(true)}>
            <Ionicons name="filter" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Product Grid */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ flex: 1, marginBottom: 8 }}>
            <ProductCard
              image={item.image}
              title={item.title}
              location={item.location}
              price={item.price}
            />
          </View>
        )}
        numColumns={2}  // Two columns for the layout
        contentContainerStyle={{ paddingBottom: 16, paddingHorizontal: 8 }}
        className="grid grid-cols-2 gap-4 px-4"
      />

      {/* BuyFilter Modal */}
      <BuyFilter visible={isFilterModalVisible} onClose={() => setFilterModalVisible(false)} />
    </View>
  );
};

export default BuyScreen;