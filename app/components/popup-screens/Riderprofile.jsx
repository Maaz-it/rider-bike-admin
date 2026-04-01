import React from "react";
import {
    Image,
    StyleSheet,
    Text,
    View,
} from "react-native";

const RiderProfile = () => {
  return (
    <View style={styles.container}>

      {/* TOP STATUS CARD */}
      <View style={styles.statusCard}>
        <Text style={styles.statusTitle}>Rider is on the way 🚴</Text>

        <View style={styles.row}>
          <View style={styles.infoBox}>
            <Text style={styles.infoValue}>1.2 km</Text>
            <Text style={styles.infoLabel}>Away</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.infoValue}>4 min</Text>
            <Text style={styles.infoLabel}>ETA</Text>
          </View>
        </View>
      </View>

      {/* RIDER CARD */}
      <View style={styles.riderCard}>
        <Image
          source={{
            uri: "https://i.pravatar.cc/150?img=12",
          }}
          style={styles.avatar}
        />

        <View style={{ marginLeft: 15 }}>
          <Text style={styles.riderName}>Rahul Sharma</Text>
          <Text style={styles.rating}>⭐ 4.8</Text>
          <Text style={styles.vehicle}>🏍️ Honda Activa</Text>
          <Text style={styles.number}>MH12 AB 1234</Text>
        </View>
      </View>

      {/* OTP BOX */}
      <View style={styles.otpCard}>
        <Text style={styles.otpLabel}>Rider OTP</Text>
        <Text style={styles.otp}>4521</Text>
        <Text style={styles.otpNote}>
          Please provide this OTP to the rider
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
    padding: 20,
  },

  statusCard: {
    backgroundColor: "#BBFF5B",
    padding: 20,
    borderRadius: 20,
  },

  statusTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 15,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  infoBox: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    width: "48%",
    alignItems: "center",
  },

  infoValue: {
    fontSize: 20,
    fontWeight: "700",
  },

  infoLabel: {
    color: "#666",
  },

  riderCard: {
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 20,
    marginTop: 20,
    alignItems: "center",
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  riderName: {
    fontSize: 16,
    fontWeight: "700",
  },

  rating: {
    marginTop: 3,
  },

  vehicle: {
    marginTop: 3,
    color: "#333",
  },

  number: {
    marginTop: 3,
    color: "#666",
  },

  otpCard: {
    marginTop: 25,
    backgroundColor: "#000",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
  },

  otpLabel: {
    color: "#aaa",
  },

  otp: {
    fontSize: 36,
    color: "#BBFF5B",
    fontWeight: "bold",
    marginVertical: 10,
  },

  otpNote: {
    color: "#fff",
    textAlign: "center",
  },
});