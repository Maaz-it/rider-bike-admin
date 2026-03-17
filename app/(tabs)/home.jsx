import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import FromToInput from "../components/FromToInput";

import {
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import { useEffect, useRef, useState } from "react";

import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

const { width } = Dimensions.get("window");

const GOOGLE_API_KEY = "YOUR_WORKING_API_KEY"; // 🔥 replace this

const Home = () => {
  const mapRef = useRef(null);

  const [from, setForm] = useState(null);
  const [to, setTo] = useState(null);

  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  // 🔥 AUTO ZOOM when both selected
  useEffect(() => {
    if (from && to && mapRef.current) {
      mapRef.current.fitToCoordinates(
        [
          { latitude: from.lat, longitude: from.lng },
          { latitude: to.lat, longitude: to.lng },
        ],
        {
          edgePadding: { top: 100, right: 50, bottom: 100, left: 50 },
          animated: true,
        },
      );
    }
  }, [from, to]);

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled">
        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good evening 👋</Text>
            <Text style={styles.subtitle}>Where are we going today?</Text>
          </View>
        </View>

        {/* SEARCH */}
        <View style={styles.searchCard}>
          <FromToInput setForm={setForm} setTo={setTo} />
        </View>

        {/* MAP */}
        <View style={styles.mapWrapper}>
          <MapView
            ref={mapRef}
            style={styles.map}
            initialRegion={{
              latitude: 19.076,
              longitude: 72.8777,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}
          >
            {/* 🚗 ROUTE */}
            {from && to && (
              <MapViewDirections
                origin={{
                  latitude: from.lat,
                  longitude: from.lng,
                }}
                destination={{
                  latitude: to.lat,
                  longitude: to.lng,
                }}
                apikey={GOOGLE_API_KEY}
                strokeWidth={5}
                strokeColor="blue"
                onReady={(result) => {
                  console.log("Distance:", result.distance, "km");
                  console.log("Duration:", result.duration, "min");
                }}
              />
            )}

            {/* FROM */}
            {from && (
              <Marker
                coordinate={{
                  latitude: from.lat,
                  longitude: from.lng,
                }}
                title="Start"
                pinColor="green"
              />
            )}

            {/* TO */}
            {to && (
              <Marker
                coordinate={{
                  latitude: to.lat,
                  longitude: to.lng,
                }}
                title="End"
                pinColor="red"
              />
            )}
          </MapView>
        </View>

        {/* EXTRA UI */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Rides</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.rideCard}>
              <Text style={styles.rideTitle}>Bandra → Andheri</Text>
              <Text style={styles.rideSub}>12 km • Yesterday</Text>
            </View>
          </ScrollView>
        </View>

        <View style={{ height: 50 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
  },

  header: {
    paddingHorizontal: 20,
    marginTop: 10,
  },

  greeting: {
    fontSize: 24,
    fontFamily: "Poppins_700Bold",
  },

  subtitle: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    color: "#6B7280",
  },

  searchCard: {
    backgroundColor: "#fff",
    margin: 16,
    padding: 18,
    borderRadius: 20,
  },

  mapWrapper: {
    height: 350,
    marginHorizontal: 16,
    borderRadius: 20,
    overflow: "hidden",
  },

  map: {
    flex: 1,
  },

  section: {
    marginTop: 20,
    paddingLeft: 16,
  },

  sectionTitle: {
    fontSize: 20,
    fontFamily: "Poppins_600SemiBold",
  },

  rideCard: {
    width: width * 0.65,
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 18,
    marginRight: 12,
  },

  rideTitle: {
    fontSize: 18,
    fontFamily: "Inter_600SemiBold",
  },

  rideSub: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    color: "#6B7280",
  },
});
