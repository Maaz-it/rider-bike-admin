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
                Animated.spring(sideAnimation,{
                    toValue: height * 0.35,
                    useNativeDriver: true
                })
            ]).start()
        }else{
            Animated.parallel([
                Animated.timing(sideAnimation,{
                    toValue: height,
                    duration: 350,
                    useNativeDriver: true
                }),
                Animated.timing(backdrop,{
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: true
                })
            ]).start()
        }

    },[visilb]);

    return(
        <Modal transparent visible={visilb} animationType="none">
<View style={{flex: 1}}>
<TouchableWithoutFeedback onPress={onClose}>
    <Animated.View 
     style={[styles.backdrop, { opacity: backdrop }]}
    />
</TouchableWithoutFeedback>

<Animated.View
style={[styles.container , {transform:[{translateY: sideAnimation}]}]}
>
    <View style={styles.handle} />
    {children}
</Animated.View>
</View>
        </Modal>
    )
}

export default BottomPop


const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "space-between",
  },

  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.65)",
  },

  container: {
    height: height * 0.65,
    backgroundColor: "#1E1E1E",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 22,
  },

  handle: {
    width: 70,
    height: 6,
    backgroundColor: "#444",
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 25,
  },

  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
  },

  vehicleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  vehicleCard: {
    backgroundColor: "#2C2C2C",
    width: "48%",
    padding: 18,
    borderRadius: 18,
    alignItems: "center",
  },

  selected: {
    borderWidth: 2,
    borderColor: "#00c853",
  },

  vehicleIcon: {
    fontSize: 32,
  },

  vehicleName: {
    color: "#fff",
    marginTop: 6,
    fontWeight: "600",
  },

  vehiclePrice: {
    color: "#00c853",
    marginTop: 4,
    fontWeight: "700",
  },

  priceBox: {
    marginTop: 25,
    backgroundColor: "#2C2C2C",
    padding: 20,
    borderRadius: 18,
  },

  priceTitle: {
    color: "#aaa",
    fontSize: 14,
  },

  price: {
    color: "#00c853",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 10,
  },

  confirmButton: {
    backgroundColor: "#00c853",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 10,
  },

  confirmText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});