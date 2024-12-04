import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// Custom Checkbox component
const CustomCheckBox = ({ value, onChange }: { value: boolean; onChange: (value: boolean) => void }) => {
  return (
    <TouchableOpacity onPress={() => onChange(!value)} style={styles.checkboxContainer}>
      <View style={[styles.checkboxContainer, value && styles.checked]} />
    </TouchableOpacity>
  );
};

const ProfilePage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [rating, setRating] = useState(3); // Rating out of 5

  return (
    <View style={styles.container}>
      {/* Top Section (Green background) */}
      <View style={styles.topSection}>
        {/* Profile Container */}
        <View style={styles.profileContainer}>
          <Image
            source={require('../assets/images/john-profile.png')} // Replace with your profile image
            style={styles.profileImage}
          />
          <View style={styles.profileTextContainer}>
            <Text style={styles.welcomeText}>Welcome, John!</Text>
            <View style={styles.logoutContainer}>
              <Text style={styles.logoutText}>Log out</Text>
              <Image
                source={require('../assets/images/logout.png')} // Logout logo image
                style={styles.logoutIcon}
              />
            </View>
          </View>
        </View>

        {/* Rating Section with Container */}
        <Text style={styles.sectionTitle}>Rating</Text>
        <View style={styles.ratingContainer}>
          <View style={styles.ratingBox}>
            {Array.from({ length: 5 }).map((_, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setRating(index + 1)}
                style={styles.starButton}
              >
                <Image
                  source={
                    index < rating
                      ? require('../assets/images/star-filled.png') // Replace with your filled star icon
                      : require('../assets/images/star-empty.png') // Replace with your empty star icon
                  }
                  style={styles.starIcon}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Statistics Section */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text>Products</Text>
            <Text style={styles.boldText}>1</Text>
          </View>
          <View style={styles.statBox}>
            <Text>Current Value</Text>
            <Text style={styles.boldText}>$1200</Text>
          </View>
          <View style={styles.statBox}>
            <Text>Products Sold</Text>
            <Text style={styles.boldText}>01</Text>
          </View>
          <View style={styles.statBox}>
            <Text>Products Bought</Text>
            <Text style={styles.boldText}>01</Text>
          </View>
        </View>

        {/* Monthly Report Opt-In */}
        <View style={styles.checkboxTextContainer}>
          <CustomCheckBox value={isChecked} onChange={setIsChecked} />
          <Text style={styles.checkboxText}>
            Opt to get a monthly asset report
          </Text>
        </View>
      </View>

      {/* Bottom Section (White background) */}
      <View style={styles.bottomSection}>
        <Text style={styles.badgesTitle}>Badges</Text>
        <View style={styles.badgesContainer}>
          {/* Badge 1 */}
          <View style={styles.badge}>
            <Image
              source={require('../assets/images/go-getter-badge.png')} // Replace with your badge 1 image
              style={styles.badgeImage}
            />
            <Text style={styles.badgeText}>Go Getter</Text>
          </View>
          {/* Badge 2 */}
          <View style={styles.badge}>
            <Image
              source={require('../assets/images/explorer-badge.png')} // Replace with your badge 2 image
              style={styles.badgeImage}
            />
            <Text style={styles.badgeText}>Explorer</Text>
          </View>
          {/* Badge 3 */}
          <View style={styles.badge}>
            <Image
              source={require('../assets/images/intern-badge.png')} // Replace with your badge 3 image
              style={styles.badgeImage}
            />
            <Text style={styles.badgeText}>Intern Badge</Text>
          </View>
          {/* Badge 4 */}
          <View style={styles.badge}>
            <Image
              source={require('../assets/images/upcoming-badge.png')} // Replace with your badge 4 image
              style={styles.badgeImage}
            />
            <Text style={styles.badgeText}>Deal Broker</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Poppins', // Default font set to Poppins
  },
  boldText: {
    fontFamily: 'PoppinsBold',
    fontSize: 20,
  },
  topSection: {
    backgroundColor: '#8FFF00',  // Green background
    padding: 32,
    justifyContent: 'flex-start',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 25,
    marginRight: 15,
  },
  profileTextContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: '600', // SemiBold
    color: '#000',
    fontFamily: 'PoppinsBold',
  },
  logoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  logoutText: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'PoppinsMedium',
  },
  logoutIcon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  sectionTitle: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 5,
    textAlign: 'center',
    fontFamily: 'PoppinsSemiBold',
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 12,
  },
  ratingBox: {
    backgroundColor: '#FFF',
    borderRadius: 2,
    padding: 12,
    flexDirection: 'row',
    shadowColor:'#000000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 4,
    borderWidth: 2,
  },
  starButton: {
    marginRight: 5,
  },
  starIcon: {
    width: 25,
    height: 25,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statBox: {
    width: '46%',
    backgroundColor: '#FFF',
    padding: 12,
    gap: 5,
    borderWidth: 2,
    borderRadius: 2,
    marginBottom: 15,
    shadowColor:'#000000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 2,
    marginTop: 8,
  },
  checkboxContainer: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: '#000',
  },
  checkboxTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 14,
    fontFamily: 'PoppinsMedium',
  },
  bottomSection: {
    backgroundColor: '#FFF', // White background for the bottom section
    padding: 12,
    marginTop: -10,
    borderTopWidth: 2, // Pulls the bottom section up slightly
  },
  badgesTitle: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'PoppinsBold',
  },
  badgesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  badge: {
    width: '50%',  // Each badge takes up half of the row
    height: 140,   // Increased height for larger badges with text below
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',  // Remove background color
  },
  badgeImage: {
    width: 100,  // Increased size of badge images
    height: 100, // Increased size of badge images
  },
  badgeText: {
    fontSize: 14,
    fontFamily: 'PoppinsMedium',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default ProfilePage;
