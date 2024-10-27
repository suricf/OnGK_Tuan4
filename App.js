import { Text, SafeAreaView, StyleSheet,View,Image,TextInput,FlatList,ScrollView,ActivityIndicator 
 } from 'react-native';
import react from 'react'
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import axios from 'axios'
export default function App() {

  const [Category,setCategory]=react.useState([
    {
      id:1,
      name:"Resort",
      image :require('./assets/baiTH4/resort.png')
    },
     {
      id:2,
      name:"HomeStay",
      image :require('./assets/baiTH4/homestay.png')
    },
     {
      id:3,
      name:"Hotel",
      image :require('./assets/baiTH4/hotel.png')
    },
     {
      id:4,
      name:"Lodge",
      image :require('./assets/baiTH4/lodge.png')
    },
     {
      id:5,
      name:"Villa",
      image :require('./assets/baiTH4/villa.png')
    },
     {
      id:6,
      name:"Apartment",
      image :require('./assets/baiTH4/apartment.png')
    },
     {
      id:7,
      name:"Hostel",
      image :require('./assets/baiTH4/hostel.png')
    },
     {
      id:8,
      name:"Resort",
      image :require('./assets/baiTH4/seeall.png')
    },
  ])

  const [location,setLocation]=react.useState([
    {
      id:1,
      image:require("./assets/baiTH4/photo1.png")
    },

     {
      id:2,
      image:require("./assets/baiTH4/photo2.png")
    },

     {
      id:3,
      image:require("./assets/baiTH4/photo3.png")
    },

     {
      id:4,
      image:require("./assets/baiTH4/photo4.png")
    },

     {
      id:5,
      image:require("./assets/baiTH4/photo5.png")
    },
  ])

  const [CategoryAPI,setCategoryAPI]=react.useState([])
    const [locationAPI,setLocationAPI]=react.useState([])
  const [isLoading,setIsLoading]=react.useState(false)

    react.useEffect(()=>{


    const fetchData =async()=>{
        setIsLoading(true)
        try
        {
          const rescate=await axios.get("https://66195da2125e9bb9f299cf4f.mockapi.io/giuaki/category")
          const resLocation=await axios.get("https://66195da2125e9bb9f299cf4f.mockapi.io/giuaki/location")
          
            setCategoryAPI(rescate.data)
            setLocationAPI(resLocation.data)
        }catch (error){
          console.log(error)
        }finally{
          setIsLoading(false)
        }
    }
    fetchData()
    },[])

  return (



    <SafeAreaView style={styles.container}>
    <ScrollView>
       <View style={{ alignItems:'center',height:180,backgroundColor:'#5958b2',
        justifyContent:'center'}  }>

        <View style={{flexDirection:'row',alignItems:'center' }}>

                <Image source={require("./assets/baiTH4/logoicon.png")} style={{width:40,height:40}}/>
                <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'#fff',
                borderRadius:10,padding:5 }}>
                    <TextInput placeholder="Search here" style={{flex:1}}/>
                    <Image source={require('./assets/baiTH4/findicon.png')}
                      style={{  borderRadius:20}}
                    />
                </View>
        </View>


        <View style={{flexDirection:'row',justifyContent:'space-between',columnGap:60,marginTop:30}}>

            <View  style={{flexDirection:'row'}}>

                <Image source={require("./assets/baiTH4/personicon.png")} style={{width:40,height:40,
                borderRadius:20}}/>
                <View>
                      <Text style={{color:'#fff',fontWeight:"bold"}}>WelCome!</Text>
                      <Text style={{color:'#fff' }}>Donna Stroupe</Text>
                </View>
            </View>

            <Image source={require("./assets/baiTH4/ringicon.png")}
             style={{width:40,height:40}}
            />
        </View>
      


      </View>


      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',margin:20}}
      >
          <Text style={{fontSize:18}}>
                   Category
          </Text>
          <Image source={require("./assets/baiTH4/3gach.png")} style={{width:40,height:40}}/>
      </View>

     
     {isLoading ? <ActivityIndicator />
     
     : 
      <FlatList 
      data={CategoryAPI}
      renderItem={({item})=>(

        <View style={{alignItems:'center',padding:5}}>
            <Image source={item.image}  style={{width:80,height:80}}/>
            <Text> {item.name}</Text>
        </View>
      )}
      numColumns={4}
      />

     }
     

       <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',margin:20}
       }>
          <Text style={{fontSize:18}}>
                  Popular Destination
          </Text>
          <Image source={require("./assets/baiTH4/3gach.png")} style={{width:40,height:40}}/>
      </View>
      <FlatList 
      data={locationAPI}
      renderItem={({item})=>(

        <View style={{alignItems:'center',padding:5}}>
            <Image source={item.image} style={{width:80,height:80,borderRadius:10}}/>
            
        </View>
      )}
      horizontal
      />

       <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',margin:20}
       }>
          <Text style={{fontSize:18}}>
                Recommened
          </Text>
          
      </View>
      <FlatList 
      data={locationAPI}
      renderItem={({item})=>(

        <View style={{alignItems:'center',padding:5}}>
            <Image source={item.image} style={{width:170,height:100,borderRadius:10}}/>
            
        </View>
      )}
      numColumns={2}
      // numColumns={2}
      />

    </ScrollView>

    <View
    style={{ alignItems:'center',height:100,backgroundColor:'#5958b2',
        justifyContent:'space-around',flexDirection:'row'}  }
    >
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Image source={require("./assets/baiTH4/homeicon.png")} style={{width:40,height:40}}/>
          <Text style={{color:'#fff'}}>Home</Text>
        </View>
 
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Image source={require("./assets/baiTH4/exploreicon.png")} style={{width:40,height:40}}/>
          <Text style={{color:'#fff'}}>Explore</Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Image source={require("./assets/baiTH4/searchicon.png")} style={{width:40,height:40}}/>
          <Text style={{color:'#fff'}}>Search</Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Image source={require("./assets/baiTH4/profileicon.png")} style={{width:40,height:40}}/>
          <Text style={{color:'#fff'}}>Profile  </Text>
        </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     
  },
  
});
