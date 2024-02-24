import { View, FlatList, Text, Image, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from 'react';
import { UserLogin, UserData } from '../interfaces/interfaces';


const data = require("../data/dados.json")

function TelaHome() {
  const [userLogin, setUserLogin] = useState<UserLogin | null>(null); 

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

  function renderItem({ item }: { item: UserData }) {

    return (

      <SafeAreaView style={{
        padding: 25,
        borderWidth: 1,
        borderRadius: 15,
        marginBottom: 15,
        borderColor: `#a6aec1`,
        backgroundColor: `#a6aec1`
      }}>

        <View style={styles.itemContainer}>
          <Image source={{ uri: item.avatar || 'https://www.petz.com.br/blog/wp-content/uploads/2022/06/animais-selvagens-3.jpg' }} style={styles.itemImage} />
          <Text style={styles.itemText}>{item.username || `Unknown`}</Text>
        </View>

        <View>

          <Text style={{ paddingLeft: 5, fontWeight: `bold` }}>{item.texto || `Undefined`}</Text>
          <Image source={{ uri: item.imagem || 'https://www.petz.com.br/blog/wp-content/uploads/2022/06/animais-selvagens-3.jpg' }} style={styles.imagemFeed} />

          <View style={{ flex: 1, flexDirection: `row`, justifyContent: 'space-between', marginTop: 10, paddingLeft: 10, paddingRight: 10 }}>
            <View style={{ alignItems: 'center' }}>
              <FontAwesome name="comment" size={22} color="black" />
              <Text>0</Text>
            </View>


            <View style={{ alignItems: 'center' }}>
              <Entypo name="retweet" size={22} color="black" />
              <Text>0</Text>

            </View>
            <Pressable style={{ alignItems: 'center' }}>
              <AntDesign name="heart" size={22} color={`black`} />
              <Text>{item.curtidas || 0}</Text>
            </Pressable>
          </View>
        </View>

      </SafeAreaView>

    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data.feed}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: `#6c788e`,
    position: `relative`
  },
  icones: {
    textAlign: `center`
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
    fontWeight: `bold`
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
  }
});


export default TelaHome