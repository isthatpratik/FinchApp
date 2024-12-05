import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { CameraView, CameraType, FlashMode, useCameraPermissions } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import Overlay from './Overlay';

const CameraScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [cameraFacing, setCameraFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [flash, setFlash] = useState<FlashMode>('off');
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [isCameraReady, setIsCameraReady] = useState(false);

  const cameraRef = useRef<CameraView>(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to access the camera</Text>
        <TouchableOpacity onPress={requestPermission}>
          <Text style={styles.buttonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleCameraReady = () => {
    setIsCameraReady(true);
  };

  const toggleFlash = () => {
    setFlash((prev) => (prev === 'off' ? 'on' : prev === 'on' ? 'auto' : 'off'));
  };

  const handleImageSelect = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets?.[0]?.uri) {
      console.log('Selected image URI:', result.assets[0].uri);
      setPhotoUri(result.assets[0].uri);
    }
  };

  const handleTakePhoto = async () => {
    if (!isCameraReady) {
      console.warn('Camera is not ready');
      return;
    }

    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync({
          quality: 0.5,
          base64: false,
          exif: false,
          skipProcessing: false,
        });

        if (photo?.uri) {
          console.log('Photo URI:', photo.uri);
          setPhotoUri(photo.uri);
        } else {
          console.warn('No photo was captured');
        }
      } catch (error) {
        console.error('Error taking photo:', error);
      }
    } else {
      console.warn('Camera reference is null');
    }
  };

  return (
    <View style={styles.container}>
      <CameraView
        ref={cameraRef}
        style={styles.camera}
        facing={cameraFacing}
        flash={flash}
        onCameraReady={handleCameraReady}
      >
        <Overlay onGoBack={() => navigation.navigate('MainDashboard')} />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.bottomButton} onPress={handleImageSelect}>
            <Text style={styles.buttonText}>Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButton} onPress={handleTakePhoto}>
            <Text style={styles.buttonText}>Capture</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButton} onPress={toggleFlash}>
            <Text style={styles.buttonText}>Flash</Text>
          </TouchableOpacity>
        </View>
      </CameraView>

      {photoUri && (
        <View style={styles.photoPreviewContainer}>
          <Text style={styles.message}>Photo Preview:</Text>
          <Image source={{ uri: photoUri }} style={styles.photoPreview} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { flex: 1 },
  message: { textAlign: 'center', padding: 10 },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    padding: 10,
  },
  bottomButton: { padding: 10 },
  buttonText: { color: '#fff' },
  photoPreviewContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  photoPreview: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default CameraScreen;