import { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";


const height = Dimensions.get("window")

const BottomPop = ({visilb  , onClose , children}) =>{

    const sideAnimation = useRef(new Animated.Value(height)).current
    const backdrop = useRef(new Animated.Value(0)).current


    useEffect(()=>{
        if (visilb) {
            Animated.parallel([
                Animated.spring
            ])
        }

    },[])
}

export default BottomPop