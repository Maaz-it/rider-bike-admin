import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Inputfield from "../components/inputfield";

import { signupApi } from "../../src/api/auth.api";
import Mainbutton from "../components/mainbutton";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [number, setNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        firstName,
        lastName,
        email,
        password,
        phone: String(number),
        userName,
      };

      const response = await signupApi(payload);
      console.log("Signup successful:", response.data);
      setLoading(false);
      navigation.navigate("Otpscreen");
    } catch (error) {
      setLoading(false);

      console.log("FULL ERROR:", error);
      console.log("BACKEND ERROR:", error?.response?.data);

      alert(error?.response?.data?.message || error.message || "Signup failed");
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.container}>
            <TouchableOpacity style={styles.backBtn}>
              <Ionicons name="chevron-back" size={24} color="#000" />
            </TouchableOpacity>

            <Text style={styles.title}>Signup</Text>
            <Text style={styles.subtitle}>Please signup</Text>

            <Inputfield
              label="Phone Number"
              placeholder="Phone number"
              value={number}
              onChangeText={setNumber}
              keyboardType="phone-pad"
            />

            <Inputfield
              label="First Name"
              placeholder="Enter first name"
              value={firstName}
              onChangeText={setFirstName}
            />

            <Inputfield
              label="Last Name"
              placeholder="Enter last name"
              value={lastName}
              onChangeText={setLastName}
            />

            <Inputfield
              label="Username"
              placeholder="Enter username"
              value={userName}
              onChangeText={setUserName}
            />

            <Inputfield
              label="Email"
              placeholder="Enter email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            <Inputfield
              label="Password"
              placeholder="Enter password"
              value={password}
              onChangeText={setPassword}
              secure
            />

            <Inputfield
              label="Confirm Password"
              placeholder="Re-enter password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secure
            />

            {/* <Button
              onPress={handleSubmit}
              content={loading ? "Signing up..." : "Sign up"}
              // onPress={() => navigation.navigate("Otpscreen")}
            /> */}

            <Mainbutton
              content="Sign up"
              onPress={() => navigation.navigate("Otpscreen")}
            />

            <Text style={styles.orText}>or</Text>

            <View style={styles.signupRow}>
              <Text style={styles.signupText}>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("login")}>
                <Text style={styles.signupLink}> Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  backBtn: {
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#000",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#777",
    marginBottom: 16,
  },
  orText: {
    textAlign: "center",
    color: "#777",
    marginVertical: 16,
  },
  signupRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signupText: {
    color: "#777",
    fontSize: 14,
  },
  signupLink: {
    color: "#000",
    fontSize: 14,
    fontWeight: "600",
  },
});
