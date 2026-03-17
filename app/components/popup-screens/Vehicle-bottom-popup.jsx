import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { useRouter } from "expo-router";

const { height } = Dimensions.get("window");

const BottomPopup = ({ visible, onClose }) => {
  // const navigation = useNavigation();

  const router = useRouter();

  const slideAnim = useRef(new Animated.Value(height)).current;
  const backdropOpacity = useRef(new Animated.Value(0)).current;
  const priceAnim = useRef(new Animated.Value(0)).current;

  const [selectedVehicle, setSelectedVehicle] = useState(null);

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.spring(slideAnim, {
          toValue: height * 0.35,
          useNativeDriver: true,
        }),
        Animated.timing(backdropOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      setSelectedVehicle(null);
      priceAnim.setValue(0);

      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: height,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(backdropOpacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible]);

  const selectVehicle = (type) => {
    setSelectedVehicle(type);

    Animated.spring(priceAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const getPrice = () => {
    if (selectedVehicle === "Scooty") return 99;
    if (selectedVehicle === "Bike") return 149;
    return 0;
  };

  return (
    <Modal transparent visible={visible} animationType="none">
      <View style={styles.root}>
        {/* BACKDROP */}
        <TouchableWithoutFeedback onPress={onClose}>
          <Animated.View
            style={[styles.backdrop, { opacity: backdropOpacity }]}
          />
        </TouchableWithoutFeedback>

        {/* BOTTOM SHEET */}
        <Animated.View
          style={[styles.container, { transform: [{ translateY: slideAnim }] }]}
        >
          <View style={styles.handle} />

          <Text style={styles.title}>Choose Your Ride</Text>

          <View style={styles.vehicleRow}>
            <TouchableOpacity
              style={[
                styles.vehicleCard,
                selectedVehicle === "Scooty" && styles.selected,
              ]}
              onPress={() => selectVehicle("Scooty")}
            >
              <Text style={styles.vehicleIcon}>🛵</Text>
              <Text style={styles.vehicleName}>Scooty</Text>
              <Text style={styles.vehiclePrice}>₹99</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.vehicleCard,
                selectedVehicle === "Bike" && styles.selected,
              ]}
              onPress={() => selectVehicle("Bike")}
            >
              <Text style={styles.vehicleIcon}>🏍</Text>
              <Text style={styles.vehicleName}>Bike</Text>
              <Text style={styles.vehiclePrice}>₹149</Text>
            </TouchableOpacity>
          </View>

          {selectedVehicle && (
            <Animated.View
              style={[
                styles.priceBox,
                {
                  opacity: priceAnim,
                  transform: [
                    {
                      translateY: priceAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [30, 0],
                      }),
                    },
                  ],
                },
              ]}
            >
              <Text style={styles.priceTitle}>Estimated Price</Text>
              <Text style={styles.price}>₹ {getPrice()}</Text>

              <TouchableOpacity
                onPress={() => {
                  onClose();
                  router.push("/components/popup-screens/Riderloading");
                  console.log("cli8kdex");
                  // navigation.navigate("/loadingRider");
                }}
                style={styles.confirmButton}
              >
                <Text style={styles.confirmText}>Confirm Ride</Text>
              </TouchableOpacity>
            </Animated.View>
          )}
        </Animated.View>
      </View>
    </Modal>
  );
};

export default BottomPopup;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "space-between",
  },

  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.65)",
  },

  container: {
    height: height * 0.65,
    backgroundColor: "#1E1E1E",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 22,
  },

  handle: {
    width: 70,
    height: 6,
    backgroundColor: "#444",
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 25,
  },

  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
  },

  vehicleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  vehicleCard: {
    backgroundColor: "#2C2C2C",
    width: "48%",
    padding: 18,
    borderRadius: 18,
    alignItems: "center",
  },

  selected: {
    borderWidth: 2,
    borderColor: "#00c853",
  },

  vehicleIcon: {
    fontSize: 32,
  },

  vehicleName: {
    color: "#fff",
    marginTop: 6,
    fontWeight: "600",
  },

  vehiclePrice: {
    color: "#00c853",
    marginTop: 4,
    fontWeight: "700",
  },

  priceBox: {
    marginTop: 25,
    backgroundColor: "#2C2C2C",
    padding: 20,
    borderRadius: 18,
  },

  priceTitle: {
    color: "#aaa",
    fontSize: 14,
  },

  price: {
    color: "#00c853",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 10,
  },

  confirmButton: {
    backgroundColor: "#00c853",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 10,
  },

  confirmText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
