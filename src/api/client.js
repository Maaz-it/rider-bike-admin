

import axios from "axios"



import AsyncStorage from "@react-native-async-storage/async-storage";





const api = axios.create({
    baseURL: "https://atmospheric-unremarked-elvie.ngrok-free.dev",
})




api.interceptors.request.use(async (config)=>{
    const token = await AsyncStorage.getItem("token");




    if (!config.headers) {
        config.headers = {}
    }



    if (token) {   // ✅ correct condition
        config.headers.Authorization = `Bearer ${token}`;    
    }



    console.log("Request HEader" , config.headers)
    return config;



});


export default api;