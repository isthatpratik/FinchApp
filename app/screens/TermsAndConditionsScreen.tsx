import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import { useRouter } from 'expo-router';
import { StyleSheet } from "react-native";

const TermsAndConditionsScreen = () => {
  const router = useRouter();

  const handleAccept = () => {
    console.log('Terms Accepted');
    router.push('/screens/MainDashboard');
  };

  const handleDecline = () => {
    console.log('Terms Declined');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.yellowRectangle} />
        <LinearGradient
          colors={['#FFEE00', '#00F0FF']} 
          style={styles.gradientRectangle}
        />
        <Text style={styles.headerText}>Terms & Conditions</Text>
      </View>

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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    width: "100%",
    height: 100, // Total height for the header
    justifyContent: "center", // Center the content vertically
    alignItems: "center",
    borderBottomWidth: 3,
    borderColor: "#0F0F0F",
  },
  yellowRectangle: {
    height: "95%", // Yellow rectangle that takes most of the header height
    backgroundColor: "#FFEE00", // Yellow color
    width: "100%", // Full width of the screen
  },
  gradientRectangle: {
    height: "8%", // The height of the gradient part
    width: "100%", // Full width of the screen
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    fontFamily: "PoppinsSemiBold",
    textAlign: "center",
    position: "absolute",
    top: "50%",
  },
  content: {
    flex: 1,
    padding: 26,
    // paddingBottom: 100,
  },

  listItem: {
    flexDirection: "row", 
    marginBottom: 8, 
    flexWrap: "wrap", 
  },
  bullet: {
    fontSize: 14, 
    marginRight: 10, 
    color: "#000", 
  },
  text: {
    fontSize: 14,
    color: "#000",
    lineHeight: 20, 
    fontFamily: "PoppinsMedium",
    flexShrink: 1, 
    width: "90%",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#FFF",
    width: "95%",
    position: "absolute", 
    bottom: 0,
    height: 90
  },
  declineButton: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
    borderRadius: 2,
  },
  acceptButton: {
    flex: 1,
    backgroundColor: "#0F0F0F",
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
    borderRadius: 2,
  },
  acceptText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  declineText: {
    color: "#0F0F0F",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default TermsAndConditionsScreen;