import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Define the expected props type
type Props = {
  onAccept: () => void; // Required onAccept prop
};

const TermsAndConditionsScreen: React.FC<Props> = ({ onAccept }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Terms and Conditions</Text>
      <Text style={styles.content}>
        {/* Add your terms and conditions content here */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula.
      </Text>
      <Button title="Accept" onPress={onAccept} /> {/* Trigger onAccept when pressed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default TermsAndConditionsScreen;
