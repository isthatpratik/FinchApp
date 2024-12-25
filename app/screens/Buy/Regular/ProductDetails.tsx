import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions, Platform, StatusBar as RNStatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSearchParams } from 'expo-router/build/hooks';
import PagerView from 'react-native-pager-view'; 
import Popup from '@/app/components/Popup'; 
import { StatusBar } from 'expo-status-bar';

type Product = {
  id: string;
  image: any;
  title: string;
  description: string;
  price: number;
  warranty: string;
  condition: string;
  listedOn: string;
  paymentMethod: string;
  delivery: string;
};

const { width: screenWidth } = Dimensions.get('window');

const ProductDetails = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get('productId');
  const [product, setProduct] = useState<Product | null>(null);
  const [isPopupVisible, setPopupVisible] = useState(false); // Modal visibility state

  // Mocked product details
  const mockProductDetails: Product[] = [
    {
      id: '1',
      image: require('@/app/assets/images/ProductImages/TV.png'),
      title: 'Smart TV',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 2200,
      warranty: '2 years',
      condition: 'New',
      listedOn: '2023-01-01',
      paymentMethod: 'Credit Card',
      delivery: 'Free Shipping',
    },
  ];

  useEffect(() => {
    const product = mockProductDetails.find((p) => p.id === productId);
    setProduct(product || null);
  }, [productId]);

  if (!product) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text>Loading...</Text>
      </View>
    );
  }

  const images = [
    product.image,
    require('@/app/assets/images/ProductImages/TV 2.png'),
    require('@/app/assets/images/ProductImages/TV 3.png'),
  ];

  const statusBarHeight = Platform.OS === 'android' ? RNStatusBar.currentHeight : 0; // For Android only

  return (
    <View className="flex-1 bg-[#F5F5F5]" style={{ paddingTop: statusBarHeight }}>
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="flex-row justify-between items-center px-8 py-6 mt-4 mb-2">
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-[18px] font-[PoppinsSemiBold]">Product Details</Text>
          <TouchableOpacity>
            <Ionicons name="ellipsis-vertical" size={20} color="black" />
          </TouchableOpacity>
        </View>

        {/* Product Image Slider using PagerView */}
        <PagerView
          style={{ height: screenWidth * 0.8 }}
          initialPage={0}
        >
          {images.map((image, index) => (
            <View key={index} style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
              <Image source={image} resizeMode="cover" style={{ width: screenWidth, height: screenWidth * 0.8 }} />
            </View>
          ))}
        </PagerView>

        {/* Product Info */}
        <View className="px-10 py-4">
          <View className="flex-row justify-between items-center mb-2 mt-1">
            <Text className="text-[16px] font-[PoppinsSemiBold]">{product.title}</Text>
            <Text className="text-[22px] font-[PoppinsSemiBold]">${product.price}</Text>
          </View>
          <Text className="text-[#828282] font-[PoppinsMedium] mb-4">{product.description}</Text>
          <Text className="font-[PoppinsMedium] text-[14px] mb-1">
            Warranty expires in: <Text className="font-[PoppinsMedium] text-[#828282]"> {product.warranty}</Text>
          </Text>
          <Text className="font-[PoppinsMedium] text-[12px] mb-1">
            Condition: <Text className="font-[PoppinsMedium] text-[#828282]"> {product.condition}</Text>
          </Text>
          <Text className="font-[PoppinsMedium] text-[12px] mb-1">
            Listed On: <Text className="font-[PoppinsMedium] text-[#828282]"> {product.listedOn} </Text>
          </Text>
          <Text className="font-[PoppinsMedium] text-[12px] mb-1">
            Payment Method: <Text className="font-[PoppinsMedium] text-[#828282]"> {product.paymentMethod}</Text>
          </Text>
          <Text className="font-[PoppinsMedium] text-[12px] mb-1">
            Delivery: <Text className="font-[PoppinsMedium] text-[#828282]"> {product.delivery}</Text>
          </Text>
        </View>
      </ScrollView>

      {/* Buttons */}
      <View className="mt-4 px-10 mb-4">
        <TouchableOpacity
          className="border-[1.5px] border-black bg-white py-5 mb-2 rounded-[1px]"
          style={{ alignItems: 'center' }}
        >
          <Text className="text-black font-[PoppinsMedium] text-[14px]">Chat with seller</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="border-[1.5px] border-[#0F0F0F] bg-[#0F0F0F] py-5 mb-2 rounded-[1px]"
          style={{ alignItems: 'center' }}
          onPress={() => setPopupVisible(true)} // Show the popup
        >
          <Text className="text-white font-[PoppinsMedium] text-[14px]">Confirm to Buy</Text>
        </TouchableOpacity>
      </View>

      {/* Popup Modal */}
      <Popup
        isVisible={isPopupVisible}
        onClose={() => setPopupVisible(false)} // Close the popup
      />

      <StatusBar translucent={true} style="auto" />
    </View>
  );
};

export default ProductDetails;
