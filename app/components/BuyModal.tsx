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
import { MaterialIcons } from '@expo/vector-icons';

interface BuyModalProps {
  visible: boolean;
  onClose: () => void;
}

const BuyModal: React.FC<BuyModalProps> = ({ visible, onClose }) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <BlurView
        intensity={10}
        tint="systemThickMaterialDark"
        style={StyleSheet.absoluteFill}
        experimentalBlurMethod="dimezisBlurView"
      >
        <View style={styles.modalOverlay}>
          {/* Modal Content */}
          <View style={styles.modalContainer}>
            {/* Close Icon */}
            <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
              <MaterialIcons name="close" size={24} color="black" />
            </TouchableOpacity>

            {/* Title */}
            <Text style={styles.modalTitle}>Choose an Option</Text>

            {/* Regular Sell Button */}
            <TouchableOpacity style={styles.optionButtonRegular}>
              <Image
                source={require('../assets/images/icons/regular-sell.png')}
                style={styles.optionIcon}
                resizeMode='contain'
              />
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionTitle}>Regular Buy</Text>
                <Text style={styles.optionDescription}>
                    Buy products from the regular marketplace.
                </Text>
              </View>
            </TouchableOpacity>

            {/* Fast-track Sell Button */}
            <TouchableOpacity style={styles.optionButtonFastTrack}>
              <Image
                source={require('../assets/images/icons/fast-track-sell.png')}
                style={styles.optionIcon}
                resizeMode='contain'
              />
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionTitle}>Finch Buy</Text>
                <Text style={styles.optionDescription}>
                    A unique & customized buying experience.
                </Text>
              </View>
            </TouchableOpacity>
          </View>
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
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 2,
    borderWidth: 1.5,
    borderEndWidth: 3.5,
    borderBottomWidth: 3.5,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: 'PoppinsSemiBold',
    marginBottom: 20,
    textAlign: 'center',
  },
  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
  },
  optionButtonRegular: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFEE00',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 2,
    borderWidth: 1.5,
    borderEndWidth: 3.5,
    borderBottomWidth: 3.5,
    marginBottom: 15,
    width: '100%',
  },
  optionButtonFastTrack: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8FFF00',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 2,
    borderWidth: 1.5,
    borderEndWidth: 3.5,
    borderBottomWidth: 3.5,
    marginBottom: 15,
    width: '100%',
  },
  optionIcon: {
    width: 32,
    height: 32,
    marginRight: 15,
  },
  optionTextContainer: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontFamily: 'PoppinsSemiBold',
    color: 'black',
  },
  optionDescription: {
    fontSize: 12,
    fontFamily: 'PoppinsMedium',
    color: 'black',
  },
});

export default BuyModal;
