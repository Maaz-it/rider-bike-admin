import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Collections = () => {
  return (
    <View style={styles.container}>
      <Text>Cllections</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default Collections;
