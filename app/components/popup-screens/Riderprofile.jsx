import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const RiderProfile = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER SECTION */}
      <View style={styles.header}>
        <View style={styles.statusBadge}>
          <View style={styles.pulseDot} />
          <Text style={styles.statusText}>LIVE TRACKING</Text>
        </View>
        <Text style={styles.mainTitle}>Your rider is{"\n"}approaching</Text>
      </View>

      {/* TRACKING VISUAL */}
      <View style={styles.mapPreview}>
        <View style={styles.dottedLine}>
          <View style={[styles.dot, { backgroundColor: "#E0E0E0" }]} />
          <View style={styles.line} />
          <View style={[styles.dot, { backgroundColor: "#000" }]} />
        </View>
        <View style={styles.locationLabels}>
          <Text style={styles.locationText}>Pickup Point</Text>
          <Text style={styles.locationTextBold}>You • 4 mins away</Text>
        </View>
      </View>

      {/* RIDER PROFILE CARD */}
      <View style={styles.profileCard}>
        <View style={styles.profileTop}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: "https://i.pravatar.cc/150?u=rahul" }}
              style={styles.avatar}
            />
            <View style={styles.ratingBadge}>
              <Text style={styles.ratingStar}>★</Text>
              <Text style={styles.ratingVal}>4.8</Text>
            </View>
          </View>
          
          <View style={styles.riderDetails}>
            <Text style={styles.riderName}>Rahul Sharma</Text>
            <Text style={styles.vehicleInfo}>Honda Activa • MH12 AB 1234</Text>
          </View>
        </View>

        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.primaryAction}>
            <Text style={styles.actionIcon}>📞</Text>
            <Text style={styles.actionLabel}>Call Rahul</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryAction}>
            <Text style={styles.actionIcon}>💬</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* TRIP STATS */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>1.2</Text>
          <Text style={styles.statSub}>km</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statValue}>4</Text>
          <Text style={styles.statSub}>mins</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statValue}>$4.50</Text>
          <Text style={styles.statSub}>Fare</Text>
        </View>
      </View>

      {/* SECURITY OTP SECTION */}
      <View style={styles.otpSection}>
        <View style={styles.otpInfo}>
          <Text style={styles.otpLabel}>SECURE TRIP CODE</Text>
          <Text style={styles.otpDesc}>Confirm the code to start your ride</Text>
        </View>
        <View style={styles.otpBox}>
          <Text style={styles.otpText}>4521</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.safetyButton}>
        <Text style={styles.safetyText}>Safety Center</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RiderProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
  },
  header: {
    marginTop: 20,
    marginBottom: 30,
  },
  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 100,
    alignSelf: "flex-start",
    marginBottom: 16,
  },
  pulseDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#2ECC71",
    marginRight: 6,
  },
  statusText: {
    fontSize: 10,
    fontWeight: "800",
    color: "#666",
    letterSpacing: 1,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "#000",
    lineHeight: 38,
    letterSpacing: -1,
  },
  mapPreview: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
    paddingLeft: 4,
  },
  dottedLine: {
    alignItems: "center",
    width: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  line: {
    width: 2,
    height: 30,
    backgroundColor: "#F0F0F0",
    marginVertical: 4,
  },
  locationLabels: {
    marginLeft: 15,
    justifyContent: "space-between",
    height: 60,
  },
  locationText: {
    color: "#AAA",
    fontSize: 14,
  },
  locationTextBold: {
    color: "#000",
    fontSize: 14,
    fontWeight: "700",
  },
  profileCard: {
    backgroundColor: "#FFF",
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: "#F0F0F0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 5,
    marginBottom: 20,
  },
  profileTop: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    position: "relative",
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 20,
  },
  ratingBadge: {
    position: "absolute",
    bottom: -8,
    right: -8,
    backgroundColor: "#000",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#FFF",
  },
  ratingStar: {
    color: "#FFD700",
    fontSize: 10,
    marginRight: 2,
  },
  ratingVal: {
    color: "#FFF",
    fontSize: 10,
    fontWeight: "700",
  },
  riderDetails: {
    marginLeft: 20,
  },
  riderName: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
  },
  vehicleInfo: {
    color: "#888",
    fontSize: 13,
    marginTop: 2,
  },
  actionRow: {
    flexDirection: "row",
    marginTop: 20,
    gap: 12,
  },
  primaryAction: {
    flex: 4,
    flexDirection: "row",
    backgroundColor: "#000",
    height: 50,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  secondaryAction: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    height: 50,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  actionIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  actionLabel: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 14,
  },
  statsContainer: {
    flexDirection: "row",
    backgroundColor: "#F9F9F9",
    borderRadius: 20,
    padding: 15,
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 30,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "800",
    color: "#000",
  },
  statSub: {
    fontSize: 12,
    color: "#888",
    marginLeft: 3,
    fontWeight: "600",
  },
  statDivider: {
    width: 1,
    height: 20,
    backgroundColor: "#DDD",
  },
  otpSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    padding: 20,
    borderRadius: 24,
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#DDD",
  },
  otpInfo: {
    flex: 1,
  },
  otpLabel: {
    fontSize: 10,
    fontWeight: "900",
    color: "#000",
    letterSpacing: 1.5,
  },
  otpDesc: {
    fontSize: 12,
    color: "#888",
    marginTop: 4,
  },
  otpBox: {
    backgroundColor: "#FFF",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  otpText: {
    fontSize: 22,
    fontWeight: "900",
    color: "#000",
    letterSpacing: 2,
  },
  safetyButton: {
    marginTop: "auto",
    alignSelf: "center",
    marginBottom: 10,
  },
  safetyText: {
    color: "#2ECC71",
    fontWeight: "700",
    fontSize: 14,
  },
});