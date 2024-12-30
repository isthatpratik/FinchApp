import React, { useEffect, useRef } from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet, Animated, Dimensions, ScrollView } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import NotificationCard from './NotificationCard'; // Import NotificationCard component

interface NotificationModalProps {
  visible: boolean;
  onClose: () => void;
}

const NotificationModal: React.FC<NotificationModalProps> = ({ visible, onClose }) => {
  const translateX = useRef(new Animated.Value(Dimensions.get('window').width)).current; // Start off-screen (to the right)

  useEffect(() => {
    if (visible) {
      // Slide in from the right
      Animated.timing(translateX, {
        toValue: Dimensions.get('window').width * 0.1, // Move to the right 10% of the screen
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      // Slide out to the right
      Animated.timing(translateX, {
        toValue: Dimensions.get('window').width, // Move off-screen to the right
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  // Placeholder data for notification types
  const notifications: { type: 'sell' | 'buy' | 'alert'; text: string }[] = [
    { type: 'sell', text: "Someone’s looking for the product that you own. Wanna sell?" },
    { type: 'buy', text: "You’ve received an interest for a product you want" },
    { type: 'alert', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  ];

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}
    >
      <BlurView
        intensity={30}
        tint="systemChromeMaterialDark"
        style={styles.modalOverlay}
        experimentalBlurMethod="dimezisBlurView"
      >
        {/* Close Icon outside the modal */}
        <TouchableOpacity style={styles.closeIconWrapper} onPress={onClose}>
          <Ionicons name='close-sharp' color="white" size={32} />
        </TouchableOpacity>

        <Animated.View
          style={[styles.modalContainer, { transform: [{ translateX }] }]}
        >

          {/* Notification Cards */}
          <ScrollView contentContainerStyle={styles.scrollView}>
            {notifications.map((notification, index) => (
              <NotificationCard
                key={index}
                notificationType={notification.type}
                onButtonPress={onClose}
              />
            ))}
          </ScrollView>
        </Animated.View>
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
    padding: 32,
    borderRadius: 2,
    borderWidth: 1.5,
    borderLeftWidth: 3.5,
    width: '90%',
    maxWidth: Dimensions.get('window').width * 0.9,
    height: '100%', // Adjust height to allow space for multiple cards
    position: 'absolute',
    right: 0,
    top: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeIconWrapper: {
    position: 'absolute',
    top: 25, // Slightly above the modal
    left: 25, // Positioning close icon outside the modal (on the left side)
    zIndex: 1, // Ensuring it's above the modal
  },
  scrollView: {
    width: '100%',
    marginBottom: 20,
    marginTop: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 40,
    backgroundColor: '#000',
    borderRadius: 2,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default NotificationModal;
