import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TextInput, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
      <View style={styles.wrapper}>

        <View style={styles.title}>        
          <Text style={styles.title}>Hello , Devs </Text>
        
          <Image source={require('./assets/profilework.png')} 
           style={styles.profile}/>
        
        </View>  

        <Text >14 tasks today</Text>
     
        <View style={styles.searchBar}>
          <Feather name="search" size={24} color="black" style={styles.searchIcon}/>
          <TextInput 
          placeholder='Search' style={styles.searchText}>
          </TextInput>
      
         </View>

         <View style={styles.rowtask}>
          <Text style={styles.subheaders}>Categories</Text>

         </View>


      </View>    
      
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  wrapper:{
    marginTop:15,
    margin: 17,

  },
  title:{
    flexDirection: 'row',
    fontSize:35,
    fontWeight: 'bold',  
 },

  profile:{
    marginLeft:'auto',
    marginTop:5,
    backgroundColor: "#ffff",
    borderRadius: 20,
    width: 40,
    height: 40,  
    
  },

  searchBar:{
    backgroundColor: '#FBF9F7',   
    marginTop: 20,
    marginBottom: 30,
    width: 260,
    padding:10,
    borderRadius: 15,
    fontSize: 20,
    flexDirection: 'row'
  },
  searchIcon:{
    marginRight:10
  },
  subheaders:{
    fontSize: 20,
    fontWeight: 'bold',
  }
  

});
