import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // For navigation
import Ionicons from '@expo/vector-icons/Ionicons'; // Import Ionicons

// Custom Checkbox Component
const CustomCheckBox = ({ value, onChange }: { value: boolean; onChange: (value: boolean) => void }) => (
  <TouchableOpacity
    onPress={() => onChange(!value)}
    accessible
    accessibilityLabel={value ? 'Checkbox checked' : 'Checkbox unchecked'}
    style={[styles.checkboxContainer, value && styles.checked]}
  >
    {value && <Text style={styles.checkboxCheck}>✓</Text>}
  </TouchableOpacity>
);

const ProfilePage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [rating, setRating] = useState(3); 
  const navigation = useNavigation<any>(); 
  const badges = [
    { id: 1, title: 'Go Getter', image: require('../assets/images/go-getter-badge.png') },
    { id: 2, title: 'Explorer', image: require('../assets/images/explorer-badge.png') },
    { id: 3, title: 'Intern Badge', image: require('../assets/images/intern-badge.png') },
    { id: 4, title: 'Deal Broker', image: require('../assets/images/upcoming-badge.png') },
  ];

  return (
    <View style={styles.container}>
      {/* Top Section (Green Background) */}
      <View style={styles.topSection}>
        {/* Cross Button */}
        <TouchableOpacity
          style={styles.crossButton}
          onPress={() => navigation.navigate('MainDashboard')}
          accessible
          accessibilityLabel="Close profile and go back to dashboard"
        >
          <Ionicons name="close" size={24} color="#000" />
        </TouchableOpacity>

        {/* Profile Info */}
        <View style={styles.profileContainer}>
          <Image
            source={require('../assets/images/john-profile.png')}
            style={styles.profileImage}
          />
          <View style={styles.profileTextContainer}>
            <Text style={styles.welcomeText}>Welcome, John!</Text>
            <View style={styles.logoutContainer}>
              <Text style={styles.logoutText}>Log out</Text>
              <Image
                source={require('../assets/images/logout.png')}
                style={styles.logoutIcon}
              />
            </View>
          </View>
        </View>

        {/* Rating Section */}
        <Text style={styles.sectionTitle}>Rating</Text>
        <View style={styles.ratingContainer}>
          <View style={styles.ratingBox}>
            {Array.from({ length: 5 }).map((_, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setRating(index + 1)}
                style={styles.starButton}
                accessible
                accessibilityLabel={`Rate ${index + 1} star${index === 0 ? '' : 's'}`}
              >
                <Image
                  source={
                    index < rating
                      ? require('../assets/images/star-filled.png')
                      : require('../assets/images/star-empty.png')
                  }
                  style={styles.starIcon}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Statistics Section */}
        <View style={styles.statsContainer}>
          {[
            { label: 'Products', value: 1 },
            { label: 'Current Value', value: '$1200' },
            { label: 'Products Sold', value: 1 },
            { label: 'Products Bought', value: 1 },
          ].map((stat, idx) => (
            <View key={idx} style={styles.statBox}>
              <Text>{stat.label}</Text>
              <Text style={styles.boldText}>{stat.value}</Text>
            </View>
          ))}
        </View>

        {/* Monthly Report Opt-In */}
        <View style={styles.checkboxTextContainer}>
          <CustomCheckBox value={isChecked} onChange={setIsChecked} />
          <Text style={styles.checkboxText}>Opt to get a monthly asset report</Text>
        </View>
      </View>

      {/* Bottom Section (Badges) */}
      <View style={styles.bottomSection}>
        <Text style={styles.badgesTitle}>Badges</Text>
        <View style={styles.badgesContainer}>
          {badges.map((badge) => (
            <View key={badge.id} style={styles.badge}>
              <Image source={badge.image} style={styles.badgeImage} />
              <Text style={styles.badgeText}>{badge.title}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Poppins',
  },
  topSection: {
    backgroundColor: '#8FFF00',
    padding: 32,
    paddingTop: 32, 
    justifyContent: 'flex-start',
  },
  crossButton: {
    position: 'absolute',
    top: 60,
    right: 26,
    zIndex: 10,
  },
  boldText: {
    fontFamily: 'PoppinsBold',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
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
    fontWeight: '600',
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
    borderWidth: 2,
    borderRadius: 2,
    marginBottom: 15,
    elevation: 2,
    marginTop: 8,
  },
  checkboxContainer: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxCheck: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
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
    backgroundColor: '#FFF',
    padding: 12,
    marginTop: -10,
    borderTopWidth: 2,
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
  },
  badge: {
    width: '50%',
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeImage: {
    width: 100,
    height: 100,
  },
  badgeText: {
    fontSize: 14,
    fontFamily: 'PoppinsMedium',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default ProfilePage;
