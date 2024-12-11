import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OptionSelection = () => {
  const navigation = useNavigation<any>();

  const handleRegularSell = () => {
    // Navigate or perform action for Regular Sell
    navigation.navigate('RegularSellScreen');
  };

  const handleFastTrackSell = () => {
    // Navigate or perform action for Fast Track Sell
    navigation.navigate('FastTrackSellScreen');
  };

  return (
    <View style={styles.container}>
      {/* Modal Container */}
      <View style={styles.modal}>
        <Text style={styles.title}>Choose an option</Text>

        {/* Regular Sell Button */}
        <TouchableOpacity
          style={[styles.optionButton, styles.regularSell]}
          onPress={handleRegularSell}
          accessible
          accessibilityLabel="Regular sell option"
        >
          <Text style={styles.buttonTitle}>Regular sell</Text>
          <Text style={styles.buttonSubtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </TouchableOpacity>

        {/* Fast Track Sell Button */}
        <TouchableOpacity
          style={[styles.optionButton, styles.fastTrackSell]}
          onPress={handleFastTrackSell}
          accessible
          accessibilityLabel="Fast-track sell option"
        >
          <Text style={styles.buttonTitle}>Fast-track sell</Text>
          <Text style={styles.buttonSubtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '90%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 20,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'PoppinsBold',
  },
  optionButton: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
  },
  regularSell: {
    backgroundColor: '#FFD700',
  },
  fastTrackSell: {
    backgroundColor: '#32CD32',
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'PoppinsMedium',
  },
  buttonSubtitle: {
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
    marginTop: 5,
    fontFamily: 'PoppinsRegular',
  },
});

export default OptionSelection;
