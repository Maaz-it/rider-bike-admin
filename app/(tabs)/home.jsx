import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MapView from "react-native-maps";
import { FromToInput } from "../components/FromToInput";

import {
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";

import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

const { width } = Dimensions.get("window");

const Home = () => {
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
      <ScrollView showsVerticalScrollIndicator={false}>
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
          <FromToInput />
        </View>

        {/* MAP */}
        <View style={styles.mapWrapper}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 19.076,
              longitude: 72.8777,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}
          />
        </View>

        {/* RECENT RIDES */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Rides</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.rideCard}>
              <Text style={styles.rideTitle}>Bandra → Andheri</Text>
              <Text style={styles.rideSub}>12 km • Yesterday</Text>
            </View>

            <View style={styles.rideCard}>
              <Text style={styles.rideTitle}>Dadar → Colaba</Text>
              <Text style={styles.rideSub}>9 km • 2 days ago</Text>
            </View>

            <View style={styles.rideCard}>
              <Text style={styles.rideTitle}>Kurla → BKC</Text>
              <Text style={styles.rideSub}>6 km • 3 days ago</Text>
            </View>
          </ScrollView>
        </View>

        {/* BLOG */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ride Tips</Text>

          <View style={styles.blogCard}>
            <View style={styles.blogImage} />
            <View style={styles.blogContent}>
              <Text style={styles.blogTitle}>Ride Safely in City Traffic</Text>
              <Text style={styles.blogText}>
                Learn techniques to avoid common traffic dangers.
              </Text>
            </View>
          </View>

          <View style={styles.blogCard}>
            <View style={styles.blogImage} />
            <View style={styles.blogContent}>
              <Text style={styles.blogTitle}>Weekly Bike Maintenance</Text>
              <Text style={styles.blogText}>
                Simple habits that keep your bike running smoothly.
              </Text>
            </View>
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

  section: {
    marginTop: 20,
    paddingLeft: 16,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Poppins_600SemiBold",
    color: "#1A1A1A",
    marginBottom: 12,
  },

  rideCard: {
    width: width * 0.65,
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 18,
    marginRight: 12,

    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },

  rideTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1A1A1A",
    fontFamily: "Inter_600SemiBold",
  },

  rideSub: {
    marginTop: 4,
    fontFamily: "Inter_400Regular",
    color: "#6B7280",
    fontSize: 14,
  },

  blogCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 18,
    marginRight: 16,
    marginBottom: 14,
    overflow: "hidden",

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },

  blogImage: {
    width: 90,
    backgroundColor: "#E2E8F0",
  },

  blogContent: {
    flex: 1,
    padding: 14,
  },

  blogTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1A1A1A",
    fontFamily: "Inter_600SemiBold",
  },

  blogText: {
    marginTop: 4,
    fontSize: 13,
    color: "#6B7280",
    fontFamily: "Inter_400Regular",
  },
});
