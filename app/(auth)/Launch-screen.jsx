import { useRouter } from "expo-router";
import { AnimatePresence, MotiImage } from "moti";
import { useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from "react-native";
import Mainbutton from "../components/mainbutton";

const { width, height } = Dimensions.get("window");

const BIKE_IMAGES = [
  // require("../../assets/bike-1.png"),
  // require("../../assets/bike-2.png"),
  // require("../../assets/bike-3.webp"),
];

const BIKE_POSITIONS = [
  {
    top: -10,
    left: -width * 0.4,
    width: width * 1.8,
  },
  {
    top: -60,
    left: -width * 0.38,
    width: width * 1.75,
  },
  {
    top: 10,
    left: -width * 0.42,
    width: width * 1.85,
  },
];

export default function OnboardingSplash() {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    if (currentStep < BIKE_IMAGES.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      router.replace("/(auth)/login");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* TITLE */}
        <View style={styles.header}>
          <Text style={styles.title}>A TIMELESS</Text>
          <Text style={styles.title}>CLASSIC</Text>
        </View>

        {/* BIKE IMAGE (NO BOX) */}
        <AnimatePresence exitBeforeEnter>
          <MotiImage
            key={currentStep}
            source={BIKE_IMAGES[currentStep]}
            resizeMode="contain"
            style={[styles.bike, BIKE_POSITIONS[currentStep]]}
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: "timing",
              duration: 350,
            }}
          />
        </AnimatePresence>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.description}>
            The Vespa crossed the streets with the{"\n"}
            same agility and dynamism to date
          </Text>

          <View style={styles.dotContainer}>
            {BIKE_IMAGES.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  currentStep === index ? styles.activeDot : styles.inactiveDot,
                ]}
              />
            ))}
          </View>

          <Mainbutton content="Next" onPress={handleNext} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    flex: 1,
  },

  header: {
    position: "absolute",
    top: 80,
    right: 25,
    alignItems: "flex-end",
    zIndex: 1,
  },

  title: {
    fontSize: 48,
    zIndex: 1000,
    fontWeight: "900",
    color: "#1A1A1A",
    lineHeight: 50,
  },

  /* FLOATING BIKE */
  bike: {
    // position: "absolute",
    // top: -50,
    // left: -width * 0.4,
    // width: width * 1.8,
    // height: height * 0.45,
    // zIndex: 10,
  },

  footer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 40,
  },

  description: {
    fontSize: 16,
    color: "#444",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 22,
    fontWeight: "500",
  },

  dotContainer: {
    flexDirection: "row",
    marginBottom: 30,
  },

  dot: {
    height: 6,
    borderRadius: 3,
    marginHorizontal: 4,
  },

  activeDot: {
    width: 22,
    backgroundColor: "#1A1A1A",
  },

  inactiveDot: {
    width: 10,
    backgroundColor: "rgba(0,0,0,0.25)",
  },
});
