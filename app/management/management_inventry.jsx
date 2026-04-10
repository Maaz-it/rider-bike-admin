import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    Dimensions,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';


const {width} = Dimensions.get("window")

const gentratebike = () =>{
    return Array.from({length: 25} , (_ , ind)=>({
        id: ind.toString(),
        model: ind % 2 === 0 ? "Yamaha R15" : "KTM duke 390",
        chassis : `CHS${Math.floor(1000000 + Math.random() * 9000000)}` ,
        status : ind % 3 === 0 ? "In godown"  : "Assigned" , 
        color : ind % 2 === 0 ? "Racing Blue" : "blood red"
    }));
};

const management_nventry = () => {

    const [bike] = useState(gentratebike())

    const renderBike = ({item}) =>(
        <View style={styles.card}>

<View style={styles.cardHeader}>
<Text style={styles.card}>{item.model}</Text>
<View style={[styles.statusBadge , {backgroundColor : item.status === "In godown" ?  "#BBFF5B"  :  "#333"}]}>
<Text style={[styles.statusText , {color : item.status === "In godown" ? "000" :  "#fff"}]} >
{item.status}
</Text>
</View>
</View>

<View  style={styles.divider}/>

<View style={styles.infoRow}>
        <Text style={styles.label}>Chassis</Text>
        <Text style={styles.value}>{item.chassis}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Color</Text>
        <Text style={styles.value}>{item.color}</Text>
      </View>
    
        </View>
    )

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Godown Inventory</Text>
      
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" />
        <TextInput 
          style={styles.searchInput} 
          placeholder="Search chassis or model..." 
          placeholderTextColor="#666"
        />

        
      </View>
      
      <FlatList 
        data={bike}
        keyExtractor={(item) => item.id}
        renderItem={renderBike}
        contentContainerStyle={{paddingBottom : 100}}
        showsVerticalScrollIndicator={false} 
        />

        <TouchableOpacity style={styles.fab} activeOpacity={0.8}>
        <Ionicons name="document-attach" size={24} color="#000" />
        <Text style={styles.fabText}>UPLOAD CSV</Text>
      </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Clean White Background
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontFamily: 'Poppins_700Bold', // Bold architectural title
    color: '#000000',
    marginBottom: 25,
    letterSpacing: -0.5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F7F7', // Light gray for search
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 55,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  searchInput: {
    flex: 1,
    color: '#000',
    fontFamily: 'Inter_500Medium',
    marginLeft: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    // Soft shadow for the "Luxury" feel
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  modelText: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
    color: '#1A1A1A',
  },
  statusBadge: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 10, // Slightly more squared for luxury look
  },
  statusText: {
    fontSize: 10,
    fontFamily: 'Inter_600SemiBold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  divider: {
    height: 1,
    backgroundColor: '#F5F5F5',
    marginVertical: 15,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    color: '#8E8E93',
    fontSize: 13,
    fontFamily: 'Inter_400Regular',
  },
  value: {
    color: '#000000',
    fontWeight: '600',
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    left: 20,
    backgroundColor: '#BBFF5B', // Your signature Neon Green
    height: 60,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // Stronger shadow for the main action button
    shadowColor: '#BBFF5B',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 8,
  },
  fabText: {
    color: '#000',
    fontSize: 15,
    fontFamily: 'Inter_600SemiBold',
    marginLeft: 12,
    letterSpacing: 0.5,
  },


  
});

export default management_nventry