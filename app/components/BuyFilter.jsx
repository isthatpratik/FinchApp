import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { BlurView } from 'expo-blur';
import { Slider } from '@miblanchard/react-native-slider';
import CustomCheckBox from './CustomCheckBox'; // Importing CustomCheckBox component

const { width } = Dimensions.get('window');

const BuyFilter = ({ visible, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState('Smart TV');
  const [sortTime, setSortTime] = useState('latestToOld'); // 'latestToOld' or 'oldToLatest'
  const [sortPrice, setSortPrice] = useState('highToLow'); // 'highToLow' or 'lowToHigh'
  const [selectedChoice, setSelectedChoice] = useState('inWarranty');
  const [distance, setDistance] = useState([10, 50]);

  const handleApply = () => {
    // Apply filter logic here
    console.log('Selected Category:', selectedCategory);
    console.log('Sort Time:', sortTime);
    console.log('Sort Price:', sortPrice);
    console.log('Selected Choice:', selectedChoice);
    console.log('Distance:', distance);
    onClose();
  };

  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <BlurView intensity={10} tint="systemChromeMaterialDark"
          experimentalBlurMethod="dimezisBlurView" style={styles.modalOverlay}>
        <View style={styles.modalContentWrapper}>
          <ScrollView style={styles.modalContainer}>
            <Text className="text-2xl font-bold mb-5">Filter By</Text>

            <Text className="text-lg font-bold mb-2">Product Category</Text>
            <View className='border-[1.5px] rounded-[2px] mb-5'>
              <Picker
                selectedValue={selectedCategory}
                onValueChange={(itemValue) => setSelectedCategory(itemValue)}
                className='font-[PoppinsMedium]'
              >
                <Picker.Item label="Smart TV" value="Smart TV" />
                <Picker.Item label="Laptop" value="Laptop" />
                <Picker.Item label="Phone" value="Phone" />
              </Picker>
            </View>
            

            <Text className="text-[12px] font-[PoppinsSemiBold] mb-2">By time</Text>
            <CustomCheckBox
              title="Latest to Old"
              checked={sortTime === 'latestToOld'}
              onPress={() => setSortTime('latestToOld')}
            />
            <CustomCheckBox
              title="Old to Latest"
              checked={sortTime === 'oldToLatest'}
              onPress={() => setSortTime('oldToLatest')}
            />

            <Text className="text-[12px] font-[PoppinsSemiBold] mb-2">By price</Text>
            <CustomCheckBox
              title="High to Low"
              checked={sortPrice === 'highToLow'}
              onPress={() => setSortPrice('highToLow')}
            />
            <CustomCheckBox
              title="Low to High"
              checked={sortPrice === 'lowToHigh'}
              onPress={() => setSortPrice('lowToHigh')}
            />

            <Text className="text-[12px] font-[PoppinsSemiBold] mb-2">Choose</Text>
            <View className="flex-row justify-between mb-5">
              <TouchableOpacity
                className={`flex-1 p-4 mx-1 border-[1.5px] rounded-[2px] items-center ${selectedChoice === 'inWarranty' ? 'border-black' : 'border-[#BDBDBD]'}`}
                style={{ backgroundColor: 'transparent' }}
                onPress={() => setSelectedChoice('inWarranty')}
              >
                <Text
                  className="text-[12px] font-[PoppinsMedium]"
                >
                  In-warranty
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className={`flex-1 p-4 mx-1 border-[1.5px] rounded-[2px] items-center ${selectedChoice === 'outOfWarranty' ? 'border-black' : 'border-[#BDBDBD]'}`}
                style={{ backgroundColor: 'transparent' }}
                onPress={() => setSelectedChoice('outOfWarranty')}
              >
                <Text
                  className="text-[12px] font-[PoppinsMedium]"
                >
                  Doesn't matter
                </Text>
              </TouchableOpacity>
            </View>

            <Text className="text-[12px] font-[PoppinsSemiBold] mb-2">Distance (in miles)</Text>
            <Slider
              value={distance}
              onValueChange={(value) => setDistance(value)}
              minimumValue={0}
              maximumValue={80}
              step={1}
              thumbTintColor="#1EB1FC"
              minimumTrackTintColor="#1EB1FC"
              maximumTrackTintColor="#d3d3d3"
              trackStyle={styles.trackStyle}
              thumbStyle={styles.thumbStyle}
            />

            <View className="flex-row justify-between mt-5 gap-2">
              <TouchableOpacity className="flex-1 p-4 mx-1 rounded-[2px] items-center" onPress={onClose}>
                <Text className="text-black font-[PoppinsMedium]">Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 p-4 mx-1 bg-black rounded-[2px] items-center" onPress={handleApply}>
                <Text className="text-white font-[PoppinsMedium]">Apply</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </BlurView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContentWrapper: {
    width: '90%',
    alignItems: 'center',
    padding: 10,
  },
  modalContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 2,
    borderWidth: 1.5,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRightWidth: 3.5,
    borderBottomWidth: 3.5,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
    border: '1.5px',
  },
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
});

export default BuyFilter;