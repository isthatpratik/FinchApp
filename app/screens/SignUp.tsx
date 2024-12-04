import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const { height } = Dimensions.get('window'); // Get screen height

const SignUpScreen: React.FC = () => {
  const navigation = useNavigation();

  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <LinearGradient
          colors={['#FFEE00', '#FFEE00']} // Yellow gradient
          style={styles.headerBackground}
        />
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
          <Ionicons name="close" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Sign-up</Text>
      </View>

      {/* Form Section */}
      <View style={styles.formContainer}>
        {/* Mobile Number Input */}
        <Text style={styles.inputLabel}>Mobile Number</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Mobile Number"
          keyboardType="phone-pad"
          value={mobileNumber}
          onChangeText={setMobileNumber}
        />

        {/* Password Input */}
        <Text style={styles.inputLabel}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.inputField}
            placeholder="Type your password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={handleTogglePassword} style={styles.eyeIcon}>
            <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="#888" />
          </TouchableOpacity>
        </View>

        {/* Forgot Password */}
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>Sign in</Text>
        </TouchableOpacity>

        {/* Login Prompt */}
        <TouchableOpacity>
          <Text style={styles.loginPrompt}>Not an account? <Text style={styles.loginLink}>Login here</Text></Text>
        </TouchableOpacity>

        {/* Sign up with */}
        <Text style={styles.signUpWith}>Or sign up with</Text>

        {/* Social Media Buttons */}
        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton}>
            <View style={styles.socialButtonContent}>
              <Image
                source={require('../assets/images/google.png')}
                style={styles.socialIcon}
              />
              <Text style={styles.socialButtonText}>Google</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <View style={styles.socialButtonContent}>
              <Image
                source={require('../assets/images/facebook.png')}
                style={styles.socialIcon}
              />
              <Text style={styles.socialButtonText}>Facebook</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      fontFamily: 'PoppinsMedium',
    },
    header: {
      height: height * 0.38,
      backgroundColor: '#FFEE00',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    headerBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '100%',
    },
    backButton: {
      position: 'absolute',
      top: 40,
      left: 20,
    },
    closeButton: {
      position: 'absolute',
      top: 40,
      right: 20,
    },
    headerText: {
      fontSize: 28,
      fontFamily: 'PoppinsSemiBold',
      color: '#000000',
      position: 'absolute',
      bottom: 20,  // Distance from the bottom
      left: 30,    // Distance from the left
    },
  
    // Form Section
    formContainer: {
      paddingHorizontal: 32,
      paddingTop: 24,
    },
    inputLabel: {
      fontSize: 14,
      fontWeight: 'bold',
      marginBottom: 8,
      color: '#000',
    },
    inputField: {
      height: 50,
      borderWidth: 2,
      borderRadius: 2,
      marginBottom: 14,
      paddingLeft: 20,
      fontSize: 16,
      fontFamily: 'PoppinsMedium',
    },
    passwordContainer: {
      position: 'relative',
    },
    eyeIcon: {
      position: 'absolute',
      right: 16,
      top: 14,
    },
    forgotPassword: {
      color: '#000',
      fontSize: 12,
      marginBottom: 20,
      textAlign: 'right',
    },
    signUpButton: {
      backgroundColor: '#000000',
      paddingVertical: 22,
      borderRadius: 2,
      marginBottom: 16,
      marginTop: 16,
      alignItems: 'center',
    },
    signUpButtonText: {
      color: '#FFFFFF',
      fontSize: 12,
      fontWeight: 'bold',
    },
    loginPrompt: {
      textAlign: 'center',
      color: '#888888',  // Default color for the prompt text
      fontSize: 14,
      fontFamily: 'PoppinsMedium',
      marginTop: 16,
    },
    loginLink: {
      color: '#000',
    },
  
    // Social Buttons
    signUpWith: {
      textAlign: 'center',
      color: '#888888',
      fontSize: 14,
      marginTop: 16,
      marginBottom: 16,
    },
    socialButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    socialButton: {
      width: '48%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 2,
      borderWidth: 2,
      flexDirection: 'row',
      marginBottom: 16,
    },
    socialButtonContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    socialIcon: {
      width: 24,
      height: 24,
      resizeMode: 'contain',
      marginRight: 8,
    },
    socialButtonText: {
      fontSize: 14,
      fontFamily: 'PoppinsMedium',
    },
  });
  

export default SignUpScreen;
