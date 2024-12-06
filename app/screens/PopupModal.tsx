import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { BlurView } from "expo-blur";

interface PopupModalProps {
  visible: boolean;
  onClose: () => void;
}

const { width } = Dimensions.get("window");

const PopupModal: React.FC<PopupModalProps> = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        {/* Blur background */}
        <BlurView style={styles.blurBackground} intensity={50} tint="dark">
          {/* Modal Content */}
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Welcome to the Dashboard!</Text>
            <Text style={styles.modalDescription}>
              Here is a brief tutorial on how to use the app.
            </Text>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  blurBackground: {
    width: width * 0.85,
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 15,
    overflow: "hidden", // Ensure the rounded corners are respected
    alignSelf: "center",
  },
  modalContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 22,
    fontFamily: "Poppins-SemiBold",
    color: "#FFFFFF",
    marginBottom: 15,
    textAlign: "center",
  },
  modalDescription: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 22,
  },
  closeButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#FFEE00",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  closeButtonText: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    color: "#000000",
  },
});

export default PopupModal;
