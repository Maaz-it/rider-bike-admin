import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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
import { useRouter } from "expo-router";

const Profile = () => {

  const router = useRouter()


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
          <Text style={styles.title}>Admin Profile</Text>
        </View>

        {/* ADMIN CARD */}
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>RM</Text>
          </View>

          <Text style={styles.name}>Raj Motors</Text>
          <Text style={styles.role}>Owner: Raj Sharma</Text>
          <Text style={styles.phone}>+91 98765 43210</Text>
          <Text style={styles.location}>Andheri West, Mumbai</Text>
        </View>

        {/* BUSINESS STATS */}
        <View style={styles.statsCard}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>120</Text>
            <Text style={styles.statLabel}>Total Bikes</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statNumber}>82</Text>
            <Text style={styles.statLabel}>Delivered</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statNumber}>38</Text>
            <Text style={styles.statLabel}>Pending</Text>
          </View>
        </View>

        {/* MANAGEMENT */}
        <Text style={styles.sectionTitle}>Management</Text>

        <View style={styles.card}>
        <Option 
    label="Manage Inventory" 
    onPress={() => {
      console.log("Navigating to Inventory...");
      router.push("/management/management_inventry");
    }} 
  />
          <Divider />
          <Option label="Delivery Records" />
          <Divider />
          <Option label="Drivers / Staff" />
          <Divider />
          <Option label="Godown Locations" />
        </View>

        {/* SETTINGS */}
        <Text style={styles.sectionTitle}>Settings</Text>

        <View style={styles.card}>
          <Option label="Notifications" />
          <Divider />
          <Option label="Account Settings" />
          <Divider />
          <Option label="Help & Support" />
        </View>

        {/* LOGOUT */}
        <TouchableOpacity style={styles.logout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

/* OPTION COMPONENT */

/* OPTION COMPONENT */
// Add 'onPress' inside these curly braces below!
const Option = ({ label, onPress }) => ( 
  <TouchableOpacity 
    style={styles.option} 
    onPress={onPress} 
    activeOpacity={0.7}
  >
    <Text style={styles.optionText}>{label}</Text>
    <Text style={styles.chevron}>›</Text>
  </TouchableOpacity>
);

const Divider = () => <View style={styles.divider} />;

/* STYLES */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
  },

  header: {
    paddingHorizontal: 20,
    marginTop: 10,
  },

  title: {
    fontSize: 24,
    fontFamily: "Poppins_700Bold",
    color: "#111827",
  },

  profileCard: {
    backgroundColor: "#fff",
    margin: 16,
    borderRadius: 20,
    padding: 24,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 4,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#E5E7EB",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  avatarText: {
    fontSize: 22,
    fontFamily: "Poppins_600SemiBold",
    color: "#111827",
  },

  name: {
    fontSize: 20,
    fontFamily: "Poppins_600SemiBold",
    color: "#111827",
  },

  role: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    color: "#6B7280",
    marginTop: 4,
  },

  phone: {
    fontSize: 14,
    fontFamily: "Inter_500Medium",
    color: "#374151",
    marginTop: 4,
  },

  location: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 4,
    fontFamily: "Inter_400Regular",
  },

  statsCard: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderRadius: 20,
    paddingVertical: 20,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 4,
  },

  stat: {
    alignItems: "center",
  },

  statNumber: {
    fontSize: 20,
    fontFamily: "Poppins_600SemiBold",
    color: "#111827",
  },

  statLabel: {
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    color: "#6B7280",
    marginTop: 4,
  },

  sectionTitle: {
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
    color: "#111827",
    marginLeft: 16,
    marginTop: 24,
    marginBottom: 10,
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderRadius: 18,
    elevation: 3,
  },

  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 18,
  },

  optionText: {
    fontSize: 15,
    fontFamily: "Inter_500Medium",
    color: "#1A1A1A",
  },

  chevron: {
    fontSize: 20,
    color: "#9CA3AF",
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginHorizontal: 16,
  },

  logout: {
    backgroundColor: "#EF4444",
    margin: 20,
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
  },

  logoutText: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "Inter_600SemiBold",
  },
});