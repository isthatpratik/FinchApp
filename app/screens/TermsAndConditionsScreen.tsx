import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient
import { useRouter } from 'expo-router'; // Import useRouter for navigation
import styles from './TermsAndConditionsS/TermsAndConditionsScreen.styles'; // Import styles

const TermsAndConditionsScreen = () => {
  const router = useRouter();

  const handleAccept = () => {
    console.log('Terms Accepted');
    router.push('/screens/MainDashboard'); // Navigate to the Main Dashboard after accepting terms
  };

  const handleDecline = () => {
    console.log('Terms Declined');
    // Handle decline action (you might want to exit the app or redirect to a different screen)
  };

  return (
    <View style={styles.container}>
      {/* Header with two rectangles */}
      <View style={styles.header}>
        {/* Yellow Rectangle */}
        <View style={styles.yellowRectangle} />
        
        {/* Gradient Rectangle */}
        <LinearGradient
          colors={['#FFEE00', '#00F0FF']} // Yellow to Cyan gradient
          style={styles.gradientRectangle}
        />
        
        {/* Header Text Inside the Header */}
        <Text style={styles.headerText}>Terms & Conditions</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>{"\u25A0"}</Text>
          <Text style={styles.text}>
            Venenatis quam porttitor at ornare scelerisque ac ut enim. Maecenas iaculis arcu, egestas suspendisse porttitor pretium tincidunt sed. Dignissim bibendum malesuada tortor risus lacinia. Consequat morbi id velit quis ut pretium.
          </Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>{"\u25A0"}</Text>
          <Text style={styles.text}>
            Cras nullam arcu ac ut quam habitasse. Arcu elit sem sed sed ac nunc odio aliquet nunc. Lobortis facilisis elementum lobortis diam. Adipiscing aenean tristique mi, nunc tellus purus. Ut ut amet mi ultrices cras ultrices consequat. Sed neque non enim.
          </Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>{"\u25A0"}</Text>
          <Text style={styles.text}>
            Pellentesque ac eu nunc nulla tristique proin lacus et. Lorem amet at nunc commodo urna. Cras purus mi eget nec risus ullamcorper blandit. Euismod amet nunc massa consectetur risus. Aenean montes, fusce rhoncus egestas nulla. 
          </Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>{"\u25A0"}</Text>
          <Text style={styles.text}>
            Et magna ultricies purus ultricies est, tincidunt scelerisque. Nec mauris semper mauris mauris, quisque adipiscing nec in. Pulvinar mattis arc.
          </Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>{"\u25A0"}</Text>
          <Text style={styles.text}>
            Elit rutrum ultrices praesent in duis sit. Elementum lectus tincidunt massa elementum aliquam porttitor. Nulla tincidunt lorem dictum urna, sed a, id tincidunt lectus. Tempus, augue tortor condimentum arcu tempus. Feugiat justo.
          </Text>
        </View>
      </ScrollView>

      {/* Footer with buttons */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.declineButton} onPress={handleDecline}>
          <Text style={styles.declineText}>Decline</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.acceptButton} onPress={handleAccept}>
          <Text style={styles.acceptText}>Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TermsAndConditionsScreen;
