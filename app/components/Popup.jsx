import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';

const Popup = ({ isVisible, onClose }) => {
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
          intensity={10}
          tint="systemChromeMaterialDark"
          style={StyleSheet.absoluteFill}
          experimentalBlurMethod="dimezisBlurView"
        >
          <View style={styles.modalOverlay}>
            {/* Modal Content */}
            <View style={styles.modalContainer}>
              {/* Close Icon */}
              <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
                <Text style={styles.closeText}>×</Text>
              </TouchableOpacity>

              {/* Success Icon */}
              <View className='mb-2 mt-2'>
                <Image
                  source={require('../assets/images/icons/success-icon.png')}
                  style={styles.icon}
                  resizeMode='contain'
                />
              </View>

              {/* Title */}
              <Text className='font-[PoppinsSemiBold] text-[18px] mb-4'>Yaay!</Text>
              <Text className='font-[PoppinsMedium] text-[12px] mb-4 text-center px-2 text-[#828282]'>
                You’ll get notified! The seller will get in touch with you.
              </Text>

              {/* Button */}
              <TouchableOpacity
                onPress={() => {
                  onClose();
                  router.dismissTo('/screens/MainDashboard'); // Navigate back to the main dashboard
                }}
                className='py-5 rounded-[2px] w-full items-center bg-black mt-4'
              >
                <Text className='font-[PoppinsSemiBold] text-[13px] text-white'>Back to Home</Text>
              </TouchableOpacity>
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
  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 25,
  },
  closeText: {
    fontSize: 24,
    color: '#000',
  },
  icon: {
    width: 50,
    height: 50,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    textAlign: 'center',
    color: '#828282',
    marginBottom: 20,
  },
});

export default Popup;