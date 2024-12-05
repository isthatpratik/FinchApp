import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const AdditionalDetailsScreen: React.FC = () => {
  const navigation = useNavigation();
  const [additionalDetails, setAdditionalDetails] = useState({
    warrantyPeriod: '',
    purchaseDate: '',
    additionalNotes: '',
  });

  const handleInputChange = (key: string, value: string) => {
    setAdditionalDetails({ ...additionalDetails, [key]: value });
  };

  const navigateToDashboard = () => {
    navigation.navigate('MainDashboard'); // Adjust based on your stack navigation
  };

  const navigateBackToDetails = () => {
    navigation.goBack(); // Navigates back to AddProductDetailScreen
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons
          name="arrow-back-outline"
          size={20}
          color="#000"
          onPress={navigateBackToDetails}
        />
        <Text style={styles.headerTitle}>Additional Details</Text>
        <Ionicons
          name="close-outline"
          size={20}
          color="#000"
          onPress={navigateToDashboard}
        />
      </View>

      {/* Form */}
      <View style={styles.form}>
        <Text style={styles.label}>Warranty Period (in months)</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter warranty period"
          keyboardType="numeric"
          value={additionalDetails.warrantyPeriod}
          onChangeText={(text) => handleInputChange('warrantyPeriod', text)}
        />

        <Text style={styles.label}>Purchase Date</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter purchase date"
          value={additionalDetails.purchaseDate}
          onChangeText={(text) => handleInputChange('purchaseDate', text)}
        />

        <Text style={styles.label}>Additional Notes</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Enter any additional notes"
          multiline={true}
          numberOfLines={4}
          value={additionalDetails.additionalNotes}
          onChangeText={(text) => handleInputChange('additionalNotes', text)}
        />
      </View>

      {/* Footer */}
      <TouchableOpacity
        style={styles.finishButton}
        onPress={navigateToDashboard}
      >
        <Text style={styles.finishButtonText}>Finish</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  form: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: '600',
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 6,
    padding: 10,
    marginBottom: 16,
    backgroundColor: '#FFF',
  },
  textArea: {
    textAlignVertical: 'top',
    height: 100,
  },
  finishButton: {
    backgroundColor: '#000',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  finishButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AdditionalDetailsScreen;
