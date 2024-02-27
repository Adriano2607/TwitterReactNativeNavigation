import { View, FlatList, Text, Image, StyleSheet, SafeAreaView, Pressable, Switch } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useEffect, useState } from 'react';
import { UserLogin, UserData } from '../interfaces/interfaces';
import { dark, light } from '../constants/theme';
import { ThemeContext } from '../contexts/theme';


const data = require("../data/dados.json")

function TelaHome() {
  const [userLogin, setUserLogin] = useState<UserLogin | null>(null); 
  const [, setForceRender] = useState(false);

  const { theme, setTheme } = useContext(ThemeContext);
  const [isEnabled, setIsEnabled] = useState(false);
  
 

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    //console.log('tema recebida === ' +theme)
    const newTheme = theme === 'dark' ? 'light' : 'dark'; 
    //console.log('cor trocada === '+newTheme)
    setTheme(newTheme); 
  };



  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('userLogin');
        if (jsonValue !== null) {
          const parsedData: UserLogin = JSON.parse(jsonValue);
          setUserLogin(parsedData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  function Like(object:UserData){
    const itemEncontrado = data.feed.find((a: { id: string; }) => a.id === object.id);
    

    if(itemEncontrado) {
    itemEncontrado.curtidas = itemEncontrado.curtidas ? itemEncontrado.curtidas + 1 : 1;
    setForceRender(prev => !prev); 
    }
  }

  function renderItem({ item }: { item: UserData }) {
    
    return (

      <SafeAreaView style={{
        padding: 25,
        borderWidth: 1,
        borderRadius: 15,
        marginBottom: 15,
        
        borderColor:"#003366",
        backgroundColor: theme === "dark" ? dark.carColor : light.carColor,
      }}>

        <View style={styles.itemContainer}>
          <Image source={{ uri: item.avatar || 'https://www.petz.com.br/blog/wp-content/uploads/2022/06/animais-selvagens-3.jpg' }} style={styles.itemImage} />
          <Text style={styles.itemText}>{item.username || `Unknown`}</Text>
        </View>

        <View>

          <Text style={styles.descricao}>{item.texto || `Undefined`}</Text>
          <Image source={{ uri: item.imagem || 'https://www.petz.com.br/blog/wp-content/uploads/2022/06/animais-selvagens-3.jpg' }} style={styles.imagemFeed} />

          <View style={styles.btn}>
            <View style={{ alignItems: 'center' }}>
              <FontAwesome name="comment" size={22} color={theme ==='light' ? light.color : dark.color} />
              <Text style={styles.numeros}>0</Text>
            </View>


            <View style={{ alignItems: 'center' }}>
              <Entypo name="retweet" size={22} color={theme ==='light' ? light.color : dark.color}  />
              <Text style={styles.numeros}>0</Text>

            </View>
            <Pressable onPress={() => Like(item)} style={{ alignItems: 'center' }}>
              <AntDesign name="heart" size={22} color={theme ==='light' ? light.color : dark.color} />
              <Text style={styles.numeros}>{item.curtidas || 0}</Text>
            </Pressable>
          </View>
        </View>

      </SafeAreaView>

    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 50,
      backgroundColor: theme === "dark" ? dark.background : light.background
    },
    icones: {
      textAlign: `center`
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10
    },
    itemImage: {
      width: 40,
      height: 40,
      borderRadius: 25,
      marginRight: 10,
    },
    itemText: {
      fontSize: 16,
      fontWeight: `bold`,
      color: theme === "dark" ? dark.color : light.color,
    },
    imagemFeed: {
      width: 300,
      height: 300,
      borderRadius: 25,
      marginTop: 15,
      marginBottom: 15
    },usuario:{
      marginBottom:15,
      fontWeight:'bold',
      fontSize:20,
      color:`white`
    },create:{
      flexDirection:`row`,
      justifyContent:`space-between`,
      width:'100%',
      paddingHorizontal:30
    },descricao:{
      paddingLeft: 5,
       fontWeight: `bold` ,
       color: theme === "dark" ? dark.color : light.color
    },btn:{
       flex: 1, 
       flexDirection: `row`, 
       justifyContent: 'space-between',
        marginTop: 10, paddingLeft: 10,
         paddingRight: 10 
    },numeros:{
      color: theme === "dark" ? dark.color : light.color
    }
  });
  
  return (
    <View style={styles.container}>
       <Switch
        thumbColor={theme === 'dark' ? 'white' : 'black'}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <FlatList
        data={data.feed}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}




export default TelaHome