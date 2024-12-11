import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SuccessPopupScreen = ({ navigation }: any) => {
  const handleBackToHome = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.popup}>
        <Text style={styles.successIcon}>⭐</Text>
        <Text style={styles.title}>Yaay!</Text>
        <Text>Congratulations! Your product has been listed.</Text>
        <TouchableOpacity style={styles.button} onPress={handleBackToHome}>
          <Text style={styles.buttonText}>Back to home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  popup: { backgroundColor: '#fff', padding: 24, borderRadius: 8, alignItems: 'center', width: '80%' },
  successIcon: { fontSize: 40, marginBottom: 16 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 16 },
  button: { backgroundColor: '#000', padding: 12, borderRadius: 8, marginTop: 16, width: '100%', alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16 },
});

export default SuccessPopupScreen;
