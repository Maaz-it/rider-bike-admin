import { useRef, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import Button from "./button";
import BottomPopup from "./popup-screens/Vehicle-bottom-popup";

const FromToInput = ({ setTo, setForm }) => {
  const [fromText, setFromText] = useState("");
  const [toText, setToText] = useState("");

  const [fromResults, setFromResults] = useState([]);
  const [toResults, setToResults] = useState([]);

  const [selectedFrom, setSelectedFrom] = useState(null);
  const [selectedTo, setSelectedTo] = useState(null);

  const [showPopup, setShowPopup] = useState(false);

  const timeout = useRef(null);

  const GOOGLE_API_KEY = "AIzaSyBKrK9maTXeNBkJHYN2_ZxAuBTEU4JHkBc";

  const showButton = selectedFrom && selectedTo;

  // 🔍 SEARCH FUNCTION
  const searchPlace = (text, setResults) => {
    clearTimeout(timeout.current);

    timeout.current = setTimeout(async () => {
      if (text.length < 3) return;

      try {
        const query = encodeURIComponent(text);

        const res = await fetch(
          `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&key=${GOOGLE_API_KEY}&components=country:in`,
        );

        const data = await res.json();

        setResults(data.predictions || []);
      } catch (err) {
        console.log("Search error:", err);
      }
    }, 400);
  };

  // 📍 GET LAT LNG
  const getPlaceDetails = async (placeId) => {
    try {
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${GOOGLE_API_KEY}`,
      );

      const data = await res.json();

      return data.result.geometry.location;
    } catch (err) {
      console.log("Details error:", err);
    }
  };

  // 🟢 SELECT FROM
  const handleSelectFrom = async (item) => {
    setFromText(item.description);
    setFromResults([]);

    const coords = await getPlaceDetails(item.place_id);

    setSelectedFrom(coords);
    setForm(coords); // send to parent if needed
  };

  // 🔵 SELECT TO
  const handleSelectTo = async (item) => {
    setToText(item.description);
    setToResults([]);

    const coords = await getPlaceDetails(item.place_id);

    setSelectedTo(coords);
    setTo(coords); // send to parent if needed
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        {/* FROM INPUT */}
        <TextInput
          style={styles.input}
          value={fromText}
          placeholder="From"
          onChangeText={(text) => {
            setFromText(text);
            searchPlace(text, setFromResults);
          }}
        />

        <FlatList
          data={fromResults}
          keyExtractor={(item) => item.place_id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelectFrom(item)}>
              <Text style={styles.item}>{item.description}</Text>
            </TouchableOpacity>
          )}
        />

        <View style={styles.divider} />

        {/* TO INPUT */}
        <TextInput
          style={styles.input}
          value={toText}
          placeholder="To"
          onChangeText={(text) => {
            setToText(text);
            searchPlace(text, setToResults);
          }}
        />

        <FlatList
          data={toResults}
          keyExtractor={(item) => item.place_id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelectTo(item)}>
              <Text style={styles.item}>{item.description}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* BUTTON */}
      <View style={styles.button}>
        {showButton && (
          <Button content="GO" onPress={() => setShowPopup(true)} />
        )}
      </View>

      {/* POPUP */}
      <BottomPopup
        visible={showPopup}
        onClose={() => setShowPopup(false)}
        from={selectedFrom}
        to={selectedTo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    backgroundColor: "#fafafa",
    borderRadius: 15,
    padding: 10,
  },
  input: {
    height: 45,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 5,
  },
  item: {
    padding: 10,
    backgroundColor: "#eee",
    marginVertical: 2,
    borderRadius: 5,
  },
  button: {
    marginTop: 20,
  },
});

export default FromToInput;
