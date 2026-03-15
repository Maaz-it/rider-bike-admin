import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Mainbutton from "../components/mainbutton";

const Login = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const cardTranslate = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const keyboardShow = Keyboard.addListener("keyboardWillShow", () => {
      Animated.timing(cardTranslate, {
        toValue: -100,
        duration: 250,
        useNativeDriver: true,
      }).start();
    });

    const keyboardHide = Keyboard.addListener("keyboardWillHide", () => {
      Animated.timing(cardTranslate, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    });

    return () => {
      keyboardShow.remove();
      keyboardHide.remove();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.iconCircle}>
          <Ionicons name="person-outline" size={38} color="#fff" />
        </View>

        <Text style={styles.welcome}>Welcome Back</Text>
        <Text style={styles.subtitle}>Login to continue riding</Text>
      </View>

      {/* LOGIN CARD */}
      <Animated.View
        style={[
          styles.card,
          {
            transform: [{ translateY: cardTranslate }],
          },
        ]}
      >
        {/* EMAIL */}
        <Text style={styles.label}>Email</Text>

        <View style={styles.inputRow}>
          <Ionicons name="mail-outline" size={18} color="#888" />
          <TextInput
            placeholder="hello@dream.com"
            placeholderTextColor="#aaa"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* PASSWORD */}
        <Text style={styles.label}>Password</Text>

        <View style={styles.inputRow}>
          <Ionicons name="lock-closed-outline" size={18} color="#888" />
          <TextInput
            placeholder="********"
            secureTextEntry
            placeholderTextColor="#aaa"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
          <Ionicons name="eye-outline" size={18} color="#888" />
        </View>

        {/* FORGOT */}
        <TouchableOpacity style={styles.forgot}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* LOGIN BUTTON */}
        <Mainbutton content="Login" onPress={() => router.replace("/home")} />

        {/* SIGNUP */}
        <View style={styles.signupRow}>
          <Text style={styles.signupText}>Don't have an account?</Text>

          <TouchableOpacity onPress={() => navigation.navigate("signup")}>
            <Text style={styles.signupLink}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111827",
  },

  header: {
    height: 260,
    justifyContent: "center",
    alignItems: "center",
  },

  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#6366F1",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },

  welcome: {
    fontSize: 26,
    fontWeight: "700",
    color: "#fff",
  },

  subtitle: {
    color: "#9CA3AF",
    marginTop: 4,
  },

  card: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 26,
  },

  label: {
    fontSize: 13,
    color: "#555",
    marginBottom: 6,
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 50,
    marginBottom: 16,
  },

  input: {
    flex: 1,
    marginLeft: 10,
  },

  forgot: {
    alignItems: "flex-end",
    marginBottom: 25,
  },

  forgotText: {
    fontSize: 12,
    color: "#6366F1",
    fontWeight: "500",
  },

  signupRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },

  signupText: {
    color: "#666",
  },

  signupLink: {
    color: "#6366F1",
    fontWeight: "600",
  },
});
