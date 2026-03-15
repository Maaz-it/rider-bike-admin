import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Button from "./button";
import BottomPopup from "./Vehicle-bottom-popup";
export const FromToInput = () => {
  const [from, setForm] = useState("");
  const [to, setTO] = useState("");

  const [showpopup, setShowpop] = useState(false);

  const showButton = from.trim() !== "" && to.trim() !== "";

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <TextInput
          style={styles.input}
          value={from}
          onChangeText={setForm}
          placeholder="From (Home) "
        />
        <View style={styles.divider}>
          <TextInput
            style={styles.input}
            value={to}
            onChangeText={setTO}
            placeholder="TO (New York Usa)"
          />
        </View>
      </View>
      <View style={styles.butn}>
        {showButton && <Button content="GO" onPress={() => setShowpop(true)} />}
      </View>

      <BottomPopup visible={showpopup} onClose={() => setShowpop(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
  },
  main: {
    backgroundColor: "#fafafa",
    height: 100,
    borderRadius: 15,
  },
  butn: {
    marginTop: 20,
  },
  input: {
    height: 45,
    color: "#524848",
    fontSize: 16,
    alignItems: "center",
    padding: 10,
  },

  divider: {
    height: 1,
    backgroundColor: "#3c2e2e",
    marginVertical: 5,
  },
});

// export default FromToInput;
