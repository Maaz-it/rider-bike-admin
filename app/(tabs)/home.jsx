import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MapView, { Marker } from "react-native-maps";

import polyline from "@mapbox/polyline";

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
import { Polyline as MapPolyline } from "react-native-maps";

const { width } = Dimensions.get("window");

const Home = () => {
  const mapRef = useRef(null);

  const [from, setForm] = useState(null);
  const [to, setTo] = useState(null);

  const [routesCoords, setRoutesCoords] = useState([]);

  useEffect(() => {
    if (routesCoords.length > 0 && mapRef.current) {
      mapRef.current.fitToCoordinates(routesCoords, {
        edgePadding: { top: 100, right: 50, bottom: 100, left: 500 },
        animated: true,
      });
    }
  }, [routesCoords]);

  useEffect(() => {
    if (from && to) {
      getRoutes();
    }
  }, [from, to]);

  const getRoutes = async () => {
    if (!from || !to) return;

    try {
      const res = await fetch(
        `https://router.project-osrm.org/route/v1/driving/${from.lng},${from.lat};${to.lng},${to.lat}?overview=full&geometries=polyline`,
      );

      const data = await res.json();

      // 🧠 check if route exists
      if (!data.routes || data.routes.length === 0) {
        console.log("No routes found", data);
        return;
      }

      const points = polyline.decode(data.routes[0].geometry);

      const coords = points.map((point) => ({
        latitude: point[0],
        longitude: point[1],
      }));

      console.log("ROUTE COORDS:", coords.length); // debug

      setRoutesCoords(coords);
    } catch (err) {
      console.log("Route error:", err);
    }
  };

  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) return null;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good evening 👋</Text>
            <Text style={styles.subtitle}>Where are we going today?</Text>
          </View>

          {/* <Usericon /> */}
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
            // initialRegion={{
            //   latitude: 19.076,
            //   longitude: 72.8777,
            //   latitudeDelta: 0.05,
            //   longitudeDelta: 0.05,
            // }}
          >
            {/* {from && to && (
              <MapViewDirections
                origin={{
                  latitude: from.lat,
                  longitude: from.lng,
                }}
                destination={{
                  latitude: to.lat,
                  longitude: to.lng,
                }}
                apikey="AIzaSyBKrK9maTXeNBkJHYN2_ZxAuBTEU4JHkB"
                strokeWidth={4}
                strokeColor="blue"
              />
            )} */}

            {routesCoords.length > 0 && (
              <MapPolyline
                coordinates={routesCoords}
                strokeWidth={6}
                strokeColor="blue"
                zIndex={10}
              />
            )}

            {/* from marker  */}
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


{/* Recent rider section  */}
<View style={styles.section}>
<Text  style={styles.sectionTitle}>Recent Rides</Text>

<ScrollView horizontal showsVerticalScrollIndicator={false}>
  {[
     { title: "Bandra → Andheri", sub: "12 km • Yesterday" },
              { title: "Dadar → Colaba", sub: "9 km • 2 days ago" },
              { title: "Powai → BKC", sub: "15 km • Last week" },
              { title: "Thane → Vashi", sub: "18 km • 3 days ago" },
  ].map((ride , ind)=>(
    <View key={ind} style={styles.rideCard} >
      <Text style={styles.rideTitle}>{ride.title}</Text>
      <Text style={styles.rideSub}>{ride.sub}</Text>
    </View>
))}
</ScrollView>

</View>

{/* popular destination  */}
<View style={styles.section}>
<Text style={styles.sectionTitle}>Popular Destination</Text>

<ScrollView horizontal showsHorizontalScrollIndicator={false}>
{["Airport ✈️", "Mall 🛍️", "Office 🏢", "Beach 🌊"].map((item , ind)=>(
  <View key={ind} style={styles.destCard}>
<Text style={styles.destCard}>{item}</Text>
  </View>
))}
</ScrollView>
</View>

 {/* BLOG / TIPS SECTION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Travel Tips & Updates</Text>

          <View style={styles.blogCard}>
            <Text style={styles.blogTitle}>
              🚦 Best Time to Travel in Mumbai
            </Text>
            <Text style={styles.blogText}>
              Avoid peak traffic between 6–9 PM. Early morning rides are faster
              and cheaper.
            </Text>
          </View>

          <View style={styles.blogCard}>
            <Text style={styles.blogTitle}>
              💡 Save More on Rides
            </Text>
            <Text style={styles.blogText}>
              Book rides during off-peak hours to get lower fares and quicker
              pickups.
            </Text>
          </View>

          <View style={styles.blogCard}>
            <Text style={styles.blogTitle}>
              🛡️ Safety First
            </Text>
            <Text style={styles.blogText}>
              Always verify driver details and share your trip with family for
              safety.
            </Text>
          </View>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 10,
  },

  greeting: {
    fontSize: 24,
    fontFamily: "Poppins_700Bold",
    color: "#111827",
    letterSpacing: 0.3,
  },

  subtitle: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    color: "#6B7280",
    marginTop: 4,
  },

  searchCard: {
    backgroundColor: "#fff",
    margin: 16,
    padding: 18,
    borderRadius: 20,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
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
section:{
    marginTop: 20,
    paddingLeft: 16,
  },

  sectionTitle: {
    fontSize: 20,
    fontFamily: "Poppins_600SemiBold",
    marginBottom: 10,
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

  destCard: {
    backgroundColor: "#fff",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 16,
    marginRight: 10,
  },

  destText: {
    fontSize: 16,
    fontFamily: "Inter_500Medium",
  },

  blogCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 18,
    marginBottom: 12,
    marginRight: 16,
  },

  blogTitle: {
    fontSize: 16,
    fontFamily: "Inter_600SemiBold",
    marginBottom: 6,
  },

  blogText: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    color: "#6B7280",
  },
});