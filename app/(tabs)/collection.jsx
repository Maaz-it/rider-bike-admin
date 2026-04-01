import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const bikes = [
  {
    id: "1",
    model: "Yamaha R15",
    chassis: "CHS2345678",
    color: "Blue",
    showroom: "Andheri Showroom",
    status: "In Transit",
  },
  {
    id: "2",
    model: "Royal Enfield Classic 350",
    chassis: "CHS9876543",
    color: "Black",
    showroom: "Bandra Showroom",
    status: "Delivered",
  },
  {
    id: "3",
    model: "KTM Duke 200",
    chassis: "CHS4567890",
    color: "Orange",
    showroom: "Thane Showroom",
    status: "Pending",
  },
  {
    id: "4",
    model: "KTM Duke 200",
    chassis: "CHS4567890",
    color: "Orange",
    showroom: "Thane Showroom",
    status: "Pending",
  },
  {
    id: "5",
    model: "ninja Duke 300",
    chassis: "CHS4567890",
    color: "Orange",
    showroom: "Thane Showroom",
    status: "Pending",
  },
];

const getStatusColor = (status) => {
  if (status === "Delivered") return "#2ecc71";
  if (status === "In Transit") return "#3498db";
  if (status === "Pending") return "#f39c12";
  return "#999";
};

const Collection = () => {
  const [search, setSearch] = useState("");

  const filteredBikes = bikes.filter((bike) =>
    bike.model.toLowerCase().includes(search.toLowerCase())
  );

  const renderBike = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.model}>{item.model}</Text>

        <View
          style={[
            styles.statusBadge,
            { backgroundColor: getStatusColor(item.status) },
          ]}
        >
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.row}>
        <Text style={styles.label}>Chassis</Text>
        <Text style={styles.value}>{item.chassis}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Color</Text>
        <Text style={styles.value}>{item.color}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Showroom</Text>
        <Text style={styles.value}>{item.showroom}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bike Collection</Text>

      <TextInput
        placeholder="Search by bike model..."
        value={search}
        onChangeText={setSearch}
        style={styles.search}
      />

      <FlatList
        data={filteredBikes}
        keyExtractor={(item) => item.id}
        renderItem={renderBike}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Collection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f4f7",
    padding: 16,
    marginTop: 40,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 15,
  },

  search: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
    marginBottom: 18,
    elevation: 2,
  },

  card: {
    backgroundColor: "white",
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    elevation: 3,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  model: {
    fontSize: 18,
    fontWeight: "700",
  },

  statusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
  },

  statusText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },

  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 12,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },

  label: {
    color: "#666",
    fontSize: 14,
  },

  value: {
    fontWeight: "600",
  },
});