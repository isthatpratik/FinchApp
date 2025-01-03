import React, { useState } from 'react';
import { View, TouchableOpacity} from 'react-native';
import ProductCard from '@/app/components/ProductCard';
import { Ionicons } from '@expo/vector-icons'; // Icons
import { useRouter } from 'expo-router'; // Navigation
import BuyFilter from '@/app/components/BuyFilter'; // Filter modal
import MasonryList from '@react-native-seoul/masonry-list'; // Masonry grid

// Mocked product images
const TV1 = require('@/app/assets/images/ProductImages/TV.png');
const TV2 = require('@/app/assets/images/ProductImages/TV 2.png');
const TV3 = require('@/app/assets/images/ProductImages/TV 3.png');
const TV4 = require('@/app/assets/images/ProductImages/TV 4.png');
const TV5 = require('@/app/assets/images/ProductImages/TV 5.png');

const BuyScreen = () => {
  const router = useRouter(); // Navigation hook
  const [isFilterModalVisible, setFilterModalVisible] = useState(false); // Modal state

  // Mocked product data
  const products = [
    { id: '1', image: TV1, title: 'Smart TV', location: 'Connecticut Ave', price: 2200 },
    { id: '2', image: TV2, title: 'Smart TV', location: 'Connecticut Ave', price: 2000 },
    { id: '3', image: TV3, title: 'Smart TV', location: 'Connecticut Ave', price: 1800 },
    { id: '4', image: TV4, title: 'Smart TV', location: 'Connecticut Ave', price: 1950 },
    { id: '5', image: TV5, title: 'Smart TV', location: 'Connecticut Ave', price: 2120 },
    { id: '6', image: TV1, title: 'Smart TV', location: 'Connecticut Ave', price: 1820 },
  ];


  return (
    <View className="flex-1 bg-[#F5F5F5]"> 

      {/* Header */}
      <View className="flex-row justify-between items-center px-8 py-6 mt-4">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
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
      <MasonryList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ flex: 1, marginBottom: 8 }}
            onPress={() => router.navigate(`/screens/Buy/Regular/ProductDetails?productId=${item.id}`)} // Navigate to ProductDetailsScreen
          >
            <ProductCard
              image={item.image}
              title={item.title}
              location={item.location}
              price={item.price}
            />
          </TouchableOpacity>
        )}
        numColumns={2}
        className='px-6 mx-1'
      />

      {/* Filter Modal */}
      <BuyFilter visible={isFilterModalVisible} onClose={() => setFilterModalVisible(false)} />
    </View>
  );
};

export default BuyScreen;
