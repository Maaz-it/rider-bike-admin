import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const RiderProfile = () => {
  return (
    <View style={styles.container}>

      {/* TOP STATUS */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your rider is coming</Text>
        <Text style={styles.headerSub}>Rahul will arrive soon</Text>
      </View>

      {/* PROGRESS BAR */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={styles.progressFill} />

          <View style={styles.arrowContainer}>
            <Text style={styles.arrow}>➤</Text>
          </View>
        </View>

        <View style={styles.progressLabels}>
          <Text style={styles.distance}>1.4 km away</Text>
          <Text style={styles.time}>3 min left</Text>
        </View>
      </View>

      {/* RIDER CARD */}
      <View style={styles.riderCard}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=11" }}
          style={styles.avatar}
        />

        <View style={{ flex: 1 }}>
          <Text style={styles.name}>Rahul Sharma</Text>
          <Text style={styles.rating}>⭐ 4.9 • 324 rides</Text>

          <Text style={styles.vehicle}>🏍️ Honda Activa</Text>
          <Text style={styles.number}>MH 12 AB 1234</Text>
        </View>
      </View>

      {/* DETAILS */}
      <View style={styles.details}>
        <View style={styles.detailBox}>
          <Text style={styles.detailValue}>1.4 km</Text>
          <Text style={styles.detailLabel}>Distance</Text>
        </View>

        <View style={styles.detailBox}>
          <Text style={styles.detailValue}>3 min</Text>
          <Text style={styles.detailLabel}>Arrival</Text>
        </View>

        <View style={styles.detailBox}>
          <Text style={styles.detailValue}>Bike</Text>
          <Text style={styles.detailLabel}>Vehicle</Text>
        </View>
      </View>

      {/* OTP */}
      <View style={styles.otpCard}>
        <Text style={styles.otpTitle}>Rider OTP</Text>
        <Text style={styles.otp}>4521</Text>
        <Text style={styles.otpNote}>
          Provide this OTP to rider on arrival
        </Text>
      </View>

    </View>
  );
};

export default RiderProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
  },

  header: {
    paddingHorizontal: 20,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
  },

  headerSub: {
    color: "#666",
    marginTop: 4,
  },

  progressContainer: {
    marginTop: 25,
    paddingHorizontal: 20,
  },

  progressBar: {
    height: 8,
    backgroundColor: "#eee",
    borderRadius: 10,
    justifyContent: "center",
  },

  progressFill: {
    width: "45%",
    height: 8,
    backgroundColor: "#BBFF5B",
    borderRadius: 10,
  },

  arrowContainer: {
    position: "absolute",
    left: "45%",
    top: -10,
  },

  arrow: {
    fontSize: 20,
  },

  progressLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },

  distance: {
    color: "#333",
  },

  time: {
    fontWeight: "600",
  },

  riderCard: {
    flexDirection: "row",
    marginTop: 30,
    marginHorizontal: 20,
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 18,
    alignItems: "center",
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },

  name: {
    fontSize: 16,
    fontWeight: "700",
  },

  rating: {
    color: "#666",
    marginTop: 3,
  },

  vehicle: {
    marginTop: 6,
    fontWeight: "600",
  },

  number: {
    color: "#666",
  },

  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    paddingHorizontal: 20,
  },

  detailBox: {
    backgroundColor: "#f7f7f7",
    padding: 15,
    borderRadius: 14,
    width: "31%",
    alignItems: "center",
  },

  detailValue: {
    fontWeight: "700",
    fontSize: 16,
  },

  detailLabel: {
    color: "#666",
    marginTop: 4,
  },

  otpCard: {
    marginTop: 30,
    marginHorizontal: 20,
    backgroundColor: "#000",
    padding: 25,
    borderRadius: 18,
    alignItems: "center",
  },

  otpTitle: {
    color: "#aaa",
  },

  otp: {
    color: "#BBFF5B",
    fontSize: 40,
    fontWeight: "bold",
    marginVertical: 8,
  },

  otpNote: {
    color: "#fff",
    textAlign: "center",
  },
});