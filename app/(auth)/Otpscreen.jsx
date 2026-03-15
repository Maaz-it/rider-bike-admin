import { useNavigation, useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { confirmTokenApi } from "../../src/api/auth.api";
import Mainbutton from "../components/mainbutton";

const Otpscreen = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef([]);
  const router = useRouter();
  const navigation = useNavigation();

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text.slice(-1);
    setOtp(newOtp);

    if (text && index < 5) {
      inputRef.current[index + 1].focus();
    }

    if (!text && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };

  const handleSubmit = async () => {
    const token = otp.join("");

    if (token.length !== 6) {
      Alert.alert("Error", "Please enter a valid 6-digit OTP");
      return;
    }

    try {
      setLoading(true);

      const response = await confirmTokenApi(token);

      console.log("Token confirmed successfully:", response.data);

      Alert.alert("Success", "Your account has been verified successfully!");

      router.replace("/home");
    } catch (error) {
      console.log("OTP Error:", error.response?.data || error.message);

      Alert.alert(
        "Verification Failed",
        error.response?.data?.message || "Invalid OTP",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Verify OTP</Text>

        <Text style={styles.subtitle}>
          Enter the 6 digit OTP sent to your email
        </Text>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputRef.current[index] = ref)}
              style={styles.input}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
            />
          ))}
        </View>

        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <Mainbutton
            content="Verify OTP"
            // onPress={handleSubmit} />
            onPress={() => navigation.navigate("Login")}
          />
        )}

        <Text style={styles.resendText}>
          Didn’t receive OTP? <Text style={styles.resendLink}>Resend</Text>
        </Text>
      </View>
    </View>
  );
};

export default Otpscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 25,
    elevation: 4,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: 25,
  },

  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  input: {
    width: 48,
    height: 55,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "600",
    backgroundColor: "#fafafa",
  },

  resendText: {
    textAlign: "center",
    marginTop: 20,
    color: "#777",
  },

  resendLink: {
    color: "#4A6CF7",
    fontWeight: "600",
  },
});
