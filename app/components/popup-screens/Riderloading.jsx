import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useRouter } from "expo-router";
const { height, width } = Dimensions.get("window");


const RiderLoading = () => {
  const slideUp = useRef(new Animated.Value(height)).current;
  const progress = useRef(new Animated.Value(0)).current;
  const bounce = useRef(new Animated.Value(0)).current;
  const glow = useRef(new Animated.Value(0.6)).current;
  const [dots, setDots] = useState(".");

  const navigation = useNavigation();

  const router = useRouter()

  useEffect(() => {
    const timmer = setTimeout(() => {
  router.push("/components/popup-screens/Riderprofile")
}, 8000);  

    return () => {
      clearTimeout(timmer)
    }
  }, [])
  

  useEffect(() => {
  
  

  
    Animated.spring(slideUp, {
      toValue: 0,
      useNativeDriver: true,
    }).start();

    // bike move left to right
    Animated.loop(
      Animated.timing(progress, {
        toValue: width - 100,
        duration: 2000,
        useNativeDriver: true,
      })
    ).start();

    // bike bounce
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounce, {
          toValue: -4,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(bounce, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // green bar glow pulse
    Animated.loop(
      Animated.sequence([
        Animated.timing(glow, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(glow, {
          toValue: 0.6,
          duration: 700,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // loading dots text
    const interval = setInterval(() => {
      setDots((prev) =>
        prev.length >= 5? "." : prev + "."
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateY: slideUp }] },
      ]}
    >
      <View style={styles.handle} />

      <Text style={styles.title}>
        Your rider is getting assigned
      </Text>

      <Animated.View
        style={[styles.barWrapper, { opacity: glow }]}
      >
        <View style={styles.bar}>
          <Animated.Text
            style={[
              styles.bike,
              {
                transform: [
                  { translateX: progress },
                  { translateY: bounce },
                ],
              },
            ]}
          >
            🏍️
          </Animated.Text>
        </View>
      </Animated.View>

      <Text style={styles.sub}>
        Finding nearest delivery partner{dots}
      </Text>
    </Animated.View>
  );
};

export default RiderLoading;
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "70%",
    backgroundColor: "#000", // same dark premium card
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    justifyContent: "center",
  },

  handle: {
    width: 50,
    height: 5,
    backgroundColor: "#666",
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 25,
    color: "#fff",
  },

  barWrapper: {
    backgroundColor: "#1a1a1a",
    padding: 12,
    borderRadius: 20,
  },

  bar: {
    height: 18,
    backgroundColor: "#BBFF5B", // same green theme
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "center",
  },

  bike: {
    position: "absolute",
    fontSize: 24,
  },

  sub: {
    textAlign: "center",
    marginTop: 20,
    color: "#BBFF5B",
    fontSize: 18,
  },
});