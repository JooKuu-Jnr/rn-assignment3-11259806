import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TextInput, Image, FlatList,  } from 'react-native';
import { Feather } from '@expo/vector-icons';
import data from './assets/data.json';

export default function App() {
  const info = data[0];

  const getImage = (imagePath) => {
    switch(imagePath) {
      case './assets/photo1.png':
        return require('./assets/photo1.png');
      case './assets/photo2.png':
        return require('./assets/photo2.png');

      default:
        return null; 
    }
  };
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
     <View style={styles.flex}>
        <View style={styles.searchBar}>
          <Feather name="search" size={24} color="black" style={styles.searchIcon}/>
          <TextInput 
          placeholder='Search' style={styles.searchText}>
          </TextInput>

          
         </View>
         <View style={styles.button}>
          <Image source={require('./assets/filter.png')} 
           />
        </View>

        </View> 
          <Text style={styles.subheaders}>Categories</Text>
          <FlatList 
          data={data.firstList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{gap:20, marginBottom:12}}
          renderItem={({item}) =>(
                <View style={styles.rowTasks}>
              <Text style={styles.subheaders2}>{item.name}</Text>
              <Text>{item.tasks}</Text>
              <Image source={getImage(item.image)} style={styles.image} />
            </View>
          )
        }/>

          <Text style={styles.subheaders}>Ongoing Tasks</Text>
          <FlatList 
          data={data.secondList}
        
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{gap:20, marginBottom:12}}
          renderItem={({item}) =>(
                <View style={styles.columnTasks}>
              <Text style={styles.subheaders2}>{item.name}</Text>
              
            </View>
          )
        }/>

      </View>    
      
      </ScrollView>
      <StatusBar style="auto"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
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
  button:{
    marginLeft:'auto',
    marginTop: 22,
    paddingLeft: 3,
    backgroundColor: "#FF5F15",
    borderRadius: 12,
    width: 40,
    height: 40, 
  },
  flex:{
    flexDirection:'row'
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
    fontSize: 25,
    fontWeight: 'bold',
  },
  subheaders2:{
    fontSize: 20,
    fontWeight: 'bold',
  },

  rowTasks:{
    backgroundColor: '#FBF9F7',
    marginTop:12,
    width:186,
    height: 192,
    borderRadius: 10,
    padding:10
  },
  columnTasks:{
    flex:1 ,
    justifyContent:'center',
    paddingLeft: 15,
    backgroundColor: '#FBF9F7',
    borderWidth:1,
    borderColor:'#E8D1BA',
    marginTop:12,
    width:340,
    height: 128,
    borderRadius: 15,
    

  }
  

});
